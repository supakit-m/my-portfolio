<script setup>
import projectsData from "../../data/projects.json";
import { ref } from "vue";

const projects = ref(projectsData);
</script>

<template>
  <div class="">
    <header class="mb-3">
      <h2 class="text-4xl font-bold mb-4">
        My <span class="text-primary">Projects</span>
      </h2>
      <p class="text-secondary">
        รวบรวมโปรเจกต์ที่ผมได้พัฒนาขึ้น
        ตั้งแต่การทดลองเล่นไปจนถึงแอปพลิเคชันที่ใช้งานได้จริง
      </p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article
        v-for="project in projects"
        :key="project.id"
        class="group bg-bg-secondary border border-muted rounded-xl overflow-hidden hover:border-brand/50 transition-all duration-300 flex flex-col"
      >
        <div class="aspect-video overflow-hidden">
          <img
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div class="p-6 flex flex-col grow">
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-bg-tertiary text-secondary font-medium"
            >
              {{ tag }}
            </span>
          </div>

          <h3
            class="text-primary text-xl font-bold mb-2 group-hover:text-brand transition-colors"
          >
            {{ project.title }}
          </h3>

          <p class="text-primary text-sm leading-relaxed mb-6 grow">
            {{ project.description }}
          </p>

          <div class="flex items-center gap-4 mt-auto">
            <a
              :href="project.github"
              target="_blank"
              class="text-sm font-semibold flex items-center gap-1 hover:text-brand transition-colors"
            >
              <span>GitHub</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M15 3h6v6" />
                <path d="M10 14 21 3" />
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                />
              </svg>
            </a>
            <a
              v-if="project.demo !== '#'"
              :href="project.demo"
              target="_blank"
              class="text-sm font-semibold flex items-center gap-1 hover:text-brand transition-colors"
            >
              <span>Live Demo</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </a>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>
