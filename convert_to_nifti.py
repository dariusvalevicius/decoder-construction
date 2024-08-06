import os
import subprocess
from tqdm import tqdm
import dicom2nifti
from pathlib import Path


def rename_ima_to_dcm(root_dir):
    """
    Recursively rename .ima files to .dcm files in the given directory.

    Parameters:
    root_dir (str): Path to the directory containing .ima files.
    """
    for subdir, _, files in os.walk(root_dir):
        for file in files:
            # print(file)
            if file.endswith('.IMA'):
                old_path = os.path.join(subdir, file)
                new_path = os.path.join(subdir, file.replace('.IMA', '.dcm'))
                os.rename(old_path, new_path)
                # print(f"Renamed {old_path} to {new_path}")



def convert_dicom_to_nifti(dicom_dir, output_dir):
    """
    Convert DICOM files to NIfTI format using dcm2niix.

    Parameters:
    dicom_dir (str): Path to the directory containing DICOM files.
    output_dir (str): Path to the directory where NIfTI files will be saved.
    """
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    

    for sub_num in range(1,2):

        for ses_num in range(5,6):

            path = os.path.join(dicom_dir, f"sub-0{sub_num}/ses-0{ses_num}")

            if os.path.exists(path):

                print(path)

                output_path = os.path.join(output_dir, f"sub-0{sub_num}/ses-0{ses_num}")

                if not os.path.exists(output_path):
                    os.makedirs(output_path)

                command = [
                    'dcm2niix',
                    '-b', 'y',  # Generate BIDS sidecar JSON file
                    '-z', 'y',  # Compress NIfTI output
                    '-o', output_path,  # Output directory
                    path  # Input DICOM directory
                ]

                try:
                    result = subprocess.run(command, check=True, capture_output=True, text=True)
                    # print("Conversion successful.")
                    # print(result.stdout)
                except subprocess.CalledProcessError as e:
                    print("Conversion failed.")
                    print(e.stderr)



if __name__ == "__main__":


    root_directory = f'../data/source'
    rename_ima_to_dcm(root_directory)

    
    output_directory = '../data/nifti'
    convert_dicom_to_nifti(root_directory, output_directory)