<template>
  <div class="space-x-6">
    <header>
      <div class="flex items-center gap-4 text-5xl font-bold text-primary text-section-shadow tracking-widest mb-8">
        <span class="material-symbols-outlined scale-150">contacts</span>
        <h2>{{ $t('sections.contact') }}</h2>
      </div>
    </header>
    <div class="lg:col-span-8 space-y-8 w-full">
      <div class="bg-surface-container-high rounded-xl pb-12 pt-10 px-6 md:px-16 border border-primary/10 shadow-2xl relative overflow-hidden group">
        <!-- Availability badge -->
        <div class="relative top-0 right-0 p-6 pointer-events-none flex flex-wrap items-center gap-5 w-80 mb-8">
          <div class="relative">
            <div class="w-3 h-3 bg-primary rounded-full animate-pulse box-section-shadow brightness-200"></div>
            <div class="absolute top-0 left-0 w-3 h-3 bg-primary rounded-full brightness-150"></div>
          </div>
          <div>
            <div class="font-label text-m font-bold text-on-surface uppercase tracking-widest text-section-shadow">
              {{ $t('contact.availability') }}
            </div>
            <div class="font-label text-[14px] text-primary uppercase text-section-shadow">
              {{ $t('contact.availableFor') }}
            </div>
          </div>
        </div>

        <div class="space-y-12 relative z-10">
          <!-- Email -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-outline-variant/20">
            <div>
              <p class="font-label text-[10px] text-primary uppercase tracking-[0.3em] mb-2">
                {{ $t('contact.primaryComm') }}
              </p>
              <h2 class="font-headline text-2xl md:text-3xl font-bold text-on-surface">
                supakit.m.work@gmail.com
              </h2>
            </div>
            <button
              class="flex items-center justify-center gap-2 px-6 py-3 bg-primary/5 hover:bg-primary/20 border border-primary/20 rounded-lg transition-all duration-300"
              @click="copy('supakit.m.work@gmail.com', 'email')"
            >
              <span class="material-symbols-outlined text-sm text-primary">{{ copied === 'email' ? 'check' : 'content_copy' }}</span>
              <span class="font-label text-[10px] font-bold text-primary uppercase tracking-widest">{{ $t('contact.copy') }}</span>
            </button>
          </div>

          <!-- Phone -->
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-outline-variant/20">
            <div>
              <p class="font-label text-[10px] text-primary uppercase tracking-[0.3em] mb-2">
                {{ $t('contact.voiceLine') }}
              </p>
              <h2 class="font-headline text-2xl md:text-3xl font-bold text-on-surface">
                086-867-4926
              </h2>
            </div>
            <button
              class="flex items-center justify-center gap-2 px-6 py-3 bg-primary/5 hover:bg-primary/20 border border-primary/20 rounded-lg transition-all duration-300"
              @click="copy('0868674926', 'phone')"
            >
              <span class="material-symbols-outlined text-sm text-primary">{{ copied === 'phone' ? 'check' : 'content_copy' }}</span>
              <span class="font-label text-[10px] font-bold text-primary uppercase tracking-widest">{{ $t('contact.copy') }}</span>
            </button>
          </div>

          <!-- Links Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <a
              class="group/link flex items-center justify-between p-6 bg-surface-container-low rounded-xl border border-outline-variant/20 hover:border-primary/40 transition-all"
              href="https://github.com/supakit-m"
              target="_blank"
            >
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-2xl text-primary">terminal</span>
                <div>
                  <p class="font-label text-[9px] text-outline-variant uppercase tracking-widest">{{ $t('contact.sourceControl') }}</p>
                  <p class="font-headline font-bold text-on-surface">github.com/supakit-m</p>
                </div>
              </div>
              <span class="material-symbols-outlined text-primary opacity-0 group-hover/link:opacity-100 transition-opacity">north_east</span>
            </a>

            <!-- LinkedIn — uncomment when ready
            <a
              class="group/link flex items-center justify-between p-6 bg-surface-container-low rounded-xl border border-outline-variant/20 hover:border-primary/40 transition-all"
              href="https://linkedin.com/in/supakit-m"
              target="_blank"
            >
              <div class="flex items-center gap-4">
                <span class="material-symbols-outlined text-2xl text-primary">hub</span>
                <div>
                  <p class="font-label text-[9px] text-outline-variant uppercase tracking-widest">Professional Mesh</p>
                  <p class="font-headline font-bold text-on-surface">linkedin.com/in/supakit-m</p>
                </div>
              </div>
              <span class="material-symbols-outlined text-primary opacity-0 group-hover/link:opacity-100 transition-opacity">north_east</span>
            </a>
            -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const copied = ref(null)
const copy = (text, key) => {
  navigator.clipboard.writeText(text)
  copied.value = key
  setTimeout(() => { copied.value = null }, 2000)
}
</script>

<style>
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}
</style>
