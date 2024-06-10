<script setup>
import IconGithub from '@/components/icons/IconGithub.vue'
import IconHtml from '@/components/icons/IconHtml.vue';
import IconCss from '@/components/icons/IconCss.vue';
import IconJs from '@/components/icons/IconJs.vue';
import IconVue from '@/components/icons/IconVue.vue';
import IconReact from '@/components/icons/IconReact.vue';
import IconTailwind from '@/components/icons/IconTailwind.vue';
import IconUnity from '@/components/icons/IconUnity.vue';
import IconCsharp from '@/components/icons/IconCsharp.vue';

const skills = [
    { name: 'html', icon: IconHtml, },
    { name: 'css', icon: IconCss, },
    { name: 'Javascript', icon: IconJs, },
    { name: 'Vue', icon: IconVue, },
    { name: 'React', icon: IconReact, },
    { name: 'Tailwind', icon: IconTailwind, },
    { name: 'C Sharp', icon: IconCsharp, },
    { name: 'Unity', icon: IconUnity, },
    { name: 'Github', icon: IconGithub, },
]
</script>

<template>
    <!-- Skills -->
    <section class="w-full flex flex-col items-center mt-28">
        <div class="relative w-full h-full flex items-center justify-center">
            <h2 class="absolute opacity-20 text-7xl font-bold mb-8">Skills</h2>
            <h2 class="text-4xl text-slate-50 font-bold mb-8">Skills</h2>
        </div>
        <div class="card min-w-sm mx-8 max-w-lg bg-neutral text-neutral-content shadow-2xl">
            <div class="card-body items-center text-center">
                <p class="italic">"Over the months, I have cultivated and refined a diverse set of skills through
                    dedicated
                    study and practical experience. Below are the key abilities I have developed."</p>
                <div class="card-actions justify-center items-center">
                    <div v-for="skill in skills"
                        class="flex flex-wrap justify-center border px-4 py-1 rounded-lg gap-4 w-fit h-full">
                        <component class="fill-slate-200 w-6 h-fit" :is="skill.icon"></component>
                        <div>{{ skill.name }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>