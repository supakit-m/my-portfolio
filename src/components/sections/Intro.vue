<template>
  <section
    id="intro"
    class="min-h-[80vh] pt-20 pb-10 flex flex-col items-center justify-center text-center px-4"
  >
    <h1
      class="text-6xl md:text-8xl font-extrabold mb-8 tracking-tighter flex flex-col md:block items-center"
    >
      <span class="text-brand bg-bg-primary rounded-2xl px-4 py-1 inline-block shadow-2xl">
        Supakit
      </span>

      <!-- <br class="md:hidden border-3" /> -->

      <span class="text-primary px-4 py-1 md:mt-0 inline-block">
        Mai-ngam
      </span>
    </h1>

    <div class="mb-12">
      <div
        class="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 mb-6"
      >
        <p class="text-primary text-2xl md:text-3xl font-medium">
          Full-stack Developer
        </p>
        <span class="hidden md:block text-primary text-3xl">|</span>
        <span class="block md:hidden  text-primary text-3xl border-t-3 w-30"></span>
        <p class="text-primary text-2xl md:text-3xl font-medium">
          Back-end Developer
        </p>
      </div>

      <p class="text-primary text-lg md:text-xl leading-relaxed italic">
        "Solving complex problems with precision and building sustainable system
        architectures."
      </p>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
      <button
        @click="scrollToProjects"
        class="bg-brand text-bg-primary border-2 px-10 py-4 rounded-xl font-bold hover:scale-105  transition-all shadow-lg "
      >
        ดูผลงานของผม
      </button>

      <a
        href="/path-to-your-resume.pdf"
        target="_blank"
        class="bg-bg-primary text-bg-inverse px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all shadow-lg"
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
