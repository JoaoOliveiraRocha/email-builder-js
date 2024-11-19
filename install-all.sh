#!/bin/bash

# Navigate to the src/packages directory
cd packages || { echo "packages directory not found"; exit 1; }

# Loop through each immediate subdirectory
for dir in */; do
  if [[ -d "$dir" ]]; then
    cd "$dir" || continue
    if [[ -f "package.json" ]]; then
      echo "Running 'npm install' in $(pwd)"
      npm install
    else
      echo "No package.json found in $(pwd)"
    fi
    cd ..
  fi
done
