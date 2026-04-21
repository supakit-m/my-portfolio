import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      intro: 'Intro', personal: 'Personal', expSkill: 'Experience & Skills',
      projects: 'Projects', contact: 'Contact', resume: 'Resume',
    },
    sections: {
      personal: 'Personal', experience: 'Experience', education: 'Education',
      skills: 'My Skills', projects: 'Projects', contact: 'Contact',
    },
    skills: {
      languages: 'Languages', frontend: 'Frontend', backend: 'Backend',
      database: 'Database', tools: 'Tools',
    },
    personal: {
      label: { name: 'Name', nickname: 'Nickname', gender: 'Gender', age: 'Age', location: 'Location', yearsOld: 'years old' },
      gender: 'Male · Military service completed',
      story2: 'As a Full-stack Developer, I believe "a solid foundation reduces future obstacles." I prioritize laying the right groundwork in Design Patterns, API architecture, and Database design.',
      story3: 'I learn fast and adapt easily — always ready to pick up new skills.',
      availability: 'Availability',
      openFor: 'Open for Opportunities',
      openForDetail: 'Full-time, or Freelance — feel free to reach out.',
      contactBtn: 'Get in Touch',
    },
    project: {
      github: 'GitHub', demo: 'Live Demo', viewDetail: 'View Details', back: 'Back',
      tags: { category: 'Category', languages: 'Languages', tech: 'Technology' },
    },
    contact: {
      availability: 'Availability', availableFor: 'Open for opportunities',
      primaryComm: 'Primary Communication', voiceLine: 'Phone',
      sourceControl: 'Source Control', copy: 'Copy',
    },
    intro: {
      quote: '"Solving complex problems with precision and building sustainable system architectures."',
      viewProjects: 'View Projects', resume: 'Resume',
    },
  },
  th: {
    nav: {
      intro: 'แนะนำตัว', personal: 'ส่วนตัว', expSkill: 'ประสบการณ์ & ทักษะ',
      projects: 'โปรเจกต์', contact: 'ติดต่อ', resume: 'เรซูเม่',
    },
    sections: {
      personal: 'ส่วนตัว', experience: 'ประสบการณ์', education: 'การศึกษา',
      skills: 'ทักษะของฉัน', projects: 'โปรเจกต์', contact: 'ติดต่อ',
    },
    skills: {
      languages: 'ภาษา', frontend: 'Frontend', backend: 'Backend',
      database: 'ฐานข้อมูล', tools: 'เครื่องมือ',
    },
    personal: {
      label: { name: 'ชื่อ', nickname: 'ชื่อเล่น', gender: 'เพศ', age: 'อายุ', location: 'ที่อยู่', yearsOld: 'ปี' },
      gender: 'ชาย · ผ่านการเกณฑ์ทหารแล้ว',
      story2: 'ในฐานะ Full-stack Developer ผมเชื่อว่า "โครงสร้างที่ดีย่อมลดอุปสรรคในอนาคต" ผมจึงให้ความสำคัญกับการวางรากฐาน Design Patterns, API และ Database',
      story3: 'ผมเรียนรู้เร็วและปรับตัวได้ พร้อมพัฒนาทักษะใหม่ๆ อยู่เสมอ',
      availability: 'สถานะ',
      openFor: 'พร้อมรับโอกาสใหม่',
      openForDetail: 'งานประจำ หรือ Freelance — ติดต่อมาได้เลย',
      contactBtn: 'ติดต่อ',
    },
    project: {
      github: 'GitHub', demo: 'ดูตัวอย่าง', viewDetail: 'ดูรายละเอียด', back: 'กลับ',
      tags: { category: 'ประเภท', languages: 'ภาษา', tech: 'เทคโนโลยี' },
    },
    contact: {
      availability: 'สถานะ', availableFor: 'พร้อมรับโอกาสใหม่',
      primaryComm: 'ช่องทางหลัก', voiceLine: 'เบอร์โทรศัพท์',
      sourceControl: 'Source Control', copy: 'คัดลอก',
    },
    intro: {
      quote: '"แก้ปัญหาที่ซับซ้อนด้วยความแม่นยำ และสร้างสถาปัตยกรรมระบบที่ยั่งยืน"',
      viewProjects: 'ดูโปรเจกต์', resume: 'เรซูเม่',
    },
  },
}

const i18n = createI18n({ legacy: false, locale: 'en', fallbackLocale: 'en', messages })
export default i18n
