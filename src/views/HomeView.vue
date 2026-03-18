<script setup>
import MainLayout from "../layouts/MainLayout.vue";
import Intro from "../components/sections/Intro.vue";
import Personal from "../components/sections/Personal.vue";
import ExpEdu from "../components/sections/Exp-Edu.vue";
import Skill from "../components/sections/Skill.vue";
import Project from "../components/sections/Project.vue";
import Contact from "../components/sections/Contact.vue";
</script>

<template>
  <MainLayout class="">
    <Intro id="intro" class=" pt-20 pb-6"/>
    <Personal id="personal" class="border-t pt-20 pb-6"/>
    <ExpEdu id="exp-edu" class="border-t pt-20 pb-6"/>
    <Skill id="skill" class="border-t pt-20 pb-6" />
    <Project id="project" class="border-t pt-20 pb-6"/>
    <Contact id="contact" class="border-t pt-20 pb-6"/>
  </MainLayout>
</template>
