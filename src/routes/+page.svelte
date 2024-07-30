<script>
  import "../app.pcss";
  import { Heading, Hr, Img } from "flowbite-svelte";
  import { HeroHeader, FeatureDefault, FeatureItem } from "flowbite-svelte-blocks";
  
  import { Section, Cta } from 'flowbite-svelte-blocks';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';

  import { base } from '$app/paths';

</script>

<main class="animate-fade-up">
  <HeroHeader class="flex flex-col min-h-96 max-w-2xl px-8 md:px-12">
    <Heading tag="h1" class="font-semibold mt-20 mb-8 leading-relaxed text-gradient w-full">
      A developer team from Vietnam - <span class="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">MinusMC</span></Heading>
    <span class="mb-12 text-xl dark:text-gray-400 leading-relaxed">
        MinusMC is a developer team from Vietnam that develops some products such as MinusBounce, LiddellCord, and MinusMC Anticheat Test.
    </span>
  </HeroHeader>

  <Hr classHr="my-8 mx-auto"/>

  <HeroHeader class="flex flex-col px-8 md:px-12 mb-20">
    <Heading tag="h2" class="font-semibold mb-12 leading-relaxed text-gradient w-full text-center">Our products</Heading>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      <div class="max-w-full h-56 border rounded-md px-4 py-6 flex">
        <img src="{base}/minusbounce.png" class="h-36" alt="">
        <div class="ml-6">
          <Heading tag="h3" class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">MinusBounce</Heading>
          <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-400">A free and open source Forge hacked client for Minecraft 1.8.9, bypass many anticheats such as Grim, Matrix, Intave and Vulcan.</p>
        </div>
      </div>

      <div class="max-w-full h-56 border rounded-md px-6 py-6 flex">
        <img src="{base}/liddellcord.png" class="h-36" alt="">
        <div class="ml-6">
          <Heading tag="h3" class="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">Liddell Việt</Heading>
          <p class="text-lg leading-relaxed text-gray-700 dark:text-gray-400">A store that sells unbanned Minecraft accounts for Vietnamese cheat community.</p>
        </div>
      </div>

    </div>

    
  </HeroHeader>
</main>