<script>
  import "../app.pcss";
  import { Heading, Hr, Img } from "flowbite-svelte";
  import { HeroHeader } from "flowbite-svelte-blocks";
  import { DiscordSolid, GithubSolid } from 'flowbite-svelte-icons';
  import { base } from '$app/paths';

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("IP copied to clipboard!");
    }).catch(() => {
      alert("Failed to copy IP.");
    });
  };

  let xPos = 0;
  let yPos = 0;

  function handleMouseMove(event) {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;

    xPos = (clientX / innerWidth) * 100;
    yPos = (clientY / innerHeight) * 100;
  }
</script>

<head>
  <!-- Tailwind CSS CDN -->
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <style>
    @keyframes gradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }

    .gradient-animation {
      background-size: 200% 200%;
      animation: gradient 2s ease infinite;
    }
    
    .cursor-follow {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      background: radial-gradient(circle, rgba(141, 165, 201, 0.4), transparent 80%);
      background-size: 150% 150%;
      transition: background-position 0.03s ease;
      z-index: 1;
    }
    
    main {
      user-select: none; 
      -webkit-user-select: none; 
      -moz-user-select: none; 
      -ms-user-select: none; 
      -webkit-touch-callout: none; 
      position: relative;
      z-index: 2;
    }
  </style>
</head>

<div class="cursor-follow" style="background-position: {xPos}% {yPos}%;"></div>

<main class="animate-fade-up" on:mousemove={handleMouseMove}>
  <HeroHeader class="bg-white flex flex-col min-h-96 max-w-2xl p-8 rounded-lg shadow-md mx-auto my-8 animate-flip-down">
    <div id="about"></div>
    <Heading tag="h1" class="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-700 my-8 gradient-animation">
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
      <div class="bg-white rounded-lg shadow-md active:-translate-y-4 hover:shadow-lg transition-shadow-transform-mix hover:-translate-y-1 flex items-center p-4 cursor-pointer" on:click={() => window.location.href='https://minusbounce.lol'}>
        <Img src="{`${base}/minusbounce.png`}" class="h-32 object-cover rounded-lg transition-transform transform hover:scale-105" alt="MinusBounce" />
        <div class="ml-6">
          <Heading tag="h3" class="font-bold text-gray-800 mb-2">MinusBounce</Heading>
          <p class="text-gray-700">
            A free and open source Forge hacked client for Minecraft 1.8.9, bypass many anticheats such as Grim, Matrix, Intave and Vulcan.
          </p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md active:-translate-y-4 hover:shadow-lg transition-shadow-transform-mix hover:-translate-y-1 flex items-center p-4 cursor-pointer" on:click={() => window.location.href='https://alts.minusmc.xyz'}>
        <Img src="{`${base}/liddellcord.png`}" class="h-32 object-cover rounded-lg transition-transform transform hover:scale-105" alt="Liddell Việt" />
        <div class="ml-6">
          <Heading tag="h3" class="font-bold text-gray-800 mb-2">Liddell Việt</Heading>
          <p class="text-gray-700">
            A store that sells unbanned Minecraft accounts for Vietnamese cheat community.
          </p>
        </div>
      </div>

      <div class="bg-white rounded-lg shadow-md active:-translate-y-4 hover:shadow-lg transition-shadow-transform-mix hover:-translate-y-1 flex items-center p-4 cursor-pointer" on:click={() => copyToClipboard('minusbounce.lol')}>
        <Img src="{`${base}/anticheat_test.png`}" class="h-32 object-cover rounded-lg transition-transform transform hover:scale-105" alt="MinusMC AntiCheat Test" />
        <div class="ml-6">
          <Heading tag="h3" class="font-bold text-gray-800 mb-2">MinusMC AntiCheat Test</Heading>
          <p class="text-gray-700">
            A AntiCheat test server help you make many god config, not req premium account. Click to copy server IP.
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
