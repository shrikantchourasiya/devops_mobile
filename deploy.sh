#!/bin/bash
echo "====================================="
echo "       ADVANCED DEPLOYMENT PIPELINE  "
echo "====================================="

# Directories ke paths set kar rahe hain
NGINX_ROOT="/data/data/com.termux/files/usr/share/nginx/html"
BACKUP_DIR="./backups"
LOG_FILE="./deploy.log"

# 1. Agar backup folder nahi hai, toh banao
mkdir -p $BACKUP_DIR

# 2. CURRENT TIMESTAMP banana (e.g., 2026-07-11_11-45-00)
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M-%S")

echo "Taking backup of current production site..."
# Agar pehle se koi file chal rahi hai Nginx mein, toh uska backup lo
if [ -f "$NGINX_ROOT/index.html" ]; then
    cp "$NGINX_ROOT/index.html" "$BACKUP_DIR/index_backup_$TIMESTAMP.html"
    echo "Backup saved as: index_backup_$TIMESTAMP.html"
fi

echo "Deploying new frontend files to Nginx root..."
# Naye code ko deploy karna
cp index.html "$NGINX_ROOT/index.html"

echo "Reloading Nginx web server..."
nginx -s reload

# 3. Log file mein entry daalna
echo "[$TIMESTAMP] SUCCESS: Deployed successfully by Shrikant" >> $LOG_FILE

echo "====================================="
echo "🚀 Live URL: http://localhost:8080"
echo "====================================="
