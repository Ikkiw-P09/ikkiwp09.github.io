$oldRegex = '(?s)<link\s+rel="icon".*?href=".*?">.*?'
$newLink = '<link rel="icon" type="image/png" sizes="736x736" href="/src/img/4533cc27d412d5f6ae452e3d938b3f4b-modified.png">'
$directory = 'C:\Users\TUF A15\Desktop\ikkiwp09.com' # เปลี่ยนเป็น path ของโฟลเดอร์เว็บไซต์ของคุณ

# ดึงรายชื่อไฟล์ HTML ทั้งหมดแบบ Recurse และคัดกรองเฉพาะไฟล์ที่ไม่อยู่ในโฟลเดอร์ V2 หรือโฟลเดอร์ย่อยของมัน
$filesToUpdate = Get-ChildItem -Path $directory -Filter "*.html" -Recurse | Where-Object { $_.FullName -notlike "*\V2\*" }

ForEach ($file in $filesToUpdate) {
    Write-Host "กำลังอัปเดตไฟล์: $($file.FullName)"
    $content = Get-Content -Path $file.FullName -Raw
    $content -replace $oldRegex, $newLink | Set-Content -Path $file.FullName -Force
}

Write-Host "---"
Write-Host "อัปเดต Favicon เสร็จสมบูรณ์แล้วในทุกไฟล์ HTML (ยกเว้นในโฟลเดอร์ V2)"