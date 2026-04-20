## ภาพรวม

Souldium เป็นแพลตฟอร์มเกมปาร์ตี้ที่ขับเคลื่อนโดย Server Logic ทั้งหมดรันบน Backend — Frontend ทำหน้าที่เป็นแค่ Rendering Layer ที่ตอบสนองต่อ WebSocket Broadcast จาก Server

## เกมที่รองรับ

- 🕵️ **Spyfall** — ผู้เล่นคนหนึ่งเป็นสายลับ คนอื่นรู้สถานที่ สายลับไม่รู้ แกพอจะกลมกลืนได้ไหม?
- 🤔 **Who Am I?** — เดาว่าตัวเองเป็นใคร จากคำถาม ใช่/ไม่ใช่ เท่านั้น
- 🐺 **Werewolf** — เกม Social Deduction คลาสสิค ชาวบ้าน vs. มนุษย์หมาป่า

## สถาปัตยกรรม

Frontend ไม่เคยเก็บ Game State ทุก Action (เข้าห้อง, เริ่มเกม, ตอบคำถาม) ส่งไปที่ Server ผ่าน WebSocket Server ตรวจสอบ, อัปเดต State แล้ว Broadcast State ใหม่ให้ Client ทุกคนที่เชื่อมต่ออยู่

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | FastAPI · Python · WebSocket |
| Frontend | Vue 3 · Pinia · Tailwind CSS |
| Deploy | Railway |
