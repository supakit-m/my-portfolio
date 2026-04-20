<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        class="fixed inset-0 z-[200] flex items-end md:items-center justify-center"
        @click.self="$emit('close')"
      >
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="$emit('close')"></div>

        <!-- Modal Panel -->
        <div
          class="modal-panel relative w-full md:max-w-3xl lg:max-w-4xl max-h-[92vh] md:max-h-[88vh] rounded-t-2xl md:rounded-2xl bg-surface-container overflow-hidden flex flex-col z-10"
        >
          <!-- Hero Slider -->
          <div class="relative w-full h-52 md:h-72 bg-surface-container-lowest flex-shrink-0 overflow-hidden">
            <!-- Slides -->
            <div
              v-for="(img, i) in project.sliderImages"
              :key="i"
              class="absolute inset-0 transition-opacity duration-500"
              :class="i === activeSlide ? 'opacity-100' : 'opacity-0'"
            >
              <img
                :src="img"
                :alt="`${localTitle} screenshot ${i + 1}`"
                loading="lazy"
                class="w-full h-full object-cover"
                @error="sliderImgErrors[i] = true"
              />
              <!-- Fallback -->
              <div
                v-if="sliderImgErrors[i]"
                class="absolute inset-0 flex items-center justify-center bg-surface-container-lowest"
              >
                <span class="material-symbols-outlined text-primary/20 text-9xl">{{ project.icon || 'code' }}</span>
              </div>
            </div>
            <!-- Gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent pointer-events-none"></div>

            <!-- Slider dots -->
            <div v-if="project.sliderImages.length > 1" class="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
              <button
                v-for="(_, i) in project.sliderImages"
                :key="i"
                @click="activeSlide = i"
                class="w-2 h-2 rounded-full transition-all"
                :class="i === activeSlide ? 'bg-primary w-5' : 'bg-white/30'"
              ></button>
            </div>

            <!-- Close button -->
            <button
              @click="$emit('close')"
              class="absolute top-3 right-3 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all z-20"
            >
              <span class="material-symbols-outlined text-xl">close</span>
            </button>
          </div>

          <!-- Scrollable Content -->
          <div class="flex-1 overflow-y-auto overscroll-contain p-6 md:p-8 space-y-6">
            <!-- Title + Motto + Links row -->
            <div class="flex items-start justify-between gap-4">
              <div>
                <h2 class="font-headline text-2xl md:text-3xl font-bold text-on-surface mb-1">{{ localTitle }}</h2>
                <p class="font-label text-sm text-primary/80">{{ localMotto }}</p>
              </div>
              <!-- GitHub + Demo -->
              <div class="flex gap-2 shrink-0" @click.stop>
                <a
                  :href="project.links.github"
                  target="_blank"
                  rel="noopener"
                  class="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-surface-container-highest border border-outline-variant/30 hover:border-primary/50 hover:text-primary font-label text-xs uppercase tracking-wide transition-all"
                >
                  <span class="material-symbols-outlined text-sm">code</span>
                  <span class="hidden sm:inline">GitHub</span>
                </a>
                <a
                  :href="project.links.demo"
                  target="_blank"
                  rel="noopener"
                  class="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 text-primary font-label text-xs uppercase tracking-wide transition-all"
                >
                  <span class="material-symbols-outlined text-sm">open_in_new</span>
                  Demo
                </a>
              </div>
            </div>

            <!-- Short description -->
            <p class="text-on-surface-variant font-body text-sm md:text-base leading-relaxed">
              {{ localDescription }}
            </p>

            <!-- Tags breakdown -->
            <div class="space-y-3">
              <div v-for="(group, key) in tagGroups" :key="key" class="flex items-start gap-3">
                <span class="font-label text-[10px] text-on-surface-variant uppercase tracking-widest w-20 shrink-0 pt-0.5">{{ $t(`project.tags.${key}`) }}</span>
                <div class="flex flex-wrap gap-1.5">
                  <span
                    v-for="tag in group"
                    :key="tag"
                    class="px-2 py-0.5 rounded font-label text-[10px] uppercase tracking-wide"
                    :class="getTagColor(key, tag)"
                  >{{ tag }}</span>
                </div>
              </div>
            </div>

            <!-- Divider -->
            <div class="border-t border-outline-variant/20"></div>

            <!-- README markdown body -->
            <div
              v-if="readmeHtml"
              class="prose-custom"
              v-html="readmeHtml"
            ></div>
            <div v-else-if="readmeLoading" class="flex items-center gap-3 text-on-surface-variant text-sm py-4">
              <div class="w-4 h-4 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
              Loading documentation...
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { marked } from 'marked'

