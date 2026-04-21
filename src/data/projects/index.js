// ─── Projects ─────────────────────────────────────────────────────────────────
// Re-exports the projects list and provides bilingual UI labels for
// the Projects section and Project modal.
//
// ▶ To add or edit projects, edit projects.json in this same folder.

import projectsList from './projects.json'

export { projectsList }
export default projectsList

// ─── i18n messages ────────────────────────────────────────────────────────────
export const projectMessages = {
  en: {
    github:     'GitHub',
    demo:       'Live Demo',
    viewDetail: 'View Details',
    back:       'Back',
    tags: {
      category:  'Category',
      languages: 'Languages',
      tech:      'Technology',
    },
  },
  th: {
    github:     'GitHub',
    demo:       'ดูตัวอย่าง',
    viewDetail: 'ดูรายละเอียด',
    back:       'กลับ',
    tags: {
      category:  'ประเภท',
      languages: 'ภาษา',
      tech:      'เทคโนโลยี',
    },
  },
}
