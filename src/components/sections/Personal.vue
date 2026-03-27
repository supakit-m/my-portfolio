<template>
  <div class="">
    <header class="">
      <h2 class="text-4xl font-bold mb-4">
        My <span class="text-primary">Personal</span>
      </h2>
      <!-- <p class="text-secondary max-w-xl my-4">
        I am a Computer Engineering graduate with a passion for transforming
        logical structures into practical tools.
      </p>
      <p class="text-secondary max-w-xl my-4">
        My journey started with a fascination for how back-end systems power the
        user experience.
      </p>
      <p class="text-secondary max-w-xl my-4">
        I specialize in rapid learning and systems architecture, with a focus on
        creating efficient database management and scalable solutions.
      </p>
      <p class="text-secondary max-w-xl my-4">
        My goal is to bridge the gap between advanced technology and daily
        lifestyle through high-quality software.
      </p> -->
    </header>

    <!-- Bento Grid Section -->
    <section class="">
      <div class="bento-grid mx-auto px-8 pt-8">
        <!-- Large Intro Card -->
        <div
          class="col-span-4 md:col-span-2 row-span-2 p-8 rounded-xl bg-surface-container-high flex flex-col justify-between group hover:bg-surface-bright transition-all"
        >
          <div class="space-y-4">
            <span class="material-symbols-outlined text-primary text-3xl"
              >terminal</span
            >
            <h3
              class="font-headline text-3xl font-bold group-hover:text-primary transition-colors"
            >
              Digital Architect
            </h3>
            <p class="text-on-surface-variant leading-relaxed">
              I am a Computer Engineering graduate driven by the challenge of
              complex backend logic and high-end digital aesthetics. My approach
              blends technical rigor with a deep understanding of user flow.
            </p>
          </div>
          <div class="flex flex-wrap gap-2 mt-6">
            <span
              class="px-3 py-1 rounded bg-surface-container-highest border-l-2 border-primary font-label text-xs"
              >GO</span
            >
            <span
              class="px-3 py-1 rounded bg-surface-container-highest border-l-2 border-primary font-label text-xs"
              >PYTHON</span
            >
            <span
              class="px-3 py-1 rounded bg-surface-container-highest border-l-2 border-primary font-label text-xs"
              >TYPESCRIPT</span
            >
            <span
              class="px-3 py-1 rounded bg-surface-container-highest border-l-2 border-primary font-label text-xs"
              >RUST</span
            >
          </div>
        </div>
        <!-- Education/GPA Card -->
        <div
          class="col-span-4 md:col-span-1 p-8 rounded-xl bg-surface-container-high flex flex-col justify-center items-center text-center group hover:bg-surface-bright transition-all"
        >
          <span
            class="font-label text-xs text-primary uppercase tracking-widest mb-2"
            >Academic Excellence</span
          >
          <div class="font-headline text-6xl font-black text-on-surface">
            3.45
          </div>
          <span
            class="font-label text-xs text-on-surface-variant mt-2 uppercase"
            >Cumulative GPA</span
          >
        </div>
        <!-- GitHub Card (Simulated) -->
        <div
          class="col-span-4 md:col-span-1 p-8 rounded-xl bg-surface-container-high flex flex-col justify-between group hover:bg-surface-bright transition-all overflow-hidden relative"
        >
          <div class="relative z-10">
            <span class="material-symbols-outlined text-primary text-2xl"
              >code_blocks</span
            >
            <h4
              class="font-label text-sm font-bold mt-4 uppercase tracking-widest"
            >
              Git Metrics
            </h4>
            <div class="mt-4 font-headline text-2xl font-bold">1.2k+</div>
            <p class="font-label text-[10px] text-on-surface-variant uppercase">
              Commits in 2024
            </p>
          </div>
          <!-- Abstract visual element -->
          <div class="absolute -right-4 -bottom-4 opacity-10">
            <span class="material-symbols-outlined text-9xl">hub</span>
          </div>
        </div>
        <!-- Engineering Focus Card -->
        <div
          class="col-span-4 md:col-span-2 p-8 rounded-xl bg-surface-container-low border border-outline-variant/10 flex items-center gap-8 group hover:bg-surface-container-high transition-all"
        >
          <div
            class="flex-shrink-0 w-24 h-24 rounded-lg bg-surface-container-highest flex items-center justify-center"
          >
            <span class="material-symbols-outlined text-primary text-4xl"
              >memory</span
            >
          </div>
          <div>
            <h4 class="font-headline text-xl font-bold">
              Computer Engineering
            </h4>
            <p class="text-on-surface-variant text-sm mt-1">
              Specializing in distributed systems and low-latency API
              architectures.
            </p>
          </div>
        </div>
        <!-- Location/Contact Minimalist Card -->
        <div
          class="col-span-4 md:col-span-2 p-8 rounded-xl glass-panel flex justify-between items-center group"
        >
          <div class="space-y-1">
            <span
              class="font-label text-[10px] text-primary uppercase tracking-widest"
              >Based in</span
            >
            <h4 class="font-headline text-2xl font-bold tracking-tight">
              BANGKOK, THAILAND
            </h4>
          </div>
          <div class="flex gap-4">
            <a
              class="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
              href="#"
            >
              <span class="material-symbols-outlined text-xl"
                >alternate_email</span
              >
            </a>
            <a
              class="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all"
              href="#"
            >
              <span class="material-symbols-outlined text-xl">share</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
.material-symbols-outlined {
  font-variation-settings:
    "FILL" 0,
    "wght" 300,
    "GRAD" 0,
    "opsz" 24;
}
.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(160px, auto);
  gap: 1.5rem;
}
.glass-panel {
  background: rgba(25, 37, 64, 0.6);
  backdrop-filter: blur(20px);
}
.grid-bg {
  background-image:
    linear-gradient(to right, #141f38 1px, transparent 1px),
    linear-gradient(to bottom, #141f38 1px, transparent 1px);
  background-size: 4rem 4rem;
}
</style>
การเปลี่ยนโครงสร้างเชิงตรรกะให้กลายเป็นเครื่องมือที่ใช้งานได้จริง
เป้าหมายของผมคือการเชื่อมโยงช่องว่างระหว่างเทคโนโลยีขั้นสูงกับวิถีชีวิตประจำวัน
สนใจ การวางโครงสร้างระบบ (Systems Architecture)
การสร้างโซลูชันที่รองรับการขยายตัวได้ (Scalable Solutions)
