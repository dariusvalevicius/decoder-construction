# Decoder Construction for rt-fMRI Image Evolution

Under construction!

This repo contains the python code for creating model files for brain decoding of fear ratings. Input data from a Siemens machine are converted to NIfTI, and then BIDS format. There is then a script for image alignment in native space, followed by a Jupyter notebook for computing the Principal Component Analysis and logistic regression.

## convert_to_nifti.py

Takes a directory of .DCM or .IMA files and converts them to NIfTI formatted files using dcm2niix.

## convert_to_bids.py

Reorganizes and renames the NIfTI files using BIDS community conventions.

## alignment.py

Script for aligning fMRI frames to the anatomical image. Uses the ANTSpyx library, for fast affine registration. Manual alignment, rather than a preprocessing library like fMRIPrep, is needed in order to ensure that offline and online preprocessing steps are identical. Preprocessing also needs to be minimal to ensure that single frames can be processed in less than the time-length of one frame acquisition (TR).

## model.ipynb

Jupyter notebook that collects the fMRI and events data, and computes the PCA and logistic regression models used for realtime decoding.

Outputs are:

- Brain mask (based on anatomical T1w scan)
- NiftiMasker object (nilearn) for converting fMRI runs to 2D matrices
- PCA model
- Logistic regression models for fear, disgust, and cuteness predictions

## Psychopy

In the psychopy directory are two programs, one for online video presentation and one for offline (out-of-scanner) video rating. The video rating program is also adapted for web-based completion via Pavlovia, using the .js version of the program.

Two stimulus sets, involving 200 animal videos comprised of 10 unique categories each, are also included. These videos are acquired with a Creative Commons license from websites including Pexels, Pixabay, Mixkit, and YouTube.