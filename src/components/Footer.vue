<!-- Footer -->
<template>
  <div class="bg-bg-primary text-alt py-12 px-6 relative overflow-hidden">
    <!-- PARTICLES BACKGROUND -->
    <div
      id="particles-footer"
      class="absolute top-0 left-0 w-full h-full z-0"
    ></div>

    <div class="max-w-6xl mx-auto relative z-10">
      <div class="grid md:grid-cols-3 gap-10 mb-8">
        <!-- Left Section - About -->
        <div>
          <h3 class="text-2xl font-bold mb-3">Supakit Mai-ngam</h3>
          <p class="text-alt mb-4 leading-relaxed">
            Passionate full-stack developer crafting beautiful digital
            experiences with modern technologies. Always learning, always
            building.
          </p>
          <div class="flex items-center text-alt">
            <i class="fas fa-map-marker-alt mr-2"></i>
            <span></span>
          </div>
        </div>

        <!-- Middle Section - Quick Links -->
        <div>
          <h4 class="text-xl font-semibold mb-4 text-alt">Quick Links</h4>
          <div class="grid grid-cols-2 gap-3">
            <a
              href="#"
              class="text-alt hover:text-brand-hover transition-colors"
              >Home</a
            >
            <a
              href="#about"
              class="text-alt hover:text-brand-hover transition-colors"
              >About</a
            >
            <a
              href="#tech-stack"
              class="text-alt hover:text-brand-hover transition-colors"
              >Skills</a
            >
            <a
              href="#projects"
              class="text-alt hover:text-brand-hover transition-colors"
              >Projects</a
            >
            <a
              href="#contact"
              class="text-alt hover:text-brand-hover transition-colors"
              >Contact</a
            >
          </div>
        </div>

        <!-- Right Section - Get In Touch -->
        <div>
          <h4 class="text-xl font-semibold mb-4 text-alt">Get In Touch</h4>
          <div class="space-y-3">
            <a
              href="mailto:supakit.m.work@gmail.com"
              class="flex items-center text-alt hover:text-brand-hover transition-colors"
            >
              <i class="fas fa-envelope mr-2"></i>
              supakit.m.work@gmail.com
            </a>
            <div class="flex items-center text-alt">
              <i class="fas fa-code mr-2"></i>
              Available for opportunities
            </div>
          </div>
        </div>
      </div>

      <!-- Social Media Icons -->
      <div
        class="flex flex-wrap justify-center gap-4 mb-6 py-6 border-t border-muted"
      >
        <a
          href="https://github.com/supakit-m"
          target="_blank"
          class="group relative w-50 h-12 p-3 rounded-full text-primary bg-bg-tertiary flex items-center transition-all hover:pl-6 overflow-hidden"
        >
          <span
            class="absolute inset-0 w-0 bg-brand transition-all duration-200 ease-in group-hover:w-full"
          ></span>
          <i-simple-icons-github class="text-xl z-1" />
          <div class="grow flex justify-center">
            <p
              class="grow text-center transition-all group-hover:translate-x-1 font-medium"
            >
              supakit-m
            </p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/"
          target="_blank"
          class="group relative w-50 h-12 p-3 rounded-full text-primary bg-bg-tertiary flex items-center transition-all hover:pl-6 overflow-hidden"
        >
          <span
            class="absolute inset-0 w-0 bg-brand transition-all duration-200 ease-in group-hover:w-full"
          ></span>
          <i-simple-icons-linkedin class="text-xl z-1" />
          <div class="grow flex justify-center">
            <p
              class="grow text-center transition-all group-hover:translate-x-1 font-medium"
            >
              Supakit Mai-ngam
            </p>
          </div>
        </a>

        <a
          href="https://www.facebook.com/"
          target="_blank"
          class="group relative w-50 h-12 p-3 rounded-full text-primary bg-bg-tertiary flex items-center transition-all hover:pl-6 overflow-hidden"
        >
          <span
            class="absolute inset-0 w-0 bg-brand transition-all duration-200 ease-in group-hover:w-full"
          ></span>
          <i-simple-icons-facebook class="text-xl z-1" />
          <div class="grow flex justify-center">
            <p
              class="grow text-center transition-all group-hover:translate-x-1 font-medium"
            >
              Supakit Mai-ngam
            </p>
          </div>
        </a>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          class="group relative w-50 h-12 p-3 rounded-full text-primary bg-bg-tertiary flex items-center transition-all hover:pl-6 overflow-hidden"
        >
          <span
            class="absolute inset-0 w-0 bg-brand transition-all duration-200 ease-in group-hover:w-full"
          ></span>
          <i-simple-icons-instagram class="text-xl z-1" />
          <div class="grow flex justify-center">
            <p
              class="grow text-center transition-all group-hover:translate-x-1 font-medium"
            >
              fluky_
            </p>
          </div>
        </a>

        <a
          href="mailto:supakit.m.work@gmail.com"
          class="group relative w-50 h-12 p-3 rounded-full text-primary bg-bg-tertiary flex items-center transition-all hover:pl-6 overflow-hidden"
        >
          <span
            class="absolute inset-0 w-0 bg-brand transition-all duration-200 ease-in group-hover:w-full"
          ></span>
          <i-lucide-mail class="text-xl z-1" />
          <div class="grow flex justify-center">
            <p
              class="grow text-center transition-all group-hover:translate-x-1 font-medium"
            >
              supakit.m.work
            </p>
          </div>
        </a>
      </div>

      <!-- Bottom Copyright -->
      <div class="text-center text-muted text-sm border-t border-muted pt-6">
        <p class="mt-2">© 2026 Supakit Mai-ngam. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>
