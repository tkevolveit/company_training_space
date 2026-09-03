#!/bin/bash

# How to execute this script
# Make the script executable
# chmod +x daily_copy.sh
# Run the script:： ./daily_copy.sh
# cp ./reports/2026-08-27_YWT.txt ./reports/2026-08-28_YWT.txt

echo "=== Starting Daily Reports ==="

# Set a source file and destination directory
SOURCE="C:\Users\takuya_kawamura\Desktop\tk_workspace\reports\2026-08-27_YWT.txt"
DEST_DIR="C:\Users\takuya_kawamura\Desktop\tk_workspace\reports"
# DEST_DIR="/c/Users/takuya_kawamura/Desktop/tk_workspace/reports"

# Navigate to the target directory
cd "$DEST_DIR" || { echo "Directory not found. Existing."; exit 1; }

# Get today's date: Format YYYY-MM-DD, 
# e.g., 2026-08-27_YWT.txt
TODAY=$(date +%Y-%m-%d)

# Copy and rename file
cp "$SOURCE" "./${TODAY}_YWT.txt"

echo "Copied to $DEST_DIR/${TODAY}_YWT.txt"