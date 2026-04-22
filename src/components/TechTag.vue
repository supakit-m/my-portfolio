<!--
  TechTag.vue — Centralized tag component with brand colors for every tech/language.

  Props:
    label  : string  — tag text (e.g. "Vue.js", "Python")
    type   : string  — 'category' | 'language' | 'tech' (default: auto-detect)
    size   : string  — 'sm' | 'md' | 'lg' (default: 'sm')
-->
<template>
  <span
    class="tag-base"
    :class="[sizeClass, colorClass]"
  >{{ label }}</span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  label: { type: String, required: true },
  type:  { type: String, default: 'auto' },  // 'category' | 'language' | 'tech' | 'auto'
  size:  { type: String, default: 'sm' },    // 'sm' | 'md' | 'lg'
})

const sizeClass = computed(() => ({
  sm: 'tag-sm',
  md: 'tag-md',
  lg: 'tag-lg',
}[props.size] ?? 'tag-sm'))

// ── Color maps ─────────────────────────────────────────────────────────────
const categoryColors = {
  'Front-end':       'tag-cat-frontend',
  'Back-end':        'tag-cat-backend',
  'Computer Vision': 'tag-cat-cv',
  'Full-stack':      'tag-cat-fullstack',
}

const languageColors = {
  'JavaScript':  'tag-lang-js',
  'JS':          'tag-lang-js',
  'TypeScript':  'tag-lang-ts',
  'TS':          'tag-lang-ts',
  'Python':      'tag-lang-python',
  'PHP':         'tag-lang-php',
  'Vue':         'tag-lang-vue',
  'Vue.js':      'tag-lang-vue',
}

const techColors = {
  // Frontend
  'Tailwind CSS':   'tag-tech-tailwind',
  'Tailwind':       'tag-tech-tailwind',
  'Vite':           'tag-tech-vite',
  'Vue Router':     'tag-tech-vue-router',
  'Router':         'tag-tech-vue-router',
  'i18n':           'tag-tech-i18n',
  // Backend
  'NestJS':         'tag-tech-nestjs',
  'FastAPI':        'tag-tech-fastapi',
  'Node.js':        'tag-tech-nodejs',
  'Express':        'tag-tech-nodejs',
  'WebSocket':      'tag-tech-websocket',
  'RESTful API':    'tag-tech-rest',
  // Database
  'MySQL':          'tag-tech-mysql',
  'TypeORM':        'tag-tech-typeorm',
  'PostgreSQL':     'tag-tech-postgres',
  'MongoDB':        'tag-tech-mongo',
  // AI / ML
  'TensorFlow.js':  'tag-tech-tf',
  'COCO-SSD':       'tag-tech-cocosd',
  'MediaPipe':      'tag-tech-mediapipe',
  // Infra
  'Railway':        'tag-tech-railway',
  'Pinia':          'tag-tech-pinia',
  'Postman':        'tag-tech-postman',
  'Git':            'tag-tech-git',
  'Fork':           'tag-tech-git',
  'Docker':         'tag-tech-docker',
  // Generic fallback
}

const colorClass = computed(() => {
  const l = props.label
  if (props.type === 'category' || categoryColors[l]) return categoryColors[l] ?? 'tag-fallback'
  if (props.type === 'language' || languageColors[l]) return languageColors[l] ?? 'tag-fallback'
  if (props.type === 'tech'     || techColors[l])     return techColors[l]     ?? 'tag-fallback'
  // auto-detect order: category → language → tech → fallback
  return categoryColors[l] ?? languageColors[l] ?? techColors[l] ?? 'tag-fallback'
})
</script>

