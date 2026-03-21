<!DOCTYPE html>

<html class="dark" lang="en">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <link href="https://fonts.googleapis.com" rel="preconnect" />
    <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect" />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&amp;family=Manrope:wght@700;800&amp;family=Space+Grotesk:wght@400;500;700&amp;display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet"
    />
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              outline: "#6d758c",
              "outline-variant": "#40485d",
              "inverse-surface": "#faf8ff",
              "primary-dim": "#00d4ec",
              "on-error-container": "#ffa8a3",
              "secondary-container": "#3c475a",
              "on-background": "#dee5ff",
              "on-primary-container": "#004d57",
              "primary-container": "#00e3fd",
              "surface-container-highest": "#192540",
              "error-container": "#9f0519",
              "secondary-fixed-dim": "#cad5ed",
              "primary-fixed-dim": "#00d4ec",
              "tertiary-fixed-dim": "#6cc3eb",
              "surface-container-lowest": "#000000",
              "surface-container": "#0f1930",
              "on-primary-fixed": "#003840",
              "primary-fixed": "#00e3fd",
              "inverse-primary": "#006976",
              "error-dim": "#d7383b",
              "on-primary": "#005762",
              "on-secondary": "#475266",
              "inverse-on-surface": "#4d556b",
              "on-tertiary-fixed": "#003041",
              primary: "#81ecff",
              "on-error": "#490006",
              "surface-dim": "#060e20",
              "on-secondary-fixed": "#354053",
              "tertiary-dim": "#6cc3eb",
              background: "#060e20",
              "on-primary-fixed-variant": "#005762",
              "on-surface": "#dee5ff",
              "tertiary-container": "#7bd1fa",
              "surface-container-high": "#141f38",
              surface: "#060e20",
              "on-tertiary-container": "#00465d",
              "on-tertiary-fixed-variant": "#004f69",
              "on-secondary-container": "#c5d1e8",
              "surface-tint": "#81ecff",
              error: "#ff716c",
              tertiary: "#9bddff",
              "on-surface-variant": "#a3aac4",
              "secondary-dim": "#cad5ed",
              "on-secondary-fixed-variant": "#515c70",
              "tertiary-fixed": "#7bd1fa",
              "secondary-fixed": "#d8e3fb",
              "surface-container-low": "#091328",
              "on-tertiary": "#004f69",
              "surface-bright": "#1f2b49",
              "surface-variant": "#192540",
              secondary: "#d8e3fb",
            },
            fontFamily: {
              headline: ["Manrope"],
              body: ["Inter"],
              label: ["Space Grotesk"],
            },
            borderRadius: {
              DEFAULT: "0.125rem",
              lg: "0.25rem",
              xl: "0.5rem",
              full: "9999px",
            },
          },
        },
      };
    </script>
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
  </head>
  <body
    class="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary-container"
  >
    <!-- TopNavBar -->
    <nav
      class="fixed top-0 w-full z-50 bg-[#060e20]/60 backdrop-blur-xl no-border tonal-shift flat no shadows"
    >
      <div
        class="flex justify-between items-center max-w-7xl mx-auto px-8 h-20"
      >
        <div
          class="text-xl font-black tracking-tighter text-[#dee5ff] uppercase"
        >
          SUPAKIT.DEV
        </div>
        <div class="hidden md:flex items-center gap-10">
          <a
            class="font-['Manrope'] font-bold tracking-tight text-sm text-[#81ecff] border-b-2 border-[#81ecff] pb-1 transition-transform scale-95 active:scale-90"
            href="#"
            >Projects</a
          >
          <a
            class="font-['Manrope'] font-bold tracking-tight text-sm text-[#dee5ff]/70 hover:text-[#dee5ff] transition-colors hover:bg-[#1f2b49]/50 hover:text-[#81ecff] transition-all duration-300 scale-95 active:scale-90"
            href="#"
            >Experience</a
          >
          <a
            class="font-['Manrope'] font-bold tracking-tight text-sm text-[#dee5ff]/70 hover:text-[#dee5ff] transition-colors hover:bg-[#1f2b49]/50 hover:text-[#81ecff] transition-all duration-300 scale-95 active:scale-90"
            href="#"
            >About</a
          >
          <a
            class="font-['Manrope'] font-bold tracking-tight text-sm text-[#dee5ff]/70 hover:text-[#dee5ff] transition-colors hover:bg-[#1f2b49]/50 hover:text-[#81ecff] transition-all duration-300 scale-95 active:scale-90"
            href="#"
            >Contact</a
          >
        </div>
        <button
          class="bg-primary-container text-on-primary-container font-label font-bold px-6 py-2 rounded-full text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all"
        >
          Resume
        </button>
      </div>
    </nav>
    <!-- Hero Section -->
    <main
      class="relative min-h-screen flex flex-col items-center justify-center pt-20 grid-bg"
    >
      <div
        class="absolute inset-0 bg-gradient-to-b from-transparent via-surface to-surface"
      ></div>
      <div class="relative z-10 max-w-7xl mx-auto px-8 text-center space-y-8">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border-l-2 border-primary"
        >
          <span
            class="font-label text-[10px] uppercase tracking-widest text-primary"
            >Status: Available for opportunities</span
          >
        </div>
        <h1
          class="font-headline text-5xl md:text-8xl font-extrabold tracking-tighter leading-none text-on-surface"
        >
          SUPAKIT MAI-NGAM: <br />
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dim"
            >Full-stack &amp; Back-end Developer</span
          >
        </h1>
        <p
          class="max-w-2xl mx-auto text-on-surface-variant text-lg md:text-xl font-body"
        >
          Architecting high-performance systems and intuitive digital
          experiences with technical precision and editorial aesthetics.
        </p>
        <div
          class="flex flex-col md:flex-row items-center justify-center gap-6 pt-8"
        >
          <button
            class="w-full md:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-primary to-primary-dim text-on-primary-container font-label font-bold uppercase tracking-widest hover:brightness-110 transition-all"
          >
            View Projects
          </button>
          <button
            class="w-full md:w-auto px-10 py-4 rounded-full border border-outline-variant hover:bg-surface-bright text-on-surface font-label font-bold uppercase tracking-widest transition-all"
          >
            Contact Me
          </button>
        </div>
      </div>
    </main>
    <!-- Bento Grid Section -->
    <section class="max-w-7xl mx-auto px-8 py-24">
      <div class="bento-grid">
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
    <!-- Footer -->
    <footer class="w-full py-12 border-t border-[#141f38] bg-[#060e20]">
      <div
        class="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto gap-6"
      >
        <div class="text-lg font-bold text-[#dee5ff]">SUPAKIT.DEV</div>
        <div class="flex gap-8">
          <a
            class="font-['Space_Grotesk'] text-[10px] uppercase tracking-widest text-[#40485d] hover:text-[#81ecff] hover:translate-y-[-2px] transition-all"
            href="#"
            >GitHub</a
          >
          <a
            class="font-['Space_Grotesk'] text-[10px] uppercase tracking-widest text-[#40485d] hover:text-[#81ecff] hover:translate-y-[-2px] transition-all"
            href="#"
            >LinkedIn</a
          >
          <a
            class="font-['Space_Grotesk'] text-[10px] uppercase tracking-widest text-[#40485d] hover:text-[#81ecff] hover:translate-y-[-2px] transition-all"
            href="#"
            >Twitter</a
          >
          <a
            class="font-['Space_Grotesk'] text-[10px] uppercase tracking-widest text-[#40485d] hover:text-[#81ecff] hover:translate-y-[-2px] transition-all"
            href="#"
            >Email</a
          >
        </div>
        <div
          class="font-['Space_Grotesk'] text-[10px] uppercase tracking-widest text-[#40485d]"
        >
          © 2024 SUPAKIT MAI-NGAM • ENGINEERED FOR DEPTH
        </div>
      </div>
    </footer>
  </body>
</html>
