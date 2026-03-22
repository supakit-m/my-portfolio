<template>
  <section
    id="intro"
    class="min-h-[80vh] pt-20 pb-10 flex flex-col items-center justify-center text-center px-4"
  >
    <h1
      class="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter flex flex-col md:block items-center"
    >
      <span class="text-primary rounded-2xl px-4 py-1 inline-block shadow-2xl">
        Supakit
      </span>

      <!-- <br class="md:hidden border-3" /> -->

      <span class="text-primary px-4 py-1 md:mt-0 inline-block">
        Mai-ngam
      </span>
    </h1>

    <div class="mb-12">
      <div
        class="text-primary-dim flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-6"
      >
        <p class="text-2xl md:text-3xl font-medium">Full-stack Developer</p>
        <span class="hidden md:block text-3xl">|</span>
        <span class="block md:hidden text-3xl border-t-3 w-30"></span>
        <p class="text-2xl md:text-3xl font-medium">Back-end Developer</p>
      </div>

      <p
        class="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary-dim text-lg md:text-xl leading-relaxed italic"
      >
        "Solving complex problems with precision and building sustainable system
        architectures."
      </p>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      <button
        @click="scrollToProjects"
        class="w-full md:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary-container font-label font-bold uppercase tracking-widest hover:brightness-110 transition-all"
          >
        View Projects
      </button>

      <a
        href="/path-to-your-resume.pdf"
        target="_blank"
        class="w-full md:w-auto px-10 py-4 rounded-full border border-outline-variant hover:bg-surface-bright text-on-surface font-label font-bold uppercase tracking-widest transition-all"
          >
        Resume
      </a>
    </div>
  </section>
</template>

<script setup>
const scrollToProjects = () => {
  const el = document.querySelector("#project");
  if (el) {
    const navbarHeight = 74; // ให้เท่ากับค่าที่แก้ใน Navbar
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
</script>
