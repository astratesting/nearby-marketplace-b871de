#!/bin/bash
# Script to list top-level directory structure and check frontend setup

echo "=== Top-Level Directory Structure ==="
ls -la

echo ""
echo "=== Checking for frontend directory ==="
if [ -d "frontend" ]; then
    echo "frontend/ directory EXISTS"
    echo ""
    echo "=== Frontend contents ==="
    ls -la frontend/

    if [ -f "frontend/package.json" ]; then
        echo ""
        echo "=== frontend/package.json EXISTS ==="
    else
        echo ""
        echo "=== frontend/package.json NOT FOUND ==="
    fi
else
    echo "frontend/ directory DOES NOT EXIST"
fi
