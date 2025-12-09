#!/bin/bash

# 1. ตั้งค่า Path โฟลเดอร์เว็บไซต์ (*** อย่าลืมแก้ตรงนี้เป็น Path ของ Linux ***)
# ตัวอย่าง: /var/www/html/ikkiwp09.com หรือ /home/user/desktop/ikkiwp09.com
DIRECTORY="/mnt/binbows/Users/TUF A15/Desktop/ikkiwp09.com"

# 2. ข้อความใหม่ที่จะนำไปแทนที่
NEW_LINK='<link rel="icon" type="image/png" sizes="736x736" href="/src/img/signal-2025-11-21-121500-modified.png">'

# ตรวจสอบว่ามีโฟลเดอร์อยู่จริงไหม
if [ ! -d "$DIRECTORY" ]; then
    echo "Error: ไม่พบโฟลเดอร์ $DIRECTORY"
    exit 1
fi

echo "Start updating..."

# 3. ส่งค่าตัวแปร NEW_LINK เข้าไปใน Environment เพื่อให้ Perl เรียกใช้ได้ (ป้องกันปัญหาเรื่องเครื่องหมาย " และ / ตีกัน)
export NEW_LINK_ENV="$NEW_LINK"

# 4. ค้นหาไฟล์และทำการแทนที่
# find: ค้นหาไฟล์ .html
# -not -path "*/V2/*": ยกเว้นไฟล์ที่อยู่ในโฟลเดอร์ที่มีชื่อ V2
find "$DIRECTORY" -type f -name "*.html" -not -path "*/V2/*" | while read -r file; do
    echo "กำลังอัปเดตไฟล์: $file"
    
    # ใช้ Perl ทำการแทนที่ (เลียนแบบ Logic ของ PowerShell)
    # -0777 : อ่านไฟล์ทั้งไฟล์เป็นก้อนเดียว (เพื่อให้ regex ข้ามบรรทัดได้เหมือน (?s))
    # -pi   : แก้ไขไฟล์ทับไฟล์เดิม (-i)
    # s/.../.../gs : g=global (ทำทั้งหมด), s=single line mode (. match newline ได้)
    
    perl -0777 -pi -e 's/<link\s+rel="icon".*?href=".*?">.*?/$ENV{NEW_LINK_ENV}/gs' "$file"
done

echo "---"
echo "อัปเดต Favicon เสร็จสมบูรณ์แล้วในทุกไฟล์ HTML (ยกเว้นในโฟลเดอร์ V2)"
