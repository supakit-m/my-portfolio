// ─── Skills ───────────────────────────────────────────────────────────────────
// All skill items grouped by category, plus bilingual category labels.

export const skillsData = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'PHP'],
  frontend:  ['Vue.js', 'Vite', 'Tailwind CSS', 'i18n'],
  backend:   ['Node.js', 'NestJS', 'FastAPI', 'RESTful API', 'WebSocket'],
  database:  ['MySQL', 'PostgreSQL', 'TypeORM'],
  tools:     ['Git', 'Fork', 'Docker', 'Postman', 'MediaPipe', 'TensorFlow.js'],
}

// ─── i18n messages ────────────────────────────────────────────────────────────
export const skillsMessages = {
  en: {
    languages: 'Languages',
    frontend:  'Frontend',
    backend:   'Backend',
    database:  'Database',
    tools:     'Tools',
  },
  th: {
    languages: 'ภาษา',
    frontend:  'Frontend',
    backend:   'Backend',
    database:  'ฐานข้อมูล',
    tools:     'เครื่องมือ',
  },
}

export default skillsData
