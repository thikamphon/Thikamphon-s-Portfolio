<script setup>
import { useDataStore } from '@/stores/Data'
import CandyAdventre from '@/assets/candy-adventure.png'
import { ref } from 'vue'
const dataStore = useDataStore()
const showModal = ref(false);
const closeModal = () => {
    showModal.value = false;
    video.value.pause(); // Access video element via ref
};
const handleEsc = (event) => {
    if (event.key === 'Escape' && showModal.value) {
        closeModal();
    }
};
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
                        <img class="object-cover object-top min-h-44 max-h-56 w-full rounded-xl"
                            :src="project.imageUrl">
                    </figure>
                    <div class="card-body p-4">
                        <h2 class="card-title">
                            {{ project.title }}
                        </h2>
                        <p class="line-clamp-3">
                            {{ project.about }}
                        </p>
                        <div class="card-actions justify-end">
                            <div v-for="(tag, index) in project.tags" :key="index"
                                :class="tag === 'University' ? 'badge badge-accent' : 'badge badge-outline'">{{
                                tag }}
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <button class="card-hover card min-w-72 max-w-96 bg-neutral shadow-lg p-2" onclick="my_modal_2.showModal()"
                @click="showModal">
                <figure>
                    <img class="object-cover object-top min-h-44 max-h-56 w-full rounded-xl" :src="CandyAdventre">
                </figure>
                <div class="card-body p-4">
                    <h2 class="card-title text-start">
                        Trailer: Candy Adventre-Game
                    </h2>
                    <p class="line-clamp-3 text-start">
                        The trailer all of the process used Unity and free assets in
                        Unity asset. In the project, I was
                        used for learning.
                    </p>
                    <div class="card-actions justify-end">
                        <div class="badge badge-outline">Unity</div>
                        <div class="badge badge-accent">University</div>
                    </div>
                </div>
            </button>
            <dialog id="my_modal_2" class="modal">
                <div class="modal-box">
                    <video controls>
                        <source src="../assets/videos/Game-2D-Candy.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    <div class="my-4">
                        <h1 class="font-semibold text-xl">Trailer: Candy Adventre-Game</h1>
                        <p class="line-clamp-3 text-start">
                            The trailer all of the process used Unity and free assets in
                            Unity asset. In the project, I was
                            used for learning.
                        </p>
                    </div>
                    <div class="flex justify-end mt-8"><button class="btn btn-sm">close</button>
                    </div>

                </div>
                <form method="dialog" class="modal-backdrop" @close="closeModal" @keyDown="handleEsc">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    </section>
</template>

<style scoped>
.card-hover {
    @apply hover:scale-95 hover:duration-300
}
</style>
