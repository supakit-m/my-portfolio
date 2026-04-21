# Supakit Mai-ngam — Portfolio v2

> Personal developer portfolio built with Vue 3 + Tailwind CSS v4

**🔗 Links**
| | |
|---|---|
| 🌐 Live Site | [supakit-m.github.io/my-portfolio](https://supakit-m.github.io/my-portfolio/) |
| 💻 Source Code | [github.com/supakit-m/my-portfolio](https://github.com/supakit-m/my-portfolio) |
| 📧 Contact | supakit.m.work@gmail.com |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vue 3 · Tailwind CSS v4 |
| Routing | Vue Router 4 |
| i18n | vue-i18n v10 (EN / TH) |
| Markdown | marked v14 |
| Build | Vite 7 |
| Deploy | GitHub Pages |

---

## Project Structure

```
my-portfolio/
├── public/
│   ├── images/projects/[id]/    ← Project cover images (replace with real screenshots)
│   └── data/projects/[id]/      ← README markdown files (en / th)
└── src/
    ├── components/
    │   ├── TechTag.vue           ← Centralized tag component (all colors here)
    │   ├── ProjectCard.vue       ← Project grid card
    │   ├── ProjectModal.vue      ← Project detail modal
    │   ├── Navbar.vue            ← Nav + EN/TH language switcher
    │   ├── Footer.vue
    │   ├── MatrixRain.vue
    │   └── sections/
    │       ├── Intro.vue
    │       ├── Personal.vue
    │       ├── Exp-Edu.vue
    │       ├── Skill.vue
    │       ├── Project.vue
    │       └── Contact.vue
    ├── data/                     ← All content data (edit here only)
    │   ├── personal/index.js     ← Personal info, story, highlights
    │   ├── experience/index.js   ← Work experience + education
    │   ├── skills/index.js       ← Skills lists
    │   └── projects.json         ← Projects (i18n, tags, images, readmes)
    ├── i18n/index.js             ← EN/TH translations
    ├── style.css                 ← Global CSS + all color variables (@theme)
    └── main.js
```

---

## Quick Start

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build   # outputs to /dist
npm run preview # preview production build locally
```

---

## Customization Guide

### ✏️ Edit Content
All content lives in `src/data/` — edit once, renders everywhere:

| File | What it controls |
|---|---|
| `src/data/personal/index.js` | Name, bio, story, skills |
| `src/data/experience/index.js` | Work experience + education |
| `src/data/skills/index.js` | Skills lists per category |
| `src/data/projects.json` | Projects (all fields, i18n) |

### 🎨 Colors
All colors are in `src/style.css` inside `@theme {}`. Change once → applies everywhere:
```css
--color-brand: #81ecff;      /* cyan accent */
--color-brand-alt: #ff3399;  /* pink glow */
--color-bg-primary: #060e20; /* dark background */
```

### 🏷️ Tag Colors
All tag brand colors are centralized in `src/components/TechTag.vue`.  
To add a new tech: add an entry to `techColors` inside that file.

### 🌐 Language (i18n)
UI strings: `src/i18n/index.js`  
Content strings: inside each `src/data/**` file using `{ en: '...', th: '...' }` objects

### 🖼️ Project Images
Replace placeholder SVGs in `public/images/projects/[id]/cover.svg` with real screenshots.  
Recommended: `.webp` format, 1200×800px min.

### 📄 Project README
Edit markdown files in `public/data/projects/[id]/readme_en.md` and `readme_th.md`.  
These render inside the Project Modal.

---

## i18n — Adding a New Language

1. Add messages to `src/i18n/index.js`
2. Add `{ en: '...', newlang: '...' }` pairs in all `src/data/**` files
3. Add toggle button in `Navbar.vue`
