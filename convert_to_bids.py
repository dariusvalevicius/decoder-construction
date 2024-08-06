import os
import json
from bids import BIDSLayout
import glob
import shutil
from bids_validator import BIDSValidator
import re


def organize_to_bids(input_dir, output_dir, subject_label):

    # Create the BIDS directory structure
    os.makedirs(output_dir, exist_ok=True)

    # Loop through the NIfTI files and organize them into BIDS structure
    for file in os.listdir(input_dir):
        if file.endswith('.nii') or file.endswith('.nii.gz'):
            # Get metadata from JSON sidecar file
            # You may need to modify this part to extract metadata
            # For now, it's assuming metadata is extracted from the filename itself
            session_label = file.split('_')[0]

            modality = None
            if re.search("MEMPRAGE.*6.nii.gz", file):
                modality = "anat"
            elif "task" in file:
                modality = "func"

                if "DecConst" in file:
                    run = file.split('DecConst',1)[1].split('_')[0]
                elif "RT" in file:
                    run = file.split('RT',1)[1].split('_')[0]


            # Build BIDS filename based on metadata
            if modality == "anat":
                bids_filename = f'sub-{subject_label}_{session_label}_T1w.nii.gz'
            elif modality == "func":
                bids_filename = f'sub-{subject_label}_{session_label}_task-video_run-{run}_bold.nii.gz'

            if modality:
                # Move the NIfTI file to the BIDS directory and rename it
                src_path = os.path.join(input_dir, file)

                dst_path = os.path.join(output_dir, f"sub-{subject_label}", f"{session_label}", modality)
                if not os.path.exists(dst_path):
                    os.makedirs(dst_path)

                shutil.copy(src_path, os.path.join(dst_path, bids_filename))

                # Write JSON sidecar file
                # For simplicity, an empty JSON file is created here
                json_src_path = src_path.replace('.nii.gz', '.json')
                json_dst_path = os.path.join(dst_path, bids_filename).replace('.nii.gz', '.json')

                shutil.copy(json_src_path, json_dst_path)

                if modality == "func":
                    with open(json_dst_path, 'r') as file:
                        data = json.load(file)
                    data.update({"TaskName": "video"})
                    with open(json_dst_path, 'w') as file:
                        json.dump(data, file, indent=4)

    print("Organizing into BIDS format completed.")




if __name__ == "__main__":

    # Example usage
    input_directory = '../data/nifti'
    output_directory = '../data/bids'
    subject_label = '01'

    for ses_num in range(5,6):
        path = f'../data/nifti/sub-{subject_label}/ses-0{ses_num}'
        if os.path.exists(path):
            organize_to_bids(f'../data/nifti/sub-{subject_label}/ses-0{ses_num}', output_directory, subject_label)

    validator = BIDSValidator()
    print(validator.is_bids('bids')) 
