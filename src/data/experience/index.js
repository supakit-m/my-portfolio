export const experienceData = [
  {
    id: 'vml-intern',
    role: { en: 'Web Developer Intern', th: 'นักศึกษาฝึกงาน Web Developer' },
    company: { en: 'Mirum / VML Thailand', th: 'Mirum / VML Thailand' },
    period: { en: 'Nov 2024 — Apr 2025', th: 'พ.ย. 2567 — เม.ย. 2568' },
    summary: {
      en: 'Interned as Web Developer at Mirum Department (VML Thailand). Assigned to build a Human Resource System (HRS) to improve internal employee database management — covering data storage, access control, and high-speed search.',
      th: 'ฝึกงานในตำแหน่ง Web Developer ที่ Mirum Department (VML Thailand) โดยได้รับมอบหมายให้ทำ ระบบบริหารจัดการทรัพยากรบุคคล (HRS) เพื่อเพิ่มประสิทธิภาพในการจัดการฐานข้อมูลพนักงานภายในองค์กร ครอบคลุมตั้งแต่การจัดเก็บข้อมูล การจัดการสิทธิ์ และระบบสืบค้นที่รวดเร็ว',
    },
    highlights: [
      {
        title: { en: 'Database Schema Design', th: 'Database Schema Design' },
        detail: {
          en: 'Designed SQL database schema supporting 500+ employees with accurate organization hierarchy/department relationship management.',
          th: 'วางโครงสร้างฐานข้อมูล SQL รองรับข้อมูลพนักงานกว่า 500 คน และจัดการความสัมพันธ์องค์กร (Hierarchy/Department) ได้อย่างแม่นยำ',
        },
      },
      {
        title: { en: 'Role-Based Access Control (RBAC)', th: 'Role-Based Access Control (RBAC)' },
        detail: {
          en: 'Developed a permission management system to control access and data modification based on user account levels.',
          th: 'พัฒนาระบบจัดการสิทธิ์ เพื่อควบคุมการเข้าถึงและแก้ไขข้อมูลตามระดับบัญชีผู้ใช้',
        },
      },
      {
        title: { en: 'High-Performance Search', th: 'High-Performance Search' },
        detail: {
          en: 'Built a Real-time / Auto-correct Search & Filter system for fast employee lookup.',
          th: 'สร้างระบบ Search & Filter แบบ Real-time / Auto-correct เพื่อให้ค้นหาข้อมูลพนักงานได้อย่างรวดเร็ว',
        },
      },
      {
        title: { en: 'Image Management', th: 'Image Management' },
        detail: {
          en: 'Built a feature to store and display employee photos in the database, replacing the legacy file-based document system.',
          th: 'พัฒนาฟีเจอร์จัดเก็บและแสดงผลรูปถ่ายพนักงานลงฐานข้อมูล เพื่อทดแทนระบบการจัดเก็บรูปภาพแบบเดิมที่เป็นไฟล์เอกสาร',
        },
      },
    ],
    tags: {
      category: ['Front-end', 'Back-end'],
      languages: ['JavaScript', 'TypeScript'],
      tech: ['NestJS', 'Vue.js', 'TypeORM', 'MySQL', 'RESTful API'],
    },
  },
]

export const educationData = [
  {
    id: 'rmut',
    degree: { en: "Bachelor's Degree", th: 'ปริญญาตรี' },
    major: { en: 'Computer Engineering', th: 'วิศวกรรมคอมพิวเตอร์' },
    university: {
      en: 'Rajamangala University of Technology Thanyaburi',
      th: 'มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี',
    },
    period: { en: 'Graduated 2025', th: 'สำเร็จการศึกษา 2568' },
    gpa: '3.45',
    description: {
      en: 'Focused on Software Architecture, Data Structures, and Computer Vision. Developed a research project on real-time human pose estimation using MediaPipe and OpenCV.',
      th: 'เน้นด้าน Software Architecture, Data Structures และ Computer Vision พัฒนาโปรเจกต์วิจัยด้านการประเมินท่าทางมนุษย์แบบ Real-time ด้วย MediaPipe และ OpenCV',
    },
    tags: {
      category: ['Computer Vision', 'Back-end'],
      languages: ['Python'],
      tech: ['FastAPI', 'RESTful API', 'MySQL', 'MediaPipe'],
    },
  },
]

export default { experienceData, educationData }
