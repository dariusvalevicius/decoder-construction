
import os
from tqdm import tqdm
import json
import numpy as np

from nilearn import datasets
import ants

def linear_interpolation(value1, value2, time1, time2, target_time):
    return value1 + (value2 - value1) * ((target_time - time1) / (time2 - time1))



## Create derivatives folder
input_dir = '../data/bids'
output_dir = '../data/derivatives'

if not os.path.exists(output_dir):
    os.makedirs(output_dir)


for sub in range(1,2):

    ## For anatomical files, align to MNI space

    mni_img = ants.image_read(datasets.fetch_icbm152_2009()['t1'])
    target_img = ants.crop_image(ants.resample_image(mni_img, (3,3,3)))

    anat_img = ants.image_read(f"{input_dir}/sub-0{sub}/ses-01/anat/sub-0{sub}_ses-01_T1w.nii.gz")

    anat_reg = ants.registration(mni_img, anat_img, type_of_transform="SyN")
    # ants.image_write(anat_reg['warpedmovout'], 't1w_MNI.nii.gz')


    # ants.plot(mni_img, overlay=anat_reg['warpedmovout'], overlay_alpha=0.5, crop=False)

    for ses in range(1,5):
        for run in range(1,5):

            fmri_path = f"{input_dir}/sub-0{sub}/ses-0{ses}/func/sub-0{sub}_ses-0{ses}_task-video_run-{run}_bold.nii.gz"

            if not os.path.isfile(fmri_path):
                continue

            print(f"Correcting file: {fmri_path}")

            fmri = ants.image_read(fmri_path)
            images_unmerged = ants.ndimage_to_list( fmri )
            motion_corrected = list()

            fmri_reg = ants.registration(anat_img, images_unmerged[0], type_of_transform="BOLDAffine")
            transforms = fmri_reg['fwdtransforms'] + anat_reg['fwdtransforms']


            for i in tqdm(range(len(images_unmerged))):

                aligned = ants.registration( images_unmerged[0], images_unmerged[i], "BOLDAffine" )
                areg = ants.apply_transforms(fixed = target_img, 
                                                moving = aligned['warpedmovout'] , 
                                                transformlist = transforms, 
                                                interpolator  = 'nearestNeighbor')
                motion_corrected.append( areg )

            fmri_mc = ants.list_to_ndimage(fmri, motion_corrected)


            mc_path = f"{output_dir}/sub-0{sub}/ses-0{ses}/func/sub-0{sub}_ses-0{ses}_task-video_run-{run}_motion-corrected_bold.nii.gz"
            path, name = os.path.split(mc_path)
            if not os.path.exists(path):
                os.makedirs(path)

            ants.image_write( fmri_mc, mc_path )

            # fmri_np = fmri_img.get_fdata()
            fmri_np = fmri_mc.numpy()

            # print(fmri_np.dtype)
            # affine = fmri_img.affine

            # Get slice timing info
            json_path = f"../data/bids/sub-0{sub}/ses-0{ses}/func/sub-0{sub}_ses-0{ses}_task-video_run-{run}_bold.json"

            with open(json_path) as json_file:
                metadata = json.load(json_file)

            slice_timing = metadata["SliceTiming"]
            # print(slice_timing)

            tr = metadata['RepetitionTime']
            # print(tr)

            align_time = tr / 2


            fmri_st = np.copy(fmri_np)

            # print(fmri_np.shape)
            # For every frame, iterate through slices
            for i in range(1, fmri_np.shape[3] - 1):

                for j in range(fmri_np.shape[2]):

                    t = slice_timing[j]
                        
                    slice_t_minus_1 = fmri_np[..., j, i - 1]
                    slice_t = fmri_np[..., j, i]
                    slice_t_plus_1 = fmri_np[..., j, i + 1]
                    
                    if t < align_time:
                        t1 = t
                        t2 = t + tr
                        val1 = slice_t
                        val2 = slice_t_plus_1
                    else:
                        t1 = t - tr
                        t2 = t
                        val1 = slice_t_minus_1
                        val2 = slice_t

                    fmri_st[..., j, i] = linear_interpolation(val1, val2, t1, t2, align_time)



            # corrected_img = nib.nifti1.Nifti1Image(fmri_st.astype("float32"), affine=affine)

            
            output_filename = f"../data/derivatives/sub-0{sub}/ses-0{ses}/func/sub-0{sub}_ses-0{ses}_task-video_run-{run}_motion-corrected_slice-timing_bold.nii.gz"

            # nib.save(corrected_img, output_filename)

            ants.image_write(ants.from_numpy(fmri_st.astype("float32")), output_filename)



