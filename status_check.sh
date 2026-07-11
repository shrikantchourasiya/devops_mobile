#!/bin/bash
#!/bin/bash
echo "=== ADVANCED SERVER CHECK ==="

# User se input maang rahe hain aur use 'website' naam ke variable mein save kar rahe hain
read -p "Kaun si website check karni hai? (e.g., github.com): " website

echo "Checking connection to $website..."
ping -c 2 $website

echo "---------------------------"
echo "$website ka check complete ho gaya hai!"
