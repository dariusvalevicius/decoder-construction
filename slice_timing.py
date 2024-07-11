import numpy as np
import json
import nibabel as nib
from tqdm import tqdm
import os

def linear_interpolation(value1, value2, time1, time2, target_time):
    return value1 + (value2 - value1) * ((target_time - time1) / (time2 - time1))


for sub in range(1,2):

    for ses in range(1,5):
        for run in range(1,5):

            fmri_path = f"../data/derivatives/sub-0{sub}/ses-0{ses}/func/sub-0{sub}_ses-0{ses}_task-video_run-{run}_motion-corrected_bold.nii.gz"

            if not os.path.isfile(fmri_path):
                continue

            fmri_img = nib.load(fmri_path)

            fmri_np = fmri_img.get_fdata()
            print(fmri_np.dtype)
            affine = fmri_img.affine

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
            for i in tqdm(range(1, fmri_np.shape[3] - 1)):

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



            corrected_img = nib.nifti1.Nifti1Image(fmri_st.astype("float32"), affine=affine)
            
            output_filename = f"../data/derivatives/sub-0{sub}/ses-0{ses}/func/sub-0{sub}_ses-0{ses}_task-video_run-{run}_motion-corrected_slice-timing_bold.nii.gz"

            nib.save(corrected_img, output_filename)


