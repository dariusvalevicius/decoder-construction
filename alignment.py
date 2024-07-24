
import os, shutil
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

    # mni_img = ants.image_read(datasets.fetch_icbm152_2009()['t1'])
    # mni_img_resampled = ants.resample_image(mni_img, (3,3,3))
    # target_img = ants.crop_image(mni_img_resampled)

    anat_img = ants.image_read(f"{input_dir}/sub-0{sub}/ses-01/anat/sub-0{sub}_ses-01_T1w.nii.gz")
    # anat_img_resampled = ants.resample_image(anat_img, (3,3,3))

    # anat_reg_highres = ants.registration(mni_img, anat_img, type_of_transform="SyN")

    # ants_reg_path = f"{output_dir}/sub-0{sub}/ses-01/anat/sub-0{sub}_ses-01_space-MNI_T1w.nii.gz"
    # if not os.path.exists(f"{output_dir}/sub-0{sub}/ses-01/anat"):
    #     os.makedirs(f"{output_dir}/sub-0{sub}/ses-01/anat")

    # ants.image_write(anat_reg_highres['warpedmovout'], f"{output_dir}/sub-0{sub}/ses-01/anat/sub-0{sub}_ses-01_space-MNI_T1w.nii.gz")

    # anat_reg = ants.registration(mni_img_resampled, anat_img_resampled, type_of_transform="SyN")
    # # ants.image_write(anat_reg['warpedmovout'], 't1w_MNI.nii.gz')

    # for file in anat_reg['fwdtransforms']:
    #     dest_path = f"{output_dir}/sub-0{sub}/ses-01/anat"
    #     shutil.copy(file, dest_path)


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

            if ses==1 and run==1:
                fmri_ref = images_unmerged[0]
                fmri_reg = ants.registration(anat_img, fmri_ref, type_of_transform="BOLDAffine")
                target_img = ants.crop_image(ants.resample_image(fmri_reg['warpedmovout'], (3,3,3)))

            # for file in fmri_reg['fwdtransforms']:
            #     dest_path = f"{output_dir}/sub-0{sub}/ses-0{ses}/func"
            #     shutil.copy(file, dest_path)
                
            transforms = fmri_reg['fwdtransforms']# + anat_reg['fwdtransforms']
            # print(transforms)

            target_output_path = f"output/sub-{sub:02}"
            if not os.path.exists(target_output_path):
                os.makedirs(target_output_path)
            ants.image_write(target_img, f"{target_output_path}/target_img.nii.gz")
            # exit()

            for i in tqdm(range(len(images_unmerged))):

                aligned = ants.registration( target_img, images_unmerged[i], "BOLDAffine" )
                # areg = ants.apply_transforms(fixed = target_img, 
                #                                 moving = aligned['warpedmovout'] , 
                #                                 transformlist = transforms, 
                #                                 interpolator  = 'nearestNeighbor')
                motion_corrected.append( aligned['warpedmovout'] )

            # Get the shape of the 3D images (assuming all images have the same shape)
            image_shape = motion_corrected[0].shape

            # Create a 4D NumPy array to hold the 3D images
            # The shape will be (x, y, z, t) where t is the number of 3D images
            num_images = len(motion_corrected)
            four_d_array = np.zeros((image_shape[0], image_shape[1], image_shape[2], num_images))

            # Populate the 4D array with the 3D images
            for i, img in enumerate(motion_corrected):
                four_d_array[:, :, :, i] = img.numpy()

            # Convert the 4D NumPy array back to an ANTs image
            # Here we need to specify origin, spacing, and direction for 4 dimensions
            origin_4d = list(motion_corrected[0].origin) + [0.0]
            spacing_4d = list(motion_corrected[0].spacing) + [1.0]  # Assuming a temporal spacing of 1
            direction_3d = motion_corrected[0].direction
            direction_4d = np.eye(4)
            direction_4d[:3, :3] = direction_3d

            fmri_mc = ants.from_numpy(four_d_array, origin=origin_4d, spacing=spacing_4d, direction=direction_4d)


            mc_path = f"{output_dir}/sub-0{sub}/ses-0{ses}/func/sub-0{sub}_ses-0{ses}_task-video_run-{run}_motion-corrected_bold.nii.gz"
            path, name = os.path.split(mc_path)
            if not os.path.exists(path):
                os.makedirs(path)

            ants.image_write( fmri_mc, mc_path )