const props = defineProps({ project: Object })
const emit = defineEmits(['close'])
const { locale } = useI18n()

const activeSlide    = ref(0)
const readmeHtml     = ref('')
const readmeLoading  = ref(false)
const sliderImgErrors = ref({})

const localTitle       = computed(() => props.project.title[locale.value]       || props.project.title.en)
const localMotto       = computed(() => props.project.motto[locale.value]       || props.project.motto.en)
const localDescription = computed(() => props.project.description[locale.value] || props.project.description.en)

const tagGroups = computed(() => ({
  category:  props.project.tags.category,
  languages: props.project.tags.languages,
  tech:      props.project.tags.tech,
}))

// ---- Tag colors (shared logic — ideally extract to composable) ----
const langColorMap = {
  'JavaScript': 'bg-yellow-400/15 text-yellow-300 border border-yellow-400/30',
  'Vue':        'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30',
  'Python':     'bg-blue-400/15 text-blue-300 border border-blue-400/30',
  'TypeScript': 'bg-blue-500/15 text-blue-300 border border-blue-500/30',
  'PHP':        'bg-purple-500/15 text-purple-300 border border-purple-500/30',
}
const techColorMap = {
  'Tailwind':      'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30',
  'TensorFlow.js': 'bg-orange-500/15 text-orange-300 border border-orange-500/30',
  'COCO-SSD':      'bg-orange-400/15 text-orange-200 border border-orange-400/30',
  'FastAPI':       'bg-teal-500/15 text-teal-300 border border-teal-500/30',
  'WebSocket':     'bg-violet-500/15 text-violet-300 border border-violet-500/30',
  'Pinia':         'bg-yellow-500/15 text-yellow-300 border border-yellow-500/30',
  'Railway':       'bg-purple-600/15 text-purple-300 border border-purple-600/30',
  'Vite':          'bg-purple-400/15 text-purple-300 border border-purple-400/30',
  'Vue Router':    'bg-emerald-600/15 text-emerald-300 border border-emerald-600/30',
  'vue-i18n':      'bg-emerald-400/15 text-emerald-200 border border-emerald-400/30',
  'MediaPipe':     'bg-sky-500/15 text-sky-300 border border-sky-500/30',
}
const categoryColorMap = {
  'Front-end':       'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30',
  'Back-end':        'bg-indigo-500/15 text-indigo-300 border border-indigo-500/30',
  'Computer Vision': 'bg-amber-500/15 text-amber-300 border border-amber-500/30',
}
const fallback = 'bg-surface-container-highest text-on-surface-variant border border-outline-variant/30'

const getTagColor = (group, tag) => {
  if (group === 'category')  return categoryColorMap[tag] || fallback
  if (group === 'languages') return langColorMap[tag]     || fallback
  if (group === 'tech')      return techColorMap[tag]     || fallback
  return fallback
}

// ---- Load README ----
const loadReadme = async () => {
  const path = props.project.readmePath?.[locale.value] || props.project.readmePath?.en
  if (!path) return
  readmeLoading.value = true
  readmeHtml.value = ''
  try {
    const res = await fetch(path)
    if (!res.ok) throw new Error('not found')
    const md = await res.text()
    readmeHtml.value = marked.parse(md)
  } catch {
    readmeHtml.value = ''
  } finally {
    readmeLoading.value = false
  }
}

watch(locale, loadReadme)
watch(() => props.project, () => { activeSlide.value = 0; loadReadme() }, { immediate: true })

