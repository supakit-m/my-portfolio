<template>
  <div
    class="project-card group relative rounded-xl bg-surface-container-high overflow-hidden cursor-pointer transition-all duration-300 hover:bg-surface-bright flex flex-col"
    :class="{ 'ring-2 ring-primary/60': isHoverLoading }"
    @click="handleClick"
    @mouseenter="startHoverTimer"
    @mouseleave="cancelHoverTimer"
  >
    <!-- Hover progress border (desktop only) -->
    <div
      v-if="isHoverLoading"
      class="absolute inset-0 rounded-xl pointer-events-none z-10 overflow-hidden"
    >
      <div class="hover-progress-line" :style="{ animationDuration: '3s' }"></div>
    </div>

    <!-- Cover Image -->
    <div class="relative w-full h-44 overflow-hidden bg-surface-container-lowest flex-shrink-0">
      <img
        v-if="project.coverImage"
        :src="project.coverImage"
        :alt="localTitle"
        loading="lazy"
        class="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
        @error="imgError = true"
      />
      <!-- Fallback icon when no image or error -->
      <div
        v-if="!project.coverImage || imgError"
        class="absolute inset-0 flex items-center justify-center"
      >
        <span class="material-symbols-outlined text-primary/20 text-8xl select-none">{{ project.icon || 'code' }}</span>
      </div>
      <!-- Gradient overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent"></div>
      <!-- Featured badge -->
      <div v-if="project.featured" class="absolute top-3 left-3">
        <span class="px-2 py-0.5 bg-primary/20 border border-primary/40 rounded-full font-label text-[9px] text-primary uppercase tracking-widest">
          Featured
        </span>
      </div>
    </div>

    <!-- Card Body -->
    <div class="p-6 flex flex-col flex-1">
      <!-- Title + motto -->
      <div class="mb-3">
        <h3 class="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors leading-tight mb-1 line-clamp-1">
          {{ localTitle }}
        </h3>
        <p class="font-label text-xs text-primary/70 tracking-wide line-clamp-1">{{ localMotto }}</p>
      </div>

      <!-- Excerpt -->
      <p class="text-on-surface-variant font-body text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
        {{ localExcerpt }}
      </p>

      <!-- Tags -->
      <div class="space-y-2 mb-5">
        <!-- Category -->
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="cat in project.tags.category"
            :key="cat"
            class="tag-category px-2 py-0.5 rounded font-label text-[10px] font-bold uppercase tracking-wide"
          >{{ cat }}</span>
        </div>
        <!-- Languages + Tech -->
        <div class="flex flex-wrap gap-1.5">
          <span
            v-for="lang in project.tags.languages"
            :key="lang"
            class="px-2 py-0.5 rounded font-label text-[10px] uppercase tracking-wide"
            :class="langColor(lang)"
          >{{ lang }}</span>
          <span
            v-for="tech in project.tags.tech"
            :key="tech"
            class="px-2 py-0.5 rounded font-label text-[10px] uppercase tracking-wide"
            :class="techColor(tech)"
          >{{ tech }}</span>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-2 mt-auto" @click.stop>
        <a
          :href="project.links.github"
          target="_blank"
          rel="noopener"
          class="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-surface-container-highest border border-outline-variant/30 hover:border-primary/50 hover:text-primary font-label text-xs uppercase tracking-wide transition-all"
        >
          <span class="material-symbols-outlined text-sm">code</span>
          GitHub
        </a>
        <a
          :href="project.links.demo"
          target="_blank"
          rel="noopener"
          class="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-primary/10 border border-primary/30 hover:bg-primary/20 text-primary font-label text-xs uppercase tracking-wide transition-all"
        >
          <span class="material-symbols-outlined text-sm">open_in_new</span>
          Demo
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps({ project: Object })
const emit = defineEmits(['open'])
const { locale } = useI18n()

const imgError = ref(false)
const isHoverLoading = ref(false)
let hoverTimer = null

const localTitle   = computed(() => props.project.title[locale.value]   || props.project.title.en)
const localMotto   = computed(() => props.project.motto[locale.value]   || props.project.motto.en)
const localExcerpt = computed(() => props.project.excerpt[locale.value] || props.project.excerpt.en)

// --- Hover 3s timer (desktop only) ---
const startHoverTimer = () => {
  if (window.innerWidth < 768) return
  hoverTimer = setTimeout(() => {
    isHoverLoading.value = false
    emit('open', props.project)
  }, 3000)
  isHoverLoading.value = true
}
const cancelHoverTimer = () => {
  clearTimeout(hoverTimer)
  isHoverLoading.value = false
}
const handleClick = () => {
  cancelHoverTimer()
  emit('open', props.project)
}

// --- Tag color maps ---
const langColor = (lang) => {
  const map = {
    'JavaScript': 'bg-yellow-400/15 text-yellow-300 border border-yellow-400/30',
    'JS':         'bg-yellow-400/15 text-yellow-300 border border-yellow-400/30',
    'Vue':        'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30',
    'Python':     'bg-blue-400/15 text-blue-300 border border-blue-400/30',
    'TypeScript': 'bg-blue-500/15 text-blue-300 border border-blue-500/30',
    'TS':         'bg-blue-500/15 text-blue-300 border border-blue-500/30',
    'PHP':        'bg-purple-500/15 text-purple-300 border border-purple-500/30',
  }
  return map[lang] || 'bg-surface-container-highest text-on-surface-variant border border-outline-variant/30'
}

const techColor = (tech) => {
  const map = {
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
  return map[tech] || 'bg-surface-container-highest text-on-surface-variant border border-outline-variant/30'
}
</script>

<style scoped>
.tag-category {
  background: color-mix(in srgb, #81ecff 12%, transparent);
  color: #81ecff;
  border: 1px solid color-mix(in srgb, #81ecff 30%, transparent);
}

/* Animated light border that sweeps around the card */
.hover-progress-line {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: conic-gradient(
    from var(--progress-angle, 0deg),
    transparent 0deg,
    #81ecff 0deg,
    #ff3399 60deg,
    transparent 61deg
  );
  animation: sweep linear forwards;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: 2px;
  --progress-angle: 0deg;
}

@keyframes sweep {
  from { --progress-angle: 0deg; }
  to   { --progress-angle: 360deg; }
}
@property --progress-angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}

.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}
</style>
