<template>
  <section id="exp-edu" class="py-20 px-4  mx-auto">
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
  </section>
</template>