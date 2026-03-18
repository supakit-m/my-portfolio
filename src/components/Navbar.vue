<template>
  <nav class="sticky top-0 z-50 bg-bg-primary backdrop-blur-md border-b border-bg-tertiary">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <router-link 
        @click="isMenuOpen = false"
        to="/" 
        class="text-xl font-bold tracking-tighter text-bg-inverse"
      >
        SUPAKIT<span class="text-bg-secondary">.M</span>
      </router-link>

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

      <div class="hidden md:flex gap-6 items-center">
        <template v-for="link in navLinks" :key="link.id">
          <button
            @click="handleNavigation(link.id)"
            class="text-alt hover:text-muted transition-colors text-sm font-medium"
          >
            {{ link.name }}
          </button>
        </template>
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
import { ref } from 'vue';

const isMenuOpen = ref(false);

const navLinks = [
  { name: 'Intro', id: '#intro' },
  { name: 'Personal', id: '#personal' },
  { name: 'Experiences & Education', id: '#exp-edu' },
  { name: 'Skills', id: '#skill' },
  { name: 'Projects', id: '#project' },
  { name: 'Contact', id: '#contact' },
];

/**
 * ฟังก์ชันจัดการการนำทาง
 * 1. ปิดเมนูก่อน (ถ้าเปิดอยู่)
 * 2. รอให้เมนูหุบ (เพื่อป้องกัน Layout เลื่อนผิดจุด)
 * 3. เลื่อนหน้าจอโดยหักลบความสูง Navbar
 */
const handleNavigation = (id) => {
  const isMobile = isMenuOpen.value;
  
  // 1. สั่งปิดเมนู
  isMenuOpen.value = false;

  // 2. ตั้งค่า Delay: ถ้าเป็นมือถือให้รอ 300ms (ให้ Transition จบ) ถ้า Desktop เลื่อนได้เลย
  const delay = isMobile ? 300 : 0;

  setTimeout(() => {
    const element = document.querySelector(id);
    if (element) {
      // ระยะ Offset สำหรับ Navbar (h-16 = 64px) + ระยะเผื่อนิดหน่อย 10px
      const navbarHeight = 74; 
      
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, delay);
};
</script>

<style scoped>
/* สไตล์เพิ่มเติมถ้าจำเป็น */
button {
  cursor: pointer;
}
</style>