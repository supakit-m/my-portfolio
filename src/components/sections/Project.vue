<template>
  <div>
    <header class="mb-3">
      <div
      class="flex items-center gap-4 text-5xl font-bold text-primary text-section-shadow tracking-widest mb-8"
    >
      <span class="material-symbols-outlined scale-150">assignment</span>
      <h2>Project</h2>
    </div>
    </header>
    <!-- Filter Bar -->
    <div class="hidden flex-wrap items-center gap-3 mb-12">
      <button
        class="px-5 py-2 rounded-full bg-primary text-on-primary font-label text-sm font-bold transition-all"
      >
        All Projects
      </button>
      <button
        class="px-5 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-primary font-label text-sm transition-all"
      >
        Frontend
      </button>
      <button
        class="px-5 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-primary font-label text-sm transition-all"
      >
        Backend
      </button>
      <button
        class="px-5 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-primary font-label text-sm transition-all"
      >
        Tools
      </button>
      <div class="ml-auto flex items-center gap-2 text-on-surface-variant">
        <span class="material-symbols-outlined text-sm">filter_list</span>
        <span class="font-label text-xs uppercase tracking-widest"
          >Sort by Recency</span
        >
      </div>
    </div>
    <!-- Bento Grid Projects -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
      <!-- Main Featured Card: Orbit of Destiny -->
      <div
        class="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-high hover:bg-surface-bright transition-all duration-500"
      >
        <div class="p-8 h-full flex flex-col">
          <div class="flex justify-between items-start mb-12">
            <div>
              <h3
                class="text-3xl font-headline font-bold text-on-surface group-hover:text-primary transition-colors mb-2"
              >
                Orbit of Destiny
              </h3>
              <p class="text-on-surface-variant font-body max-w-md">
                An advanced orbital mechanics simulator visualizing celestial
                trajectories with real-time physics and high-fidelity rendering.
              </p>
            </div>
            <div class="flex gap-2">
              <a
                class="p-3 bg-surface-container-highest rounded-full hover:text-primary transition-colors"
                href="#"
                title="GitHub"
              >
                <span class="material-symbols-outlined">code</span>
              </a>
              <a
                class="p-3 bg-surface-container-highest rounded-full hover:text-primary transition-colors"
                href="#"
                title="Live Demo"
              >
                <span class="material-symbols-outlined">open_in_new</span>
              </a>
            </div>
          </div>
          <!-- Visual Placeholder -->
          <div
            class="mt-auto relative w-full h-64 rounded-lg overflow-hidden bg-surface-container"
          >
            <img
              alt="Nebula and orbital paths"
              class="w-full h-full object-cover opacity-60 mix-blend-screen group-hover:scale-110 transition-transform duration-700"
              data-alt="Deep space nebula with glowing cyan orbital rings"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYYpPJF8xBWv3NXYq4jSBry2cdpt4FQ9hmcwlei4xx28Ghp2-Il9mxsC9dA_ckCKPUY-YvTVtw0yvcwxHyIWvRx5CQ8EIcCgtcDnFbmJ5SlMFVWnjoa7jmuwnVpgsPjdN5X65p3LPHx-2dK_49zK6-qgJvlxehi4R3dzgns6LK7lTK3RRYpST8oWRltMnK01V7Q2m0sWV_FMUi5yHpb0C1_ENEDH8EYhN0kHcW2XVn3MaVX1Frq2bTyITpw1uMS4hoWBrQGHvTgVtS"
            />
            <div
              class="absolute inset-0 bg-linear-to-t from-surface-container-high via-transparent to-transparent"
            ></div>
          </div>
          <div class="flex flex-wrap gap-2 mt-8">
            <span
              class="chip-border px-3 py-1 bg-surface-container-highest font-label text-xs text-on-surface-variant"
              >Vue 3</span
            >
            <span
              class="chip-border px-3 py-1 bg-surface-container-highest font-label text-xs text-on-surface-variant"
              >Three.js</span
            >
            <span
              class="chip-border px-3 py-1 bg-surface-container-highest font-label text-xs text-on-surface-variant"
              >Tailwind</span
            >
            <span
              class="chip-border px-3 py-1 bg-surface-container-highest font-label text-xs text-on-surface-variant"
              >Vite</span
            >
          </div>
        </div>
      </div>
      <!-- Side Card: Portfolio v1 -->
      <div
        class="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-high hover:bg-surface-bright transition-all duration-500"
      >
        <div class="p-8 h-full flex flex-col">
          <div class="mb-8">
            <span
              class="font-label text-[10px] uppercase tracking-widest text-primary/60 mb-2 block"
              >Archive_2023</span
            >
            <h3 class="text-2xl font-headline font-bold text-on-surface mb-2">
              Portfolio v1
            </h3>
            <p class="text-on-surface-variant font-body text-sm">
              The first iteration of my digital garden, focusing on minimal
              aesthetics and fast content delivery.
            </p>
          </div>
          <div class="mt-auto">
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                class="chip-border px-3 py-1 bg-surface-container-highest font-label text-xs text-on-surface-variant"
                >React</span
              >
              <span
                class="chip-border px-3 py-1 bg-surface-container-highest font-label text-xs text-on-surface-variant"
                >Framer Motion</span
              >
            </div>
            <a
              class="inline-flex items-center gap-2 font-label text-sm text-primary hover:gap-4 transition-all"
              href="#"
            >
              View Case Study
              <span class="material-symbols-outlined text-sm"
                >arrow_forward</span
              >
            </a>
          </div>
        </div>
      </div>
      <!-- More Bento Items -->
      <div
        class="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low transition-all duration-500"
      >
        <div
          class="p-8 h-full border-l-2 border-transparent group-hover:border-primary/50 flex flex-col"
        >
          <span class="material-symbols-outlined text-primary mb-4 text-3xl"
            >terminal</span
          >
          <h3 class="text-xl font-headline font-bold text-on-surface mb-3">
            System Monitor CLI
          </h3>
          <p class="text-on-surface-variant font-body text-sm mb-6">
            A Rust-based CLI tool for real-time hardware telemetry and process
            management.
          </p>
          <div class="mt-auto flex gap-2">
            <span
              class="chip-border px-3 py-1 bg-surface-container-highest font-label text-xs text-on-surface-variant"
              >Rust</span
            >
            <span
              class="chip-border px-3 py-1 bg-surface-container-highest font-label text-xs text-on-surface-variant"
              >Cargo</span
            >
          </div>
        </div>
      </div>
      <div
        class="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-high hover:bg-surface-bright transition-all duration-500"
      >
        <div class="p-8 h-full flex flex-col">
          <h3 class="text-xl font-headline font-bold text-on-surface mb-3">
            Neural Synth
          </h3>
          <p class="text-on-surface-variant font-body text-sm mb-6">
            Generative audio engine powered by transformer models for adaptive
            game soundtracks.
          </p>
          <div class="mt-auto">
            <div class="flex gap-3">
              <span
                class="chip-border px-3 py-1 bg-surface-container-highest font-label text-xs text-on-surface-variant"
                >Python</span
              >
              <span
                class="chip-border px-3 py-1 bg-surface-container-highest font-label text-xs text-on-surface-variant"
                >PyTorch</span
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-high hover:bg-surface-bright transition-all duration-500"
      >
        <div class="p-8 h-full flex flex-col">
          <h3 class="text-xl font-headline font-bold text-on-surface mb-3">
            Void Engine
          </h3>
          <p class="text-on-surface-variant font-body text-sm mb-6">
            Lightweight 2D rendering engine built from scratch with WebGL 2.0
            primitives.
          </p>
          <div class="mt-auto flex justify-between items-center">
            <span
              class="chip-border px-3 py-1 bg-surface-container-highest font-label text-xs text-on-surface-variant"
              >TypeScript</span
            >
            <a
              class="text-on-surface-variant hover:text-primary transition-colors"
              href="#"
            >
              <span class="material-symbols-outlined">hub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.material-symbols-outlined {
  font-variation-settings:
    "FILL" 0,
    "wght" 400,
    "GRAD" 0,
    "opsz" 24;
}
.glass-panel {
  background: rgba(25, 37, 64, 0.6);
  backdrop-filter: blur(20px);
}
.chip-border {
  border-left: 2px solid #81ecff;
}
</style>
