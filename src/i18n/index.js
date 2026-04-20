import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      intro: 'Intro',
      personal: 'Personal',
      expSkill: 'Experience & Skills',
      projects: 'Projects',
      contact: 'Contact',
      resume: 'Resume',
    },
    sections: {
      personal: 'Personal',
      experience: 'Experience',
      education: 'Education',
      skills: 'My Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    project: {
      github: 'GitHub',
      demo: 'Live Demo',
      viewDetail: 'View Details',
      back: 'Back',
      tags: {
        category: 'Category',
        languages: 'Languages',
        tech: 'Technology',
      },
    },
    contact: {
      availability: 'Availability',
      availableFor: 'Open for opportunities',
      primaryComm: 'Primary Communication',
      voiceLine: 'Secure Voice Line',
      sourceControl: 'Source Control',
      copy: 'Copy',
    },
    intro: {
      roles: ['Full-stack Developer', 'Back-end Developer'],
      quote: '"Solving complex problems with precision and building sustainable system architectures."',
      viewProjects: 'View Projects',
      resume: 'Resume',
    },
  },
  th: {
    nav: {
      intro: 'แนะนำตัว',
      personal: 'ส่วนตัว',
      expSkill: 'ประสบการณ์ & ทักษะ',
      projects: 'โปรเจกต์',
      contact: 'ติดต่อ',
      resume: 'เรซูเม่',
    },
    sections: {
      personal: 'ส่วนตัว',
      experience: 'ประสบการณ์',
      education: 'การศึกษา',
      skills: 'ทักษะของฉัน',
      projects: 'โปรเจกต์',
      contact: 'ติดต่อ',
    },
    project: {
      github: 'GitHub',
      demo: 'ดูตัวอย่าง',
      viewDetail: 'ดูรายละเอียด',
      back: 'กลับ',
      tags: {
        category: 'ประเภท',
        languages: 'ภาษา',
        tech: 'เทคโนโลยี',
      },
    },
    contact: {
      availability: 'สถานะ',
      availableFor: 'พร้อมรับโอกาสใหม่',
      primaryComm: 'ช่องทางหลัก',
      voiceLine: 'เบอร์โทรศัพท์',
      sourceControl: 'Source Control',
      copy: 'คัดลอก',
    },
    intro: {
      roles: ['Full-stack Developer', 'Back-end Developer'],
      quote: '"แก้ปัญหาที่ซับซ้อนด้วยความแม่นยำ และสร้างสถาปัตยกรรมระบบที่ยั่งยืน"',
      viewProjects: 'ดูโปรเจกต์',
      resume: 'เรซูเม่',
    },
  },
}

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n
