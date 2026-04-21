<template>
  <section class="lg:col-span-1 space-y-16">

    <!-- ── Experience ── -->
    <div>
      <div class="flex items-center gap-4 text-5xl font-bold text-primary text-section-shadow tracking-widest mb-8">
        <span class="material-symbols-outlined scale-150">terminal</span>
        <h2>{{ $t('sections.experience') }}</h2>
      </div>

      <div class="relative border-l-2 border-surface-container-high ml-4 pl-10 space-y-12">
        <div v-for="exp in experience" :key="exp.id" class="relative group">
          <!-- Timeline dot -->
          <div class="absolute -left-12.75 top-1 w-5 h-5 bg-brand rounded-full shadow-[0_0_15px_#81ecff]"></div>

          <!-- Header -->
          <div class="flex flex-col md:flex-row md:items-baseline justify-between mb-1">
            <h3 class="font-headline font-bold text-xl text-brand">{{ exp.role[locale] }}</h3>
            <span class="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest">{{ exp.period[locale] }}</span>
          </div>
          <h4 class="font-label text-on-surface font-medium mb-4 uppercase tracking-wider">{{ exp.company[locale] }}</h4>

          <!-- Summary -->
          <p class="text-on-surface-variant text-sm leading-relaxed mb-5 max-w-xl">{{ exp.summary[locale] }}</p>

          <!-- Highlights -->
          <div class="space-y-3 mb-5">
            <div v-for="h in exp.highlights" :key="h.title.en" class="pl-3 border-l border-brand/30">
              <p class="font-label text-xs font-bold text-brand mb-0.5">{{ h.title[locale] }}</p>
              <p class="text-on-surface-variant text-xs leading-relaxed">{{ h.detail[locale] }}</p>
            </div>
          </div>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5">
            <TechTag v-for="c in exp.tags.category"  :key="c" :label="c" type="category" size="sm" />
            <TechTag v-for="l in exp.tags.languages" :key="l" :label="l" type="language" size="sm" />
            <TechTag v-for="t in exp.tags.tech"      :key="t" :label="t" type="tech"     size="sm" />
          </div>
        </div>
      </div>
    </div>

    <!-- ── Education ── -->
    <div>
      <div class="flex items-center gap-4 text-5xl font-bold text-primary text-section-shadow tracking-widest mb-8">
        <span class="material-symbols-outlined scale-150">school</span>
        <h2>{{ $t('sections.education') }}</h2>
      </div>

      <div class="relative border-l-2 border-surface-container-high ml-4 pl-10 space-y-10">
        <div v-for="edu in education" :key="edu.id" class="relative group">
          <!-- Timeline dot -->
          <div class="absolute -left-12.75 top-1 w-5 h-5 bg-surface-container-high rounded-full border-2 border-brand"></div>

          <!-- Header -->
          <div class="flex flex-col md:flex-row md:items-baseline justify-between mb-1">
            <h3 class="font-headline font-bold text-xl text-on-surface">
              {{ edu.degree[locale] }} · {{ edu.major[locale] }}
            </h3>
            <span class="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest">{{ edu.period[locale] }}</span>
          </div>
          <h4 class="font-label text-on-surface font-medium mb-1 uppercase tracking-wider">{{ edu.university[locale] }}</h4>

          <!-- GPA -->
          <p class="font-label text-sm text-brand mb-3">GPA <span class="font-bold">{{ edu.gpa }}</span></p>

          <!-- Description -->
          <p class="text-on-surface-variant text-sm leading-relaxed mb-4 max-w-xl">{{ edu.description[locale] }}</p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5">
            <TechTag v-for="c in edu.tags.category"  :key="c" :label="c" type="category" size="sm" />
            <TechTag v-for="l in edu.tags.languages" :key="l" :label="l" type="language" size="sm" />
            <TechTag v-for="t in edu.tags.tech"      :key="t" :label="t" type="tech"     size="sm" />
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import TechTag from '../TechTag.vue'
import { experienceData, educationData } from '../../data/experience/index.js'

const { locale: localeRef } = useI18n()
const locale = computed(() => localeRef.value)

const experience = experienceData
const education  = educationData
</script>

<style>
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}
</style>
