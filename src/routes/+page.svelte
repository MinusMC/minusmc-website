<script>
  import "../app.pcss";
  import { Heading, Hr, Img } from "flowbite-svelte";
  import { HeroHeader, FeatureDefault, FeatureItem } from "flowbite-svelte-blocks";
  import { Section, Cta } from 'flowbite-svelte-blocks';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import { base } from '$app/paths';
</script>

<main class="animate-fade-up">
  <HeroHeader class="hero-header-container mx-auto my-8">
    <Heading tag="h1" class="hero-heading">
      A developer team from Vietnam - <span class="highlighted-text">MinusMC</span>
    </Heading>
    <p class="hero-description">
      MinusMC is a developer team from Vietnam that develops some products such as MinusBounce, LiddellCord, and MinusMC Anticheat Test.
    </p>
  </HeroHeader>

  <Hr classHr="divider"/>

  <HeroHeader class="products-section px-8 md:px-12 mb-20">
    <Heading tag="h2" class="section-heading">
      Our products
    </Heading>

    <div class="product-grid">
      <div class="product-card">
        <Img src="{base}/minusbounce.png" class="product-image" alt="MinusBounce" />
        <div class="product-info">
          <Heading tag="h3" class="product-title">MinusBounce</Heading>
          <p class="product-description">
            A free and open source Forge hacked client for Minecraft 1.8.9, bypass many anticheats such as Grim, Matrix, Intave and Vulcan.
          </p>
        </div>
      </div>

      <div class="product-card">
        <Img src="{base}/liddellcord.png" class="product-image" alt="Liddell Việt" />
        <div class="product-info">
          <Heading tag="h3" class="product-title">Liddell Việt</Heading>
          <p class="product-description">
            A store that sells unbanned Minecraft accounts for Vietnamese cheat community.
          </p>
        </div>
      </div>
    </div>
  </HeroHeader>
</main>
