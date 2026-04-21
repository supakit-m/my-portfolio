<template>
  <nav class="sticky top-0 z-50 bg-bg-primary backdrop-blur-md border-b border-bg-tertiary">
    <div class="container mx-auto px-4 h-20 flex items-center justify-between">
      <!-- Logo -->
      <div
        @click="isMenuOpen = false"
        to="/"
        class="text-xl md:text-2xl font-bold tracking-tighter text-primary"
      >
        SUPAKIT<span class="text-brand">.M</span>
      </div>

      <!-- Desktop Nav Links -->
      <div class="hidden md:flex lg:gap-12 gap-4 items-center">
        <template v-for="link in navLinks" :key="link.id">
          <button
            @click="handleNavigation(link.id)"
            :class="[
              'cursor-pointer relative pb-1 transition-all duration-300 text-sm lg:text-md font-medium group hover:text-shadow-md text-shadow-brand',
              isActiveDesktopLink(link.id) ? 'text-brand text-shadow-md' : 'text-alt hover:text-brand',
            ]"
          >
            {{ link.name }}
            <div
              :class="[
                'absolute -bottom-1 left-0 h-0.5 bg-brand transition-all duration-300 ease-out',
                isActiveDesktopLink(link.id) ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100',
              ]"
            ></div>
          </button>
        </template>
      </div>

      <!-- Right actions: lang switcher + resume + hamburger -->
      <div class="flex items-center gap-2">
        <!-- Language Toggle -->
        <button
          @click="toggleLocale"
          class="flex items-center gap-1 px-3 py-1.5 cursor-pointer rounded-full border border-outline-variant/40 hover:border-primary/50 transition-all group"
          :title="locale === 'en' ? 'Switch to Thai' : 'Switch to English'"
        >
          <span class="font-label text-xs font-bold uppercase tracking-wider transition-colors"
            :class="locale === 'en' ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'"
          >EN</span>
          <span class="text-outline-variant/60 text-xs">/</span>
          <span class="font-label text-xs font-bold uppercase tracking-wider transition-colors"
            :class="locale === 'th' ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'"
          >TH</span>
        </button>

        <!-- Resume Button -->
        <button
          class="bg-primary-container text-on-primary-container font-label font-bold cursor-pointer w-30 px-4 md:px-6 py-2 rounded-full text-[10px] md:text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all"
        >
          {{ $t('nav.resume') }}
        </button>

        <!-- Hamburger (mobile) -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden p-2 text-bg-inverse hover:bg-bg-secondary/20 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
            <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-bg-primary border-b border-bg-tertiary px-6 py-6 flex flex-col gap-5 shadow-xl">
        <template v-for="link in navLinksMobile" :key="link.id">
          <button
            @click="handleNavigation(link.id)"
            :class="[
              'text-left text-lg transition-colors',
              activeSection === link.id ? 'text-brand' : 'text-alt hover:text-muted',
            ]"
          >
            {{ link.name }}
          </button>
        </template>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale, t } = useI18n()
const isMenuOpen  = ref(false)
const activeSection = ref('')
let ticking = false

const toggleLocale = () => {
  locale.value = locale.value === 'en' ? 'th' : 'en'
}

const navLinksMobile = computed(() => [
  { name: t('nav.intro'),    id: '#intro' },
  { name: t('nav.personal'), id: '#personal' },
  { name: t('nav.expSkill'), id: '#exp-edu' },
  { name: t('sections.skills'), id: '#skill' },
  { name: t('nav.projects'), id: '#project' },
  { name: t('nav.contact'),  id: '#contact' },
])

const navLinks = computed(() => [
  { name: t('nav.intro'),    id: '#intro' },
  { name: t('nav.personal'), id: '#personal' },
  { name: `${t('nav.expSkill')}`, id: '#exp-edu-skill' },
  { name: t('nav.projects'), id: '#project' },
  { name: t('nav.contact'),  id: '#contact' },
])

const desktopSectionMap = {
  '#intro':         ['#intro'],
  '#personal':      ['#personal'],
  '#exp-edu-skill': ['#exp-edu', '#skill'],
  '#project':       ['#project'],
  '#contact':       ['#contact'],
}

const isActiveDesktopLink = (linkId) => {
  const sections = desktopSectionMap[linkId] ?? [linkId]
  return sections.includes(activeSection.value)
}

const getActiveSection = () => {
  const navbarHeight = 80
  const scrollY = window.scrollY + navbarHeight + 10
  let current = navLinksMobile.value[0].id
  navLinksMobile.value.forEach(({ id }) => {
    const el = document.querySelector(id)
    if (el && el.offsetTop <= scrollY) current = id
  })
  activeSection.value = current
}

const onScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => { getActiveSection(); ticking = false })
    ticking = true
  }
}

const handleNavigation = (id) => {
  isMenuOpen.value = false
  setTimeout(() => {
    const targetId = desktopSectionMap[id]?.[0] ?? id
    const element = document.querySelector(targetId)
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, 300)
}

onMounted(() => { getActiveSection(); window.addEventListener('scroll', onScroll, { passive: true }) })
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
