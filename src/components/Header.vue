<script setup>
import IconDowload from '@/components/icons/IconDowload.vue';
import IconFacebook from '@/components/icons/IconFacebook.vue';
import IconGithub from '@/components/icons/IconGithub.vue';
import IconMail from '@/components/icons/IconMail.vue';
import IconPhone from '@/components/icons/IconPhone.vue';

const downloadFile = () => {
    const link = document.createElement('a');
    link.href = '/downloads/Thikamphon_Resume.pdf';
    link.download = 'Thikamphon_Resume.pdf';
    link.click();
}
</script>

<template>
    <div class="relative mx-4 ">
        <section class="navbar flex justify-between text-neutral-content">
            <span class="font-bold text-xl gap-0 py-0 text-slate-100">
                Thikamphon
                <div class="w-fit font-extrabold text-amber-400">
                    .
                </div>
                <span class="w-fit">RB</span>
            </span>
            <button @click="downloadFile" class="btn w-fit bg-amber-400 border-0 text-slate-800 font-bold">
                <IconDowload class="w-4" /> Resume
            </button>
        </section>
        <hr class="border-slate-600">
        <section class="grid justify-center py-16 gap-10">
            <div class="avatar justify-center">
                <div class="w-64 rounded-full">
                    <img
                        src="https://www.jobbkk.com/upload/jobseeker/01/121/4B7121/images/4944161.jpg?v=1717588358?v=1717588358">
                </div>
            </div>
            <div class="grid gap-2 text-center">
                <span class="font-semibold text-3xl">Thikamphon Rabaibpho</span>
                <!-- <span class="text-md">I'm Frontend Development</span> -->
                <div>
                    <div class="flex justify-center gap-4 sr-only md:not-sr-only">
                        <IconMail class="w-6 fill-white hoverIcon" />
                        <IconGithub class="w-6 fill-white hoverIcon" />
                        <IconFacebook class="w-6 fill-white hoverIcon" />
                        <div class="tooltip tooltip-open tooltip-bottom" data-tip="+66 92 535 3321">
                            <IconPhone class="w-6 fill-white hoverIcon " />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-2 w-fit mx-auto md:sr-only">
                        <span class="flex gap-2">
                            <IconMail class="w-6 fill-white hoverIcon" />
                            <a class="link link-hover" href="mailto:Thikamphon.pang@gmail.com"
                                target="_blank">Thikamphon.pang@gmail.com</a>
                        </span>
                        <span class="flex gap-2">
                            <IconGithub class="w-6 fill-white hoverIcon" />
                            <a class="link link-hover" href="https://github.com/thikamphon"
                                target="_blank">thikamphon</a>
                        </span>
                        <span class="flex gap-2">
                            <IconFacebook class="w-6 fill-white hoverIcon" />
                            <a class="link link-hover" href="https://www.facebook.com/profile.php?id=100007750321878"
                                target="_blank">Thikamphon Rabaibpho</a>
                        </span>
                        <span class="flex gap-2">
                            <IconPhone class="w-6 fill-white hoverIcon " />
                            +66 92 535 3321
                        </span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>