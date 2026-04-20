<template>
  <div>
    <header class="mb-3">
      <div class="flex items-center gap-4 text-5xl font-bold text-primary text-section-shadow tracking-widest mb-8">
        <span class="material-symbols-outlined scale-150">assignment</span>
        <h2>{{ $t('sections.projects') }}</h2>
      </div>
    </header>

    <!-- Project Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        @open="openModal"
      />
    </div>

    <!-- Modal -->
    <ProjectModal
      v-if="activeProject"
      :project="activeProject"
      @close="closeModal"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import projectsData from '../../data/projects.json'
import ProjectCard from '../ProjectCard.vue'
import ProjectModal from '../ProjectModal.vue'

const projects = projectsData
const activeProject = ref(null)

const openModal = (project) => {
  activeProject.value = project
  // Push a history entry so browser Back closes modal
  history.pushState({ modal: project.id }, '')
}

const closeModal = () => {
  activeProject.value = null
}

// Handle browser back button
window.addEventListener('popstate', (e) => {
  if (activeProject.value) {
    activeProject.value = null
  }
})
</script>
