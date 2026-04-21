// ─── i18n Aggregator ──────────────────────────────────────────────────────────
// This file ONLY assembles vue-i18n messages from src/data/ sub-modules.
// ▶ To edit any text content, go to the matching file inside src/data/.

import { createI18n } from 'vue-i18n'

import { navMessages }      from '../data/nav/index.js'
import { sectionsMessages } from '../data/sections/index.js'
import { introMessages }    from '../data/intro/index.js'
import { personalMessages } from '../data/personal/index.js'
import { skillsMessages }   from '../data/skills/index.js'
import { projectMessages }  from '../data/projects/index.js'
import { contactMessages }  from '../data/contact/index.js'

const messages = {
  en: {
    nav:      navMessages.en,
    sections: sectionsMessages.en,
    intro:    introMessages.en,
    personal: personalMessages.en,
    skills:   skillsMessages.en,
    project:  projectMessages.en,
    contact:  contactMessages.en,
  },
  th: {
    nav:      navMessages.th,
    sections: sectionsMessages.th,
    intro:    introMessages.th,
    personal: personalMessages.th,
    skills:   skillsMessages.th,
    project:  projectMessages.th,
    contact:  contactMessages.th,
  },
}

const i18n = createI18n({
  legacy:         false,
  locale:         'en',
  fallbackLocale: 'en',
  messages,
})

export default i18n
