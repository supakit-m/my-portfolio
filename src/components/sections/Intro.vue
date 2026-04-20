<template>
  <div>
    <section class="min-h-[80vh] pt-20 pb-10 flex flex-col items-center justify-center text-center px-4">
      <h1 class="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter flex flex-col md:block items-center">
        <span class="text-alt rounded-2xl px-4 py-1 inline-block text-custom-shadow">Supakit</span>
        <span class="text-alt px-4 py-1 md:mt-0 inline-block text-custom-shadow">Mai-ngam</span>
      </h1>

      <div class="mb-12">
        <div class="text-primary-dim flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-6">
          <p class="text-2xl md:text-3xl font-medium">Full-stack Developer</p>
          <span class="hidden md:block text-3xl">|</span>
          <span class="block md:hidden text-3xl border-t-3 w-30"></span>
          <p class="text-2xl md:text-3xl font-medium">Back-end Developer</p>
        </div>
        <p class="px-1 text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-dim text-lg md:text-xl leading-relaxed italic">
          {{ $t('intro.quote') }}
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <button
          @click="scrollToProjects"
          class="cursor-pointer w-full md:w-auto px-10 py-4 rounded-full bg-linear-to-r shadow-primary-dim from-primary to-primary-dim text-on-primary-container font-label font-bold uppercase tracking-widest hover:brightness-140 hover:shadow-md transition-all"
        >
          {{ $t('intro.viewProjects') }}
        </button>
        <a
          href="/path-to-your-resume.pdf"
          target="_blank"
          class="w-full md:w-auto px-10 py-4 rounded-full border-2 border-outline-variant hover:bg-surface-bright text-on-surface font-label font-bold uppercase tracking-widest transition-all"
        >
          {{ $t('intro.resume') }}
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
const scrollToProjects = () => {
  const el = document.querySelector('#project')
  if (el) {
    const top = el.getBoundingClientRect().top + window.pageYOffset - 74
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>
