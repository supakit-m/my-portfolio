<template>
  <section class="lg:col-span-1 space-y-6">
    <div class="flex items-center gap-4 text-5xl font-bold text-primary text-section-shadow tracking-widest mb-8">
      <span class="material-symbols-outlined scale-150">rebase_edit</span>
      <h2>{{ $t('sections.skills') }}</h2>
    </div>

    <!-- Skill Category Card -->
    <div
      v-for="cat in categories"
      :key="cat.key"
      class="bg-surface-container-high p-6 rounded-xl transition-all duration-300 hover:bg-surface-bright group border-l-4 border-transparent hover:border-brand"
    >
      <div class="flex items-center gap-2 mb-4">
        <span class="material-symbols-outlined text-brand text-xl">{{ cat.icon }}</span>
        <h3 class="font-label text-xs font-bold text-brand uppercase tracking-[0.2em]">{{ $t(`skills.${cat.key}`) }}</h3>
      </div>
      <div class="flex flex-wrap gap-2">
        <TechTag
          v-for="skill in cat.items"
          :key="skill"
          :label="skill"
          :type="cat.tagType"
          size="md"
        />
      </div>
    </div>

  </section>
</template>

<script setup>
import TechTag from '../TechTag.vue'
import { skillsData } from '../../data/skills/index.js'

const categories = [
  { key: 'languages', icon: 'code',          tagType: 'language', items: skillsData.languages },
  { key: 'frontend',  icon: 'web',            tagType: 'tech',     items: skillsData.frontend  },
  { key: 'backend',   icon: 'dns',            tagType: 'tech',     items: skillsData.backend   },
  { key: 'database',  icon: 'storage',        tagType: 'tech',     items: skillsData.database  },
  { key: 'tools',     icon: 'handyman',       tagType: 'tech',     items: skillsData.tools     },
]
</script>

<style>
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24;
}
</style>
