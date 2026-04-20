<template>
  <section class="lg:col-span-1 space-y-8">
    <div class="flex items-center gap-4 text-5xl font-bold text-primary text-section-shadow tracking-widest mb-8">
      <span class="material-symbols-outlined scale-150">rebase_edit</span>
      <h2>{{ $t('sections.skills') }}</h2>
    </div>
    <!-- Languages -->
    <div class="bg-surface-container-high p-8 rounded-xl transition-all duration-300 hover:bg-surface-bright group border-l-4 border-transparent hover:border-primary">
      <h3 class="font-label text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6">Languages</h3>
      <div class="flex flex-wrap gap-3">
        <div v-for="skill in langs" :key="skill" class="px-4 py-2 bg-surface-container-highest rounded-lg font-label text-sm text-on-surface hover:text-primary transition-colors cursor-default">{{ skill }}</div>
      </div>
    </div>
    <!-- Backend -->
    <div class="bg-surface-container-high p-8 rounded-xl transition-all duration-300 hover:bg-surface-bright group border-l-4 border-transparent hover:border-primary">
      <h3 class="font-label text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6">Backend Architecture</h3>
      <div class="flex flex-wrap gap-3">
        <div v-for="skill in backend" :key="skill" class="px-4 py-2 bg-surface-container-highest rounded-lg font-label text-sm text-on-surface hover:text-primary transition-colors cursor-default">{{ skill }}</div>
      </div>
    </div>
    <!-- Frontend -->
    <div class="bg-surface-container-high p-8 rounded-xl transition-all duration-300 hover:bg-surface-bright group border-l-4 border-transparent hover:border-primary">
      <h3 class="font-label text-xs font-bold text-primary uppercase tracking-[0.2em] mb-6">Frontend Interface</h3>
      <div class="flex flex-wrap gap-3">
        <div v-for="skill in frontend" :key="skill" class="px-4 py-2 bg-surface-container-highest rounded-lg font-label text-sm text-on-surface hover:text-primary transition-colors cursor-default">{{ skill }}</div>
      </div>
    </div>
    <!-- DB + Tools -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-surface-container-low p-6 rounded-xl border-t border-outline-variant/20">
        <h3 class="font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-4">Database</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="db in databases" :key="db" class="text-xs text-on-surface font-label opacity-70 hover:opacity-100 transition-opacity">{{ db }}</span>
        </div>
      </div>
      <div class="bg-surface-container-low p-6 rounded-xl border-t border-outline-variant/20">
        <h3 class="font-label text-[10px] font-bold text-on-surface-variant uppercase tracking-[0.2em] mb-4">Core Tools</h3>
        <div class="flex flex-wrap gap-2">
          <span v-for="tool in tools" :key="tool" class="text-xs text-on-surface font-label opacity-70 hover:opacity-100 transition-opacity">{{ tool }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const langs    = ['JS', 'TS', 'Python', 'PHP']
const backend  = ['Node.js', 'NestJS', 'FastAPI', 'Express']
const frontend = ['Vue.js', 'Tailwind CSS', 'Next.js']
const databases = ['MySQL', 'PostgreSQL', 'MongoDB']
const tools     = ['Git', 'Postman', 'MediaPipe', 'TensorFlow.js']
</script>

<style>
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24;
}
</style>
