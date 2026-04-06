<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="">
    <Navbar />
    <main class="mx-auto max-w-380 md:px-8 px-4">
      <slot />
    </main>
    <Footer/>
  </div>
</template>