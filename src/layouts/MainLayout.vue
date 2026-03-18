<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="grow container mx-auto px-8 pb-8 ">
      <slot />
    </main>
    <Footer/>
  </div>
</template>