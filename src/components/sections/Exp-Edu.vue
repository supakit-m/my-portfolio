<template>
  <section class="lg:col-span-1 space-y-16">
    <!-- Experience Section -->
    <div>
      <div class="flex items-center gap-4 mb-10">
        <span class="material-symbols-outlined text-primary text-3xl"
          >terminal</span
        >
        <h2
          class="font-headline font-bold text-3xl tracking-tight text-[#dee5ff]"
        >
          Experience
        </h2>
      </div>
      <div
        class="relative border-l-2 border-surface-container-high ml-4 pl-10 space-y-12"
      >
        <!-- Experience Item 1 -->
        <div class="relative group">
          <div
            class="absolute -left-[51px] top-1 w-5 h-5 bg-primary rounded-full shadow-[0_0_15px_#81ecff]"
          ></div>
          <div
            class="flex flex-col md:flex-row md:items-baseline justify-between mb-2"
          >
            <h3 class="font-headline font-bold text-xl text-primary">
              Backend Developer Intern
            </h3>
            <span
              class="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest"
              >2023 — PRESENT</span
            >
          </div>
          <h4
            class="font-label text-on-surface font-medium mb-4 uppercase tracking-wider"
          >
            VML Thailand
          </h4>
          <p
            class="text-on-surface-variant text-sm leading-relaxed mb-4 max-w-xl"
          >
            Architecting high-performance API services and microservices
            architecture. Optimizing database queries and integrating complex
            third-party workflows for enterprise-scale clients.
          </p>
          <div class="flex flex-wrap gap-2">
            <span
              class="bg-surface-container-highest px-3 py-1 text-[10px] font-label text-primary border-l-2 border-primary"
              >NESTJS</span
            >
            <span
              class="bg-surface-container-highest px-3 py-1 text-[10px] font-label text-primary border-l-2 border-primary"
              >FASTAPI</span
            >
            <span
              class="bg-surface-container-highest px-3 py-1 text-[10px] font-label text-primary border-l-2 border-primary"
              >DOCKER</span
            >
          </div>
        </div>
      </div>
    </div>
    <!-- Education Section -->
    <div>
      <div class="flex items-center gap-4 mb-10">
        <span class="material-symbols-outlined text-primary text-3xl"
          >school</span
        >
        <h2
          class="font-headline font-bold text-3xl tracking-tight text-[#dee5ff]"
        >
          Education
        </h2>
      </div>
      <div class="relative border-l-2 border-surface-container-high ml-4 pl-10">
        <div class="relative">
          <div
            class="absolute -left-[51px] top-1 w-5 h-5 bg-surface-container-high rounded-full border-2 border-primary"
          ></div>
          <div
            class="flex flex-col md:flex-row md:items-baseline justify-between mb-2"
          >
            <h3 class="font-headline font-bold text-xl text-[#dee5ff]">
              Bachelor of Computer Engineering
            </h3>
            <span
              class="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest"
              >Graduating 2024</span
            >
          </div>
          <h4
            class="font-label text-on-surface font-medium mb-4 uppercase tracking-wider"
          >
            Rajamangala University of Technology
          </h4>
          <p class="text-on-surface-variant text-sm leading-relaxed">
            Focused on Software Architecture, Data Structures, and Computer
            Vision. Developed research project on real-time human pose
            estimation using MediaPipe and NestJS.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- <section id="exp-edu" class="">
    <header class="">
      <h2 class="text-4xl font-bold mb-4">
        My <span class="text-primary">Experiences & Education</span>
      </h2>
    </header>

    <div class="grid md:grid-cols-2 gap-8">
      <div class="space-y-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-2 bg-bg-primary rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-primary">Education</h3>
        </div>

        <div class="relative border-l-2 border-bg-tertiary group">
          <div class="bg-bg-primary p-6 rounded-2xl border border-bg-tertiary hover:border-brand/50 transition-all">
            <h4 class="text-xl font-bold text-bg-inverse">B.Eng. in Computer Engineering</h4>
            <p class="text-brand font-medium mb-2">Rajamangala University of Technology Thanyaburi</p>
            <div class="inline-flex items-center px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-bold">
              GPA: 3.45
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div class="flex items-center gap-3 mb-4">
          <div class="p-2 bg-bg-primary rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 class="text-2xl font-bold text-primary">Experience</h3>
        </div>

        <div class="relative border-l-2 border-bg-tertiary group">
          <div class="bg-bg-primary p-6 rounded-2xl border border-bg-tertiary hover:border-brand/50 transition-all">
            <span class="text-xs font-bold uppercase tracking-wider text-alt mb-1 block">Internship</span>
            <h4 class="text-xl font-bold text-bg-inverse">Backend Developer Intern</h4>
            <p class="text-brand font-medium mb-4">VML Thailand (VML-Mirum)</p>
            
            <p class="text-muted text-sm leading-relaxed">
              Developed and maintained a <strong>Human Resources System (HRS)</strong>, managing SQL databases employees and generating performance reports.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>
