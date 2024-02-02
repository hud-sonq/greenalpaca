<template>
  <div id="canvas">
  </div>
  <div id="app-container">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
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
}
</style>