<script setup>
import MainLayout from "../layouts/MainLayout.vue";
import Intro from "../components/sections/Intro.vue";
import Personal from "../components/sections/Personal.vue";
import ExpEdu from "../components/sections/Exp-Edu.vue";
import Skill from "../components/sections/Skill.vue";
import Project from "../components/sections/Project.vue";
import Contact from "../components/sections/Contact.vue";
import MatrixRain from "../components/MatrixRain.vue";
</script>

<template>
  <MainLayout class="relative">
    <MatrixRain :fontSize="18" :speed="3" class="z-[-100] opacity-15" />
    <Intro id="intro" class="pt-20 pb-6" />
    <Personal id="personal" class="border-t pt-20 pb-6" />
    <div id="exp-edu-skill" class="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 border-t pt-20 pb-6">
      <ExpEdu id="exp-edu" class="pt-0 pb-0" />
      <Skill id="skill" class="pt-0 pb-0" />
    </div>
    <Project id="project" class="border-t pt-20 pb-6" />
    <Contact id="contact" class="border-t pt-20 pb-6" />
  </MainLayout>
</template>
