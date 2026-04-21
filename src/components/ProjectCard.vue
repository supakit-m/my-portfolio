<template>
  <div
    class="project-card group relative rounded-xl bg-surface-container-high overflow-hidden cursor-pointer transition-all duration-300 hover:bg-surface-bright flex flex-col"
    :class="{ 'ring-2 ring-brand/50': isHoverLoading }"
    @click="handleClick"
    @mouseenter="startHoverTimer"
    @mouseleave="cancelHoverTimer"
  >
    <!-- Animated sweep border on hover-load -->
    <div v-if="isHoverLoading" class="absolute inset-0 rounded-xl pointer-events-none z-10 overflow-hidden">
      <div class="hover-sweep"></div>
    </div>

    <!-- Cover Image -->
    <div class="relative w-full h-44 overflow-hidden bg-surface-container-lowest flex-shrink-0">
      <img
        v-if="project.coverImage && !imgError"
        :src="project.coverImage"
        :alt="localTitle"
        loading="lazy"
        class="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
        @error="imgError = true"
      />
      <div v-else class="absolute inset-0 flex items-center justify-center">
        <span class="material-symbols-outlined text-brand/15 text-8xl select-none">{{ project.icon || 'code' }}</span>
      </div>
      <div class="absolute inset-0 bg-gradient-to-t from-surface-container-high via-transparent to-transparent"></div>
      <div v-if="project.featured" class="absolute top-3 left-3">
        <span class="px-2 py-0.5 bg-brand/15 border border-brand/30 rounded-full font-label text-[9px] text-brand uppercase tracking-widest">Featured</span>
      </div>
    </div>

    <!-- Body -->
    <div class="p-6 flex flex-col flex-1">
      <div class="mb-3">
        <h3 class="font-headline font-bold text-lg text-on-surface group-hover:text-brand transition-colors leading-tight mb-1 line-clamp-1">
          {{ localTitle }}
        </h3>
        <p class="font-label text-xs text-brand/70 tracking-wide line-clamp-1">{{ localMotto }}</p>
      </div>

      <p class="text-on-surface-variant font-body text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
        {{ localExcerpt }}
      </p>

      <!-- Tags -->
      <div class="space-y-2 mb-5">
        <div class="flex flex-wrap gap-1.5">
          <TechTag v-for="c in project.tags.category"  :key="c" :label="c" type="category" size="sm" />
        </div>
        <div class="flex flex-wrap gap-1.5">
          <TechTag v-for="l in project.tags.languages" :key="l" :label="l" type="language" size="sm" />
          <TechTag v-for="t in project.tags.tech"      :key="t" :label="t" type="tech"     size="sm" />
        </div>
      </div>

      <!-- Action buttons -->
      <div class="flex gap-2 mt-auto" @click.stop>
        <a :href="project.links.github" target="_blank" rel="noopener"
          class="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-surface-container-highest border border-outline-variant/30 hover:border-brand/50 hover:text-brand font-label text-xs uppercase tracking-wide transition-all">
          <span class="material-symbols-outlined text-sm">code</span>
          GitHub
        </a>
        <a :href="project.links.demo" target="_blank" rel="noopener"
          class="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg bg-brand/10 border border-brand/30 hover:bg-brand/20 text-brand font-label text-xs uppercase tracking-wide transition-all">
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
import TechTag from './TechTag.vue'

const props = defineProps({ project: Object })
const emit  = defineEmits(['open'])
const { locale } = useI18n()

const imgError       = ref(false)
const isHoverLoading = ref(false)
let hoverTimer = null

const localTitle   = computed(() => props.project.title[locale.value]   || props.project.title.en)
const localMotto   = computed(() => props.project.motto[locale.value]   || props.project.motto.en)
const localExcerpt = computed(() => props.project.excerpt[locale.value] || props.project.excerpt.en)

const startHoverTimer = () => {
  if (window.innerWidth < 768) return
  isHoverLoading.value = true
  hoverTimer = setTimeout(() => { isHoverLoading.value = false; emit('open', props.project) }, 3000)
}
const cancelHoverTimer = () => { clearTimeout(hoverTimer); isHoverLoading.value = false }
const handleClick = () => { cancelHoverTimer(); emit('open', props.project) }
</script>

<style scoped>
.hover-sweep {
  position: absolute; inset: 0; border-radius: inherit;
  background: conic-gradient(from var(--sa, 0deg), transparent 0deg, #81ecff 0deg, #ff3399 60deg, transparent 61deg);
  animation: sweep 3s linear forwards;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  padding: 2px;
  --sa: 0deg;
}
@keyframes sweep { from { --sa: 0deg } to { --sa: 360deg } }
@property --sa { syntax: '<angle>'; inherits: false; initial-value: 0deg; }
.material-symbols-outlined { font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24; }
</style>
