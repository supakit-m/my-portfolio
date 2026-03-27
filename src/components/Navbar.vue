<template>
  <nav
    class="sticky top-0 z-50 bg-bg-primary backdrop-blur-md border-b border-bg-tertiary"
  >
    <div class="container mx-auto px-4 h-20 flex items-center justify-between">
      <router-link
        @click="isMenuOpen = false"
        to="/"
        class="text-xl md:text-2xl font-bold tracking-tighter text-primary"
      >
        SUPAKIT<span class="text-brand">.M</span>
      </router-link>

      <div class="hidden md:flex lg:gap-12 gap-4 items-center">
        <template v-for="link in navLinks" :key="link.id">
          <button
            @click="handleNavigation(link.id)"
            :class="[
              'relative pb-1 transition-all duration-300 text-sm lg:text-md font-medium group hover:text-shadow-md text-shadow-brand',
              activeSection === link.id
                ? 'text-brand text-shadow-md'
                : 'text-alt hover:text-brand',
            ]"
          >
            {{ link.name }}

            <div
              :class="[
                'absolute -bottom-1 left-0 h-0.5 bg-brand transition-all duration-300 ease-out hover:shadow-lg shadow-brand',
                activeSection === link.id
                  ? 'w-full opacity-100'
                  : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100',
              ]"
            ></div>

            <div
              v-if="activeSection === link.id"
              class="absolute inset-0 bg-brand/5 blur-md -z-10 rounded-lg transition-opacity duration-500"
            ></div>
          </button>
        </template>
      </div>

      <div class="flex items-center gap-3">
        <button
          class="bg-primary-container text-on-primary-container font-label font-bold px-4 md:px-6 py-2 rounded-full text-[10px] md:text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all"
        >
          Resume
        </button>

        <button
          @click="isMenuOpen = !isMenuOpen"
          class="md:hidden p-2 text-bg-inverse hover:bg-bg-secondary/20 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div
        v-if="isMenuOpen"
        class="md:hidden bg-bg-primary border-b border-bg-tertiary px-6 py-6 flex flex-col gap-5 shadow-xl"
      >
        <template v-for="link in navLinks" :key="link.id">
          <button
            @click="handleNavigation(link.id)"
            class="text-left text-lg text-alt hover:text-muted transition-colors"
          >
            {{ link.name }}
          </button>
        </template>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);
const activeSection = ref(""); // เก็บ ID ของ section ที่กำลัง active

const navLinks = [
  { name: "Intro", id: "#intro" },
  { name: "Personal", id: "#personal" },
  { name: "Experiences & Education", id: "#exp-edu" },
  { name: "Skills", id: "#skill" },
  { name: "Projects", id: "#project" },
  { name: "Contact", id: "#contact" },
];

// --- ฟังก์ชันตรวจจับ Scroll (Intersection Observer) ---
let observer = null;

onMounted(() => {
  const options = {
    root: null,
    rootMargin: "-20% 0px -70% 0px", // ตรวจจับเมื่อ section อยู่บริเวณกลางจอ
    threshold: 0
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = `#${entry.target.id}`;
      }
    });
  }, options);

  // สั่งให้ Observer ติดตามทุก Section ที่มี ID ตรงกับ navLinks
  navLinks.forEach((link) => {
    const el = document.querySelector(link.id);
    if (el) observer.observe(el);
  });
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});

// --- ฟังก์ชันการนำทาง (คงเดิมแต่เพิ่มการเลื่อนที่แม่นยำ) ---
const handleNavigation = (id) => {
  isMenuOpen.value = false;
  const delay = isMenuOpen.value ? 300 : 0;

  setTimeout(() => {
    const element = document.querySelector(id);
    if (element) {
      const navbarHeight = 80; // ปรับให้ตรงกับความสูง Nav จริง
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, delay);
};
</script>
