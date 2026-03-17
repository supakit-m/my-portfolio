<template>
  <nav class="sticky top-0 z-50 bg-bg-primary backdrop-blur-md border-b border-bg-tertiary">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <router-link to="/" class="text-xl font-bold tracking-tighter text-bg-inverse">
        SUPAKIT<span class="text-bg-secondary">.M</span>
      </router-link>
      
      <div class="flex gap-6 items-center">
        <router-link to="/" class="text-alt hover:text-muted transition-colors">Home</router-link>
        <router-link to="/projects" class="text-alt hover:text-muted transition-colors">Projects</router-link>
        <a href="mailto:supakit.m.work@gmail.com" 
           class="bg-brand hover:bg-brand-hover text-primary px-4 py-1.5 rounded-md transition-all">
          Contact
        </a>
      </div>
    </div>
  </nav>
</template>