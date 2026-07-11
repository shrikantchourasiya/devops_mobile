#!/bin/bash
echo "=== STARTING DEPLOYMENT ==="

# File ko Nginx ke folder mein copy kar rahe hain
cp index.html /data/data/com.termux/files/usr/share/nginx/html/index.html

echo "Copying files to Nginx root..."
echo "Refreshing Nginx server configuration..."

# Nginx ko reload karne ki command taaki changes turant apply ho jayein
nginx -s reload

echo "🚀 Deployment Complete! Website is live at http://localhost:8080"
