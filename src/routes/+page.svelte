<script>
  import "../app.pcss";
  import { Heading, Hr, Img } from "flowbite-svelte";
  import { HeroHeader } from "flowbite-svelte-blocks";
  import { DiscordSolid, GithubSolid } from 'flowbite-svelte-icons';
  import { base } from '$app/paths';
</script>

<main class="animate-fade-up">
  <HeroHeader class="bg-white flex flex-col min-h-96 max-w-2xl p-8 rounded-lg shadow-md mx-auto my-8">
    <div id="about"></div>
    <Heading tag="h1" class="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-700 my-8">
      A developer team from Vietnam - MinusMC
    </Heading>
    <p class="text-xl text-gray-600 text-center mb-12">
      MinusMC is a developer team from Vietnam that develops some products such as MinusBounce, LiddellCord, and MinusMC Anticheat Test.
    </p>
  </HeroHeader>

  <Hr classHr="h-px bg-gray-300 my-8"/>

  <HeroHeader class="flex flex-col p-8 md:px-12 mb-20">
    <div id="products"></div>
    <Heading tag="h2" class="text-center font-bold text-gray-800 mb-16">
      Our products
    </Heading>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:px-8">
      <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow-transform-mix hover:-translate-y-1 flex items-center p-4">
        <Img src="{base}/minusbounce.png" class="h-32 object-cover rounded-lg transition-transform transform hover:scale-105" alt="MinusBounce" />
        <div class="ml-6">
          <Heading tag="h3" class="font-bold text-gray-800 mb-2">MinusBounce</Heading>
          <p class="text-gray-700">
            A free and open source Forge hacked client for Minecraft 1.8.9, bypass many anticheats such as Grim, Matrix, Intave and Vulcan.
          </p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow-transform-mix hover:-translate-y-1 flex items-center p-4">
        <Img src="{base}/liddellcord.png" class="h-32 object-cover rounded-lg transition-transform transform hover:scale-105" alt="Liddell Việt" />
        <div class="ml-6">
          <Heading tag="h3" class="font-bold text-gray-800 mb-2">Liddell Việt</Heading>
          <p class="text-gray-700">
            A store that sells unbanned Minecraft accounts for Vietnamese cheat community.
          </p>
        </div>
      </div>
    </div>
  </HeroHeader>

  <HeroHeader class="flex flex-col p-8 md:px-12 mb-20">
    <div id="contact"></div>
    <Heading tag="h2" class="text-center font-bold text-gray-800 mb-16">
      Contact
    </Heading>

    <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 dark:text-gray-400">
      <a href="https://discord.minusbounce.lol" class="flex justify-center items-center">
        <DiscordSolid class="w-24 h-24"/>
      </a>
      <a href="https://github.com/MinusMC" class="flex justify-center items-center">
        <GithubSolid class="w-24 h-24"/>
      </a>
    </div>
  </HeroHeader>

</main>
