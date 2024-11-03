#!/bin/bash

# Variables
SERVICE_ACCOUNT_NAME="wilco"
DESCRIPTION="Verify wilco actions"
DISPLAY_NAME="Wilco"
PROJECT_ID=$(gcloud config get-value project)
ROLE="roles/storage.admin"
KEY_FILE_PATH="/tmp/wilco_creds.json"  

# Create the service account
gcloud iam service-accounts create $SERVICE_ACCOUNT_NAME \
  --description="$DESCRIPTION" \
  --display-name="$DISPLAY_NAME"

# Assign the role to the service account
gcloud projects add-iam-policy-binding $PROJECT_ID \
  --member="serviceAccount:${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com" \
  --role="$ROLE"

# Generate the key file for the service account
gcloud iam service-accounts keys create $KEY_FILE_PATH \
  --iam-account "${SERVICE_ACCOUNT_NAME}@${PROJECT_ID}.iam.gserviceaccount.com"

# Display the key file content
echo "Service account key file content:"
cat $KEY_FILE_PATH
