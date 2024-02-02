<template>
  <div id="aboutus">
    <div class="split-container">
      <div class="pic">
        <img class="img" src="/resources/deco/png/hike.png">
      </div>
      <div class="paragraph">
        <h1>intentional clothing, impeccable style.</h1>
        <h2 style="margin-left: -12px; padding-left: 12px; border-left: 4px solid var(--accent-primary); font-style: italic;">green alpaca™ </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
#aboutus {
  width: calc(100% - 74px);
  height: calc(100% - 74px);
  position: absolute;
  bottom: 0;
  right: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.split-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.pic {
  display: flex;
  justify-content: center;
  align-items: center;
}

.img {
  width: 70%;
  height: 70%;
  border: 8px solid var(--alpaca-green);
  box-shadow: 6px 6px var(--canvas-primary);
}

.paragraph {
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-right: 10%;
}

@media (max-width: 768px) {
  .split-container {
    flex-direction: column;
  }

  .pic {
    width: 100%;
    height: 50%;
  }

  .paragraph {
    width: 100%;
    height: 50%;
  }
}

</style>