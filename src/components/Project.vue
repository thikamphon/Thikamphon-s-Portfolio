<script setup>
import { useProjectStore } from '@/stores/Project'

const projectsStore = useProjectStore()
</script>
<template>
    <section class="pb-14 mx-14">
        <h1 class="font-bold text-2xl mb-14">
            Projects
        </h1>
        <div class="w-fit grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 md:gap-4 md:mx-auto">
            <div v-for="(project, index) in projectsStore.projects" :key="index"
                class="card-hover card min-w-72 max-w-96 bg-neutral shadow-lg p-2 ">
                <a :href="project.link">
                    <figure>
                        <img class="card" :src="project.imageUrl">
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            {{ project.title }}
                        </h2>
                        <p>
                            {{ project.about }}
                        </p>
                        <div class="card-actions justify-end">
                            <div v-for="(tag, index) in project.tags" :key="index" class="badge badge-outline">{{ tag }}
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .card-hover{
        @apply hover:scale-95 hover:duration-300
    }
</style>