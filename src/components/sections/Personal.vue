<template>
  <div>
    <header>
      <div class="flex items-center gap-4 text-5xl font-bold text-primary text-section-shadow tracking-widest mb-8">
        <span class="material-symbols-outlined scale-150">person_heart</span>
        <h2>{{ $t('sections.personal') }}</h2>
      </div>
    </header>

    <section>
      <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6 auto-rows-[minmax(160px,auto)] mx-auto">

        <!-- ① Large Story Card (col-span-2, row-span-2) -->
        <div class="md:col-span-3 xl:col-span-3 xl:row-span-2 p-8 rounded-xl bg-surface-container-high flex flex-col justify-between group hover:bg-surface-bright transition-all">
          <div class="space-y-4">
            <span class="material-symbols-outlined text-brand text-3xl">terminal</span>
            <h3 class="font-headline text-2xl font-bold group-hover:text-brand transition-colors">
              Full-stack Developer
            </h3>

            <!-- Story paragraph 1 with highlights -->
            <p class="text-on-surface-variant leading-relaxed text-sm">
              <template v-for="(chunk, i) in storyParts" :key="i">
                <span v-if="chunk.highlight" class="text-brand font-semibold">{{ chunk.text }}</span>
                <span v-else>{{ chunk.text }}</span>
              </template>
            </p>

            <!-- Story paragraph 2 -->
            <p class="text-on-surface-variant leading-relaxed text-sm">
              {{ $t('personal.story2') }}
            </p>

            <!-- Story paragraph 3 -->
            <p class="text-on-surface-variant leading-relaxed text-sm">
              {{ $t('personal.story3') }}
            </p>
          </div>

          <!-- Top skill tags -->
          <div class="flex flex-wrap gap-2 mt-6">
            <TechTag v-for="s in personal.topSkills" :key="s" :label="s" size="sm" />
          </div>
        </div>

        <!-- ② Info Card (col-span-1) -->
        <div class="md:col-span-2 xl:col-span-2 p-7 rounded-xl bg-surface-container-high group hover:bg-surface-bright transition-all">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

            <div class="md:col-span-2 border-b border-on-surface/5 pb-2">
              <p class="font-label text-[10px] text-brand uppercase tracking-widest mb-1">
                {{ $t('personal.label.name') }}
              </p>
              <p class="font-headline font-bold text-on-surface text-xl leading-tight">
                {{ personal.name[$i18nLocale] }}
              </p>
              <p class="font-body text-on-surface-variant text-sm">
                {{ personal.name[$i18nLocale === 'th' ? 'en' : 'th'] }}
              </p>
            </div>
          
            <div class="space-y-5">
              <div>
                <p class="font-label text-[10px] text-brand uppercase tracking-widest mb-1">{{ $t('personal.label.nickname') }}</p>
                <p class="font-body text-on-surface text-sm">
                  {{ personal.nickname[$i18nLocale] }} / {{ personal.nickname[$i18nLocale === 'th' ? 'en' : 'th'] }}
                </p>
              </div>
              <div>
                <p class="font-label text-[10px] text-brand uppercase tracking-widest mb-1">{{ $t('personal.label.gender') }}</p>
                <p class="font-body text-on-surface text-sm">{{ $t('personal.gender') }}</p>
              </div>
            </div>
          
            <div class="space-y-5">
              <div>
                <p class="font-label text-[10px] text-brand uppercase tracking-widest mb-1">{{ $t('personal.label.age') }}</p>
                <p class="font-body text-on-surface text-sm">{{ age }} {{ $t('personal.label.yearsOld') }}</p>
              </div>
              <div>
                <p class="font-label text-[10px] text-brand uppercase tracking-widest mb-1">{{ $t('personal.label.location') }}</p>
                <p class="font-body text-on-surface text-sm leading-snug">{{ personal.location[$i18nLocale] }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- ③ Open for Opportunities Card (col-span-1) -->
        <div class="md:col-span-1 xl:col-span-2 p-7 rounded-xl bg-surface-container-high flex flex-col justify-between group hover:bg-surface-bright transition-all overflow-hidden relative">
          <div class="relative z-10 space-y-4">
            <!-- Pulse indicator -->
            <div class="flex items-center gap-3">
              <div class="relative">
                <div class="w-3 h-3 bg-brand rounded-full animate-pulse shadow-[0_0_10px_#81ecff]"></div>
                <div class="absolute inset-0 w-3 h-3 bg-brand rounded-full opacity-40 animate-ping"></div>
              </div>
              <span class="font-label text-xs text-brand uppercase tracking-widest">{{ $t('personal.availability') }}</span>
            </div>

            <h4 class="font-headline text-xl font-bold text-on-surface leading-snug">
              {{ $t('personal.openFor') }}
            </h4>
            <p class="text-on-surface-variant text-sm">{{ $t('personal.openForDetail') }}</p>
          </div>

          <!-- CTA button -->
          <button
            @click="scrollToContact"
            class="cursor-pointer mt-6 relative z-10 w-full py-3 rounded-lg bg-brand/10 border border-brand/30 hover:bg-brand/20 text-brand font-label text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
          >
            <span class="material-symbols-outlined text-sm">alternate_email</span>
            {{ $t('personal.contactBtn') }}
          </button>

          <!-- Decorative bg icon -->
          <div class="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
            <span class="material-symbols-outlined text-[10rem]">hub</span>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import TechTag from '../TechTag.vue'
import { personalData as personal } from '../../data/personal/index.js'

const { locale } = useI18n()
const $i18nLocale = computed(() => locale.value)

// Compute age from birth month/year
const age = computed(() => {
  const now = new Date()
  let a = now.getFullYear() - personal.birthYear
  if (now.getMonth() + 1 < personal.birthMonth) a--
  return a
})

// Story highlight chunks for current locale
const storyParts = computed(() => personal.story[locale.value] || personal.story.en)

const scrollToContact = () => {
  const el = document.querySelector('#contact')
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style>
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 300, "GRAD" 0, "opsz" 24;
}
</style>
