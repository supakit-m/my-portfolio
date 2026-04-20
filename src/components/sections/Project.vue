<template>
  <div>
    <header class="mb-3">
      <div class="flex items-center gap-4 text-5xl font-bold text-primary text-section-shadow tracking-widest mb-8">
        <span class="material-symbols-outlined scale-150">assignment</span>
        <h2>Project</h2>
      </div>
    </header>

    <!-- Bento Grid Projects -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <!-- Featured Card -->
      <div
        v-if="featuredProject"
        class="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-high hover:bg-surface-bright transition-all duration-500"
      >
        <div class="p-8 h-full flex flex-col">
          <div class="flex justify-between items-start mb-6">
            <div>
              <span class="font-label text-[10px] uppercase tracking-widest text-primary/60 mb-2 block">
                Featured Project
              </span>
              <h3 class="text-3xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors mb-1">
                {{ featuredProject.title }}
              </h3>
              <p class="text-primary/70 font-label text-sm mb-3">{{ featuredProject.subtitle }}</p>
              <p class="text-on-surface-variant font-body max-w-md">
                {{ featuredProject.description }}
              </p>
            </div>
            <div class="flex gap-2 shrink-0 ml-4">
              <a
                class="p-3 bg-surface-container-highest rounded-full hover:text-primary transition-colors"
                :href="featuredProject.github"
                target="_blank"
                title="GitHub"
              >
                <span class="material-symbols-outlined">code</span>
              </a>
              <a
                class="p-3 bg-surface-container-highest rounded-full hover:text-primary transition-colors"
                :href="featuredProject.demo"
                target="_blank"
                title="Live Demo"
              >
                <span class="material-symbols-outlined">open_in_new</span>
              </a>
            </div>
          </div>
          <!-- Icon Visual -->
          <div class="mt-auto relative w-full h-48 rounded-lg overflow-hidden bg-surface-container flex items-center justify-center">
            <span class="material-symbols-outlined text-primary/20 text-[12rem] select-none">
              {{ featuredProject.icon }}
            </span>
          </div>
          <div class="flex flex-wrap gap-2 mt-6">
            <span
              v-for="tag in featuredProject.tags"
              :key="tag"
              class="chip-border px-3 py-1 bg-surface-container-highest font-label text-xs text-on-surface-variant"
            >{{ tag }}</span>
          </div>
        </div>
      </div>

      <!-- Side + Bottom Cards -->
      <template v-for="project in otherProjects" :key="project.id">
        <div
          class="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-high hover:bg-surface-bright transition-all duration-500"
        >
          <div class="p-8 h-full flex flex-col">
            <div class="mb-6 flex-1">
              <span class="material-symbols-outlined text-primary mb-3 text-3xl block">{{ project.icon }}</span>
              <span class="font-label text-[10px] uppercase tracking-widest text-primary/60 mb-2 block">
                {{ project.subtitle }}
              </span>
              <h3 class="text-xl font-headline font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-on-surface-variant font-body text-sm">
                {{ project.description }}
              </p>
            </div>
            <div class="mt-auto">
              <div class="flex flex-wrap gap-2 mb-5">
                <span
                  v-for="tag in project.tags"
                  :key="tag"
                  class="chip-border px-3 py-1 bg-surface-container-highest font-label text-xs text-on-surface-variant"
                >{{ tag }}</span>
              </div>
              <div class="flex gap-3">
                <a
                  :href="project.github"
                  target="_blank"
                  class="inline-flex items-center gap-1 font-label text-xs text-on-surface-variant hover:text-primary transition-colors"
                >
                  <span class="material-symbols-outlined text-sm">code</span>
                  GitHub
                </a>
                <a
                  :href="project.demo"
                  target="_blank"
                  class="inline-flex items-center gap-1 font-label text-xs text-primary hover:gap-2 transition-all"
                >
                  Live Demo
                  <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import projects from '../../data/projects.json'
import { computed } from 'vue'

const featuredProject = computed(() => projects.find(p => p.featured))
const otherProjects = computed(() => projects.filter(p => !p.featured))
</script>

<style>
.material-symbols-outlined {
  font-variation-settings:
    "FILL" 0,
    "wght" 400,
    "GRAD" 0,
    "opsz" 24;
}
.chip-border {
  border-left: 2px solid #81ecff;
}
</style>
