<template>
  <section class="lg:col-span-1 space-y-16">
    <!-- Experience -->
    <div>
      <div class="flex items-center gap-4 text-5xl font-bold text-primary text-section-shadow tracking-widest mb-8">
        <span class="material-symbols-outlined scale-150">terminal</span>
        <h2>{{ $t('sections.experience') }}</h2>
      </div>
      <div class="relative border-l-2 border-surface-container-high ml-4 pl-10 space-y-12">
        <div class="relative group">
          <div class="absolute -left-12.75 top-1 w-5 h-5 bg-primary rounded-full shadow-[0_0_15px_#81ecff]"></div>
          <div class="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
            <h3 class="font-headline font-bold text-xl text-primary">Web Developer Intern</h3>
            <span class="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest">Nov 2024 — Apr 2025</span>
          </div>
          <h4 class="font-label text-on-surface font-medium mb-4 uppercase tracking-wider">Mirum / VML Thailand</h4>
          <p class="text-on-surface-variant text-sm leading-relaxed mb-4 max-w-xl">
            ฝึกงานในตำแหน่ง Web Developer ที่ Mirum Department (VML Thailand) รับผิดชอบงานพัฒนาเว็บและ API Services ให้กับลูกค้าระดับ Enterprise
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="bg-surface-container-highest px-3 py-1 text-[10px] font-label text-primary border-l-2 border-primary">NESTJS</span>
            <span class="bg-surface-container-highest px-3 py-1 text-[10px] font-label text-primary border-l-2 border-primary">FASTAPI</span>
            <span class="bg-surface-container-highest px-3 py-1 text-[10px] font-label text-primary border-l-2 border-primary">DOCKER</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Education -->
    <div>
      <div class="flex items-center gap-4 text-5xl font-bold text-primary text-section-shadow tracking-widest mb-8">
        <span class="material-symbols-outlined scale-150">school</span>
        <h2>{{ $t('sections.education') }}</h2>
      </div>
      <div class="relative border-l-2 border-surface-container-high ml-4 pl-10">
        <div class="relative">
          <div class="absolute -left-12.75 top-1 w-5 h-5 bg-surface-container-high rounded-full border-2 border-primary"></div>
          <div class="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
            <h3 class="font-headline font-bold text-xl text-[#dee5ff]">Bachelor of Computer Engineering</h3>
            <span class="font-label text-xs font-bold text-on-surface-variant uppercase tracking-widest">Graduating 2024</span>
          </div>
          <h4 class="font-label text-on-surface font-medium mb-4 uppercase tracking-wider">Rajamangala University of Technology</h4>
          <p class="text-on-surface-variant text-sm leading-relaxed">
            Focused on Software Architecture, Data Structures, and Computer Vision. Developed research project on real-time human pose estimation using MediaPipe and NestJS.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.material-symbols-outlined {
  font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 24;
}
</style>
