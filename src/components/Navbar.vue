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
              isActiveDesktopLink(link.id)
                ? 'text-brand text-shadow-md'
                : 'text-alt hover:text-brand',
            ]"
          >
            {{ link.name }}

            <div
              :class="[
                'absolute -bottom-1 left-0 h-0.5 bg-brand transition-all duration-300 ease-out hover:shadow-lg shadow-brand',
                isActiveDesktopLink(link.id)
                  ? 'w-full opacity-100'
                  : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100',
              ]"
            ></div>

            <div
              v-if="isActiveDesktopLink(link.id)"
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
        <template v-for="linkMobile in navLinksMobile" :key="linkMobile.id">
          <button
            @click="handleNavigation(linkMobile.id)"
            :class="[
              'text-left text-lg transition-colors',
              activeSection === linkMobile.id
                ? 'text-brand'
                : 'text-alt hover:text-muted',
            ]"
          >
            {{ linkMobile.name }}
          </button>
        </template>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);
const activeSection = ref(""); // เก็บ id ของ mobile section ที่ active อยู่
let ticking = false;

// Mobile: แต่ละ section แยกกัน (ตรงกับ DOM elements จริง)
const navLinksMobile = [
  { name: "Intro", id: "#intro" },
  { name: "Personal", id: "#personal" },
  { name: "Experiences & Education", id: "#exp-edu" },
  { name: "Skills", id: "#skill" },
  { name: "Projects", id: "#project" },
  { name: "Contact", id: "#contact" },
];

// Desktop: บาง link รวมหลาย section เข้าด้วยกัน
const navLinks = [
  { name: "Intro", id: "#intro" },
  { name: "Personal", id: "#personal" },
  { name: "Experiences & Education \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0 Skills", id: "#exp-edu-skill" },
  { name: "Projects", id: "#project" },
  { name: "Contact", id: "#contact" },
];

// Map desktop link id → mobile section ids ที่ครอบคลุม
// ใช้สำหรับเช็คว่า desktop link ควร active หรือไม่
const desktopSectionMap = {
  "#intro":         ["#intro"],
  "#personal":      ["#personal"],
  "#exp-edu-skill": ["#exp-edu", "#skill"], // link เดียวครอบสอง section
  "#project":       ["#project"],
  "#contact":       ["#contact"],
};

// เช็คว่า desktop link ควร highlight ไหม
// โดย map กลับไปหา mobile sections ที่มันครอบคลุม
const isActiveDesktopLink = (linkId) => {
  const sections = desktopSectionMap[linkId] ?? [linkId];
  return sections.includes(activeSection.value);
};

// --- Scroll tracking ---
// ใช้ mobile sections เป็น source of truth เพราะเป็น DOM elements จริง
const getActiveSection = () => {
  const navbarHeight = 80;
  const scrollY = window.scrollY + navbarHeight + 10; // +10 buffer

  let current = navLinksMobile[0].id;

  navLinksMobile.forEach(({ id }) => {
    const el = document.querySelector(id);
    if (el && el.offsetTop <= scrollY) {
      current = id;
    }
  });

  activeSection.value = current;
};

const onScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      getActiveSection();
      ticking = false;
    });
    ticking = true;
  }
};

// --- Navigation ---
const handleNavigation = (id) => {
  isMenuOpen.value = false;

  // รอ menu ปิดก่อนแล้วค่อย scroll (เฉพาะ mobile)
  setTimeout(() => {
    // desktop link อย่าง #exp-edu-skill ไม่มี DOM element จริง
    // ให้ scroll ไปที่ section แรกที่มันครอบคลุมแทน
    const targetId = desktopSectionMap[id]?.[0] ?? id;
    const element = document.querySelector(targetId);
    if (element) {
      const navbarHeight = 80;
      const top = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, 300);
};

onMounted(() => {
  getActiveSection();
  window.addEventListener("scroll", onScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>