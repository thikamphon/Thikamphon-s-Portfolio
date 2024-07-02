<script setup>
import TypingText from '@/components/TypingText.vue';

const downloadFile = () => {
    const link = document.createElement('a');
    link.href = '/downloads/Thikamphon_Resume.pdf';
    link.download = 'Thikamphon_Resume.pdf';
    link.click();
}
</script>
<template>
    <!-- about me -->
    <section class="w-full flex flex-col gap-y-8 items-center px-4">
        <div class="hero max-w-screen-lg mt-8">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://www.jobbkk.com/upload/jobseeker/01/121/4B7121/images/4944161.jpg?v=1717588358?v=1717588358"
                    class="max-w-sm rounded-full shadow-2xl" />
                <div class="card my-8 min-h-80 bg-neutral text-neutral-content shadow-2xl  lg:mx-0">
                    <div class="card-body">
                        <h2
                            class="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
                            Hi, I'm Thikamphon Rabaibpho.
                        </h2>
                        <TypingText class="text-violet-500 text-2xl md:text-4xl font-bold"
                            text="Frontend Development" />
                        <p class="py-6 md:text-lg">
                            I graduated from King Mongkut's University of Technology Thonburi (KMUTT) with a branch in
                            Media
                            Technology. My passion lies in game development, and I have developed strong skills in
                            coding for
                            games,
                            web development, and some design.

                            I am driven by the desire to bring ideas to life and make a meaningful impact in the digital
                            world.
                            Thank you for visiting my portfolio, and I look forward to connecting with you!
                        </p>
                        <button @click="downloadFile" class="btn hover bg-violet-500 text-white w-fit px-8">Check
                            Resume</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
