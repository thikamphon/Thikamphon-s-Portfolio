<script setup>
import { useDataStore } from '@/stores/Data'

const dataStore = useDataStore()
</script>
<template>
    <section class="pb-14 mx-14 max-w-screen-lg">
        <div class="relative w-full h-full flex items-center justify-center mt-28">
            <h2 class="absolute opacity-20 text-7xl font-bold mb-8">Projects</h2>
            <h2 class="text-4xl text-slate-50 font-bold mb-8">Projects</h2>
        </div>
        <div class="w-fit grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 md:gap-4 md:mx-auto lg:grid-cols-3">
            <div v-for="(project, index) in dataStore.projects" :key="index"
                class="card-hover card min-w-72 max-w-96 bg-neutral shadow-lg p-2">
                <a :href="project.link" target="_blank">
                    <figure>
                        <img class="card min-h-44" :src="project.imageUrl" >
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            {{ project.title }}
                        </h2>
                        <p class="line-clamp-3">
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
.card-hover {
    @apply hover:scale-95 hover:duration-300
}
</style>