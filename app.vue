<template>
  <div id="canvas"></div>
  <div id="app-container">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "greenalpaca.xyz",
  meta: [
    { property: "name", content: "greenalpaca.xyz" },
    { property: "description", content: "company approved supply."},
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://greenalpaca.xyz/indexEmbed/tt1" },
    { property: "og:title", content: "greenalpaca.xyz" },
    { property: "og:description", content: "company approved supply." },
    { property: "og:image", content: "https://greenalpaca.xyz/resources/deco/png/campaign.png" },
    { property: "og:image:alt", content: "company approved supply." },
    { property: "og:image:type", content: "image/png" },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" }, 
    { property: "og:site_name", content: "greenalpaca.xyz" },
    { property: "twitter:image:src", content: "https://greenalpaca.xyz/resources/deco/png/campaign.png"},
    { property: "twitter:size", content: "@greenalpaca"},
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:title", content: "greenalpaca.xyz" },
    { property: "twitter:description", content: "company approved supply." },
  ]
});
</script>

<style scoped>
#app-container {
  background-color: var(--background-primary);
  width: 70vw;
  height: 100vh;
  position: absolute;
  left: 15vw;
  opacity: 1;
}

#canvas {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--canvas-primary);
  z-index: -4;
}

@media (max-width: 768px) {
  #app-container {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
  }
  #canvas {
    display: none;
  }
}
</style>