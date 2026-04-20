## ภาพรวม

**EntryFlow** รันทั้งหมดใน Browser — ไม่มี Server ไม่มี Cloud ใช้ TensorFlow.js กับ Model COCO-SSD ตรวจจับคนจาก Live Video แล้ว Track แต่ละคนด้วย Algorithm Centroid/IOU แบบ Custom และนับเมื่อข้ามเส้นเสมือนที่กำหนดได้เอง

## การทำงาน

1. **Detection** — COCO-SSD ตรวจจับ Bounding Box ของ `"person"` ในแต่ละ Frame ที่ ~15-30 FPS
2. **Tracking** — Custom Centroid Tracker กำหนด ID ถาวรให้แต่ละคนข้าม Frame โดยใช้ IoU Overlap
3. **Counting** — เมื่อ Centroid ของคนที่ Track อยู่ข้ามเส้นเสมือน ระบบบันทึกทิศทาง (IN/OUT) และอัปเดต Counter
4. **Logging** — บันทึก Event เข้า/ออกแต่ละครั้งพร้อม Timestamp ใน Side Panel

## ฟีเจอร์หลัก

- 🔒 **Client-side 100%** — ข้อมูล Video ไม่เคยออกจาก Browser
- 🎯 **ปรับ Detection Threshold ได้** — ปรับตามสภาพแวดล้อม
- ↕️ **นับ 2 ทิศทาง** — Counter IN / OUT แยกกัน
- 📋 **Event Log** — ประวัติการเข้า/ออกพร้อม Timestamp
- 📷 **Export Snapshot** — บันทึก Frame เป็น PNG

## Tech Stack

| Layer | Technology |
|---|---|
| ML Model | TensorFlow.js · COCO-SSD |
| Tracking | Custom Centroid / IOU |
| Frontend | Vue 3 · Tailwind CSS · Vite |
| Deploy | GitHub Pages |
