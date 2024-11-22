#!/bin/bash

cd packages || { echo "packages directory not found; Run it in source please"; exit 1; }

for dir in */; do
  if [[ -d "$dir" ]]; then
    cd "$dir" || continue
    if [[ -f "package.json" ]]; then
      echo "Running 'npm install' in $(pwd)"
      npm install
    fi
    cd ..
  fi
done
