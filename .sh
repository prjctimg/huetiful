#!/bin/bash

# Find empty directories in lib
find lib -type d -empty | while read dir; do
  # Delete the empty directory
  rmdir "$dir"
done