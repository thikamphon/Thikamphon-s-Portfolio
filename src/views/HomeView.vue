<script setup>
import Header from '@/components/Header.vue'
import AboutMe from '@/components/AboutMe.vue'
import Education from '@/components/Education.vue'
import Project from '@/components/Project.vue'

import { onMounted } from 'vue'

import { useProjectStore } from '@/stores/Project'

const projectsStore = useProjectStore()

</script>

<template>
  <div class="relative max-w-screen-lg min-w-sm mx-auto">
    <div class="max-w-screen-lg h-fit bg-slate-800 text-slate-200 m-8 rounded-3xl">
      <Header />
      <AboutMe />
      <Education />
      <Project />
    </div>
  </div>
</template>

<style>
.hoverIcon {
  @apply cursor-pointer hover:opacity-60 duration-300
}

</style>
