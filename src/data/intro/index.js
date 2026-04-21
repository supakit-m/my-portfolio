// ─── Intro / Hero Section ─────────────────────────────────────────────────────
// Content for the landing hero: name, roles, quote, and CTA buttons.

export const introData = {
  /** Display name (static — not locale-specific) */
  name: 'Supakit Mai-ngam',

  /** Job titles shown below the name */
  roles: {
    en: ['Full-stack Developer', 'Back-end Developer'],
    th: ['Full-stack Developer', 'Back-end Developer'],
  },

  /** Resume PDF path */
  resumePath: '/path-to-your-resume.pdf',
}

// ─── i18n messages ────────────────────────────────────────────────────────────
export const introMessages = {
  en: {
    quote:        '"Solving complex problems with precision and building sustainable system architectures."',
    viewProjects: 'View Projects',
    resume:       'Resume',
  },
  th: {
    quote:        '"แก้ปัญหาที่ซับซ้อนด้วยความแม่นยำ และสร้างสถาปัตยกรรมระบบที่ยั่งยืน"',
    viewProjects: 'ดูโปรเจกต์',
    resume:       'เรซูเม่',
  },
}

export default introData