<style>
/* ── Base ── */
.tag-base {
  display: inline-flex;
  align-items: center;
  border-radius: 0.25rem;
  font-family: var(--font-label, 'Space Grotesk', sans-serif);
  font-weight: 600;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

/* ── Sizes ── */
.tag-sm { font-size: 0.65rem; padding: 0.15rem 0.5rem; }
.tag-md { font-size: 0.75rem; padding: 0.25rem 0.65rem; }
.tag-lg { font-size: 0.85rem; padding: 0.35rem 0.85rem; }

/* ── Category ── */
.tag-cat-frontend  { background: oklch(35% 0.12 200 / 0.25); color: oklch(80% 0.14 200); border: 1px solid oklch(60% 0.14 200 / 0.35); }
.tag-cat-backend   { background: oklch(30% 0.10 275 / 0.25); color: oklch(75% 0.10 275); border: 1px solid oklch(60% 0.10 275 / 0.35); }
.tag-cat-cv        { background: oklch(35% 0.14 60  / 0.25); color: oklch(80% 0.14 60);  border: 1px solid oklch(65% 0.14 60  / 0.35); }
.tag-cat-fullstack { background: oklch(35% 0.10 160 / 0.25); color: oklch(78% 0.10 160); border: 1px solid oklch(60% 0.10 160 / 0.35); }

/* ── Languages ── */
.tag-lang-js     { background: oklch(42% 0.14 95  / 0.2); color: oklch(88% 0.14 95);  border: 1px solid oklch(72% 0.14 95  / 0.4); }
.tag-lang-ts     { background: oklch(38% 0.10 250 / 0.2); color: oklch(78% 0.10 250); border: 1px solid oklch(60% 0.10 250 / 0.4); }
.tag-lang-python { background: oklch(38% 0.10 240 / 0.2); color: oklch(76% 0.10 240); border: 1px solid oklch(60% 0.10 240 / 0.4); }
.tag-lang-php    { background: oklch(35% 0.10 295 / 0.2); color: oklch(76% 0.10 295); border: 1px solid oklch(60% 0.10 295 / 0.4); }
.tag-lang-vue    { background: oklch(36% 0.12 155 / 0.2); color: oklch(78% 0.12 155); border: 1px solid oklch(60% 0.12 155 / 0.4); }

/* ── Tech / Tools ── */
.tag-tech-tailwind    { background: oklch(38% 0.13 210 / 0.2); color: oklch(80% 0.13 210); border: 1px solid oklch(62% 0.13 210 / 0.35); }
.tag-tech-vite        { background: oklch(36% 0.14 300 / 0.2); color: oklch(78% 0.14 300); border: 1px solid oklch(62% 0.14 300 / 0.35); }
.tag-tech-vue-router  { background: oklch(36% 0.12 145 / 0.2); color: oklch(76% 0.12 145); border: 1px solid oklch(60% 0.12 145 / 0.35); }
.tag-tech-i18n        { background: oklch(36% 0.12 145 / 0.15); color: oklch(74% 0.12 145); border: 1px solid oklch(58% 0.12 145 / 0.3); }
.tag-tech-nestjs      { background: oklch(35% 0.16 20  / 0.2); color: oklch(78% 0.14 15);  border: 1px solid oklch(62% 0.14 15  / 0.35); }
.tag-tech-fastapi     { background: oklch(36% 0.12 170 / 0.2); color: oklch(78% 0.12 170); border: 1px solid oklch(62% 0.12 170 / 0.35); }
.tag-tech-nodejs      { background: oklch(38% 0.13 140 / 0.2); color: oklch(78% 0.12 140); border: 1px solid oklch(62% 0.12 140 / 0.35); }
.tag-tech-websocket   { background: oklch(35% 0.10 285 / 0.2); color: oklch(76% 0.10 285); border: 1px solid oklch(60% 0.10 285 / 0.35); }
.tag-tech-rest        { background: oklch(40% 0.08 220 / 0.2); color: oklch(76% 0.08 220); border: 1px solid oklch(60% 0.08 220 / 0.3); }
.tag-tech-mysql       { background: oklch(38% 0.10 230 / 0.2); color: oklch(76% 0.10 230); border: 1px solid oklch(60% 0.10 230 / 0.35); }
.tag-tech-typeorm     { background: oklch(36% 0.08 250 / 0.2); color: oklch(74% 0.08 250); border: 1px solid oklch(58% 0.08 250 / 0.3); }
.tag-tech-postgres    { background: oklch(36% 0.10 240 / 0.2); color: oklch(74% 0.10 240); border: 1px solid oklch(58% 0.10 240 / 0.3); }
.tag-tech-mongo       { background: oklch(38% 0.13 140 / 0.2); color: oklch(76% 0.12 140); border: 1px solid oklch(60% 0.12 140 / 0.3); }
.tag-tech-tf          { background: oklch(38% 0.14 50  / 0.2); color: oklch(80% 0.14 50);  border: 1px solid oklch(65% 0.14 50  / 0.35); }
.tag-tech-cocosd      { background: oklch(36% 0.12 45  / 0.2); color: oklch(78% 0.12 45);  border: 1px solid oklch(62% 0.12 45  / 0.3); }
.tag-tech-mediapipe   { background: oklch(38% 0.12 220 / 0.2); color: oklch(78% 0.12 220); border: 1px solid oklch(62% 0.12 220 / 0.35); }
.tag-tech-railway     { background: oklch(34% 0.10 295 / 0.2); color: oklch(74% 0.10 295); border: 1px solid oklch(58% 0.10 295 / 0.3); }
.tag-tech-pinia       { background: oklch(40% 0.14 90  / 0.2); color: oklch(80% 0.14 90);  border: 1px solid oklch(65% 0.14 90  / 0.35); }
.tag-tech-postman     { background: oklch(38% 0.14 40  / 0.2); color: oklch(80% 0.14 40);  border: 1px solid oklch(65% 0.14 40  / 0.35); }
.tag-tech-git         { background: oklch(36% 0.12 30  / 0.2); color: oklch(78% 0.12 30);  border: 1px solid oklch(62% 0.12 30  / 0.35); }
.tag-tech-docker    { background: oklch(38% 0.13 210 / 0.2); color: oklch(80% 0.13 210); border: 1px solid oklch(62% 0.13 210 / 0.35); }

/* ── Fallback ── */
.tag-fallback { background: oklch(25% 0.03 265 / 0.4); color: oklch(72% 0.04 265); border: 1px solid oklch(45% 0.04 265 / 0.3); }
</style>