// ---- Auto-slide ----
let slideInterval = null
onMounted(() => {
  if (props.project.sliderImages?.length > 1) {
    slideInterval = setInterval(() => {
      activeSlide.value = (activeSlide.value + 1) % props.project.sliderImages.length
    }, 3500)
  }
  // Lock body scroll
  document.body.style.overflow = 'hidden'
})
onUnmounted(() => {
  clearInterval(slideInterval)
  document.body.style.overflow = ''
})

// ---- Keyboard close ----
const onKey = (e) => { if (e.key === 'Escape') emit('close') }
window.addEventListener('keydown', onKey)
onUnmounted(() => window.removeEventListener('keydown', onKey))

// ---- Touch swipe for slider ----
let touchStartX = 0
const onTouchStart = (e) => { touchStartX = e.touches[0].clientX }
const onTouchEnd   = (e) => {
  const diff = touchStartX - e.changedTouches[0].clientX
  if (Math.abs(diff) < 40 || !props.project.sliderImages?.length) return
  const len = props.project.sliderImages.length
  activeSlide.value = diff > 0
    ? (activeSlide.value + 1) % len
    : (activeSlide.value - 1 + len) % len
}
onMounted(() => {
  const el = document.querySelector('.modal-panel')
  el?.addEventListener('touchstart', onTouchStart, { passive: true })
  el?.addEventListener('touchend',   onTouchEnd,   { passive: true })
})
</script>

<style scoped>
.modal-fade-enter-active, .modal-fade-leave-active { transition: opacity 0.25s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; }
.modal-fade-enter-active .modal-panel { animation: slideUp 0.3s ease; }
.modal-fade-leave-active .modal-panel { animation: slideUp 0.2s ease reverse; }

@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}

/* Markdown prose styles */
.prose-custom :deep(h2) {
  font-family: var(--font-headline);
  font-size: 1.1rem;
  font-weight: 700;
  color: #81ecff;
  margin: 1.5rem 0 0.75rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid rgba(129, 236, 255, 0.15);
}
.prose-custom :deep(h3) {
  font-family: var(--font-headline);
  font-size: 0.95rem;
  font-weight: 600;
  color: #dee5ff;
  margin: 1.2rem 0 0.5rem;
}
.prose-custom :deep(p) {
  font-size: 0.875rem;
  line-height: 1.75;
  color: #a3aac4;
  margin-bottom: 0.75rem;
}
.prose-custom :deep(ul), .prose-custom :deep(ol) {
  padding-left: 1.25rem;
  margin-bottom: 0.75rem;
}
.prose-custom :deep(li) {
  font-size: 0.875rem;
  line-height: 1.75;
  color: #a3aac4;
  margin-bottom: 0.2rem;
}
.prose-custom :deep(code) {
  background: #192540;
  color: #81ecff;
  padding: 0.1rem 0.4rem;
  border-radius: 0.2rem;
  font-size: 0.8rem;
  font-family: 'Chakra Petch', monospace;
}
.prose-custom :deep(pre) {
  background: #091328;
  border: 1px solid #3c475a;
  border-radius: 0.5rem;
  padding: 1rem;
  overflow-x: auto;
  margin: 1rem 0;
}
.prose-custom :deep(pre code) {
  background: none;
  padding: 0;
  color: #a3aac4;
}
.prose-custom :deep(table) {
  width: 100%;
  border-collapse: collapse;
  margin: 1rem 0;
  font-size: 0.8rem;
}
.prose-custom :deep(th) {
  text-align: left;
  padding: 0.5rem 0.75rem;
  background: #192540;
  color: #81ecff;
  font-family: var(--font-label);
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border: 1px solid #3c475a;
}
.prose-custom :deep(td) {
  padding: 0.5rem 0.75rem;
  border: 1px solid #3c475a;
  color: #a3aac4;
}
.prose-custom :deep(strong) { color: #dee5ff; font-weight: 600; }
.prose-custom :deep(img) {
  width: 100%;
  border-radius: 0.5rem;
  margin: 1rem 0;
  loading: lazy;
}
.prose-custom :deep(a) { color: #81ecff; text-decoration: underline; }
.prose-custom :deep(blockquote) {
  border-left: 3px solid #81ecff;
  padding-left: 1rem;
  color: #a3aac4;
  font-style: italic;
  margin: 1rem 0;
}
</style>
