<script setup>
import IconDowload from './icons/IconDowload.vue';
import IconHtml from './icons/IconHtml.vue';
import IconCss from './icons/IconCss.vue';
import IconJs from './icons/IconJs.vue';
import IconVue from './icons/IconVue.vue';
import IconReact from './icons/IconReact.vue';
import IconTailwind from './icons/IconTailwind.vue';
import IconUnity from './icons/IconUnity.vue';
import IconCsharp from './icons/IconCsharp.vue';
import IconGithub from './icons/IconGithub.vue';
const downloadFile = () => {
    const link = document.createElement('a');
    link.href = '/downloads/Thikamphon_Resume.pdf';
    link.download = 'Thikamphon_Resume.pdf';
    link.click();
}
</script>
<template>
    <section class="mx-10 pb-14">
        <h1 class="font-bold text-2xl mb-14">
            About me
        </h1>
        <div>
            <div class="flex gap-14">
                <div class="avatar w-28 h-28 justify-center sr-only md:not-sr-only">
                    <div class="w-48 rounded-full">
                        <img
                            src="https://www.jobbkk.com/upload/jobseeker/01/121/4B7121/images/4944161.jpg?v=1717588358?v=1717588358">
                    </div>
                </div>
                <div class="card w-full h-fit bg-neutral text-neutral-content">
                    <div class="card-body grid grid-cols-1 gap-8 drop-shadow-2xl">
                        <div class="grid gap-y-4">
                            <p>Hello! My name is Thikamporn Rabaibpho.
                                I am an enthusiastic person. and are very interested in website development.
                            </p>
                            <button @click="downloadFile"
                                class="max-w-48 btn bg-amber-400 text-slate-800 font-bold border-0">
                                <IconDowload class="w-4 fill-slate-800 " />
                                RESUME
                            </button>
                        </div>
                        <div>
                            <h2 class="font-bold text-xl">Tools</h2>
                            <div class="flex flex-wrap gap-2 items-center justify-items-center">
                                <IconHtml class="icon" />
                                <IconCss class="icon" />
                                <IconJs class="icon" />
                                <IconCsharp class="icon" />
                                <IconVue class="icon" />
                                <IconReact class="icon" />
                                <IconUnity class="icon" />
                                <IconTailwind class="icon" />
                                <IconGithub class="icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Project />
</template>

<style scoped>
.icon {
    @apply min-w-10 max-h-10 fill-slate-100 hover:opacity-90
}
</style>
