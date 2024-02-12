<template>
  <div id="aboutus">
    <div class="split-container">
      <div class="pic">
        <img class="img" src="/resources/deco/png/hike.png">
        <p style="font-size: 10px; align-self: auto;">📍 - Sewanee Perimeter Trail, TN</p>
      </div>
      <div class="paragraph">
        <h1 class="text">company approved supply.</h1>
        <h2 class="text-logo" style="margin-left: -12px; padding-left: 12px; border-left: 4px solid var(--accent-primary); border-bottom: 4px solid var(--accent-primary); font-style: italic;">green alpaca</h2>
      </div>
      <div class="pic-location-mobile">
        <p style="font-size: 10px; align-self: auto;">📍 - Sewanee Perimeter Trail, TN</p>
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
  background: transparent;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.pic {
  display: flex;
  flex-direction: column;
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
  justify-content: flex-start;
  align-items: center;
  margin-right: 10%;
}

.pic-location-mobile {
  display: none;
  position: absolute;
  bottom: 0;
  right: 0;
  color: white;
}

@media (max-width: 768px) {
  .split-container {
    flex-direction: column;
  }

  .pic {
    display: none;
  }

  .paragraph {
    width: 50%;
    height: 50%;
  }

  .split-container {
    background-image: url('/resources/deco/png/hike.png');
    background-size: 700px 891px;
    background-repeat: no-repeat;
    background-position: 30% 100%;
  }

  .text {
    color: white;
    text-shadow: -2px 0px  var(--canvas-primary); 
  }
  .text-logo {
    color: white;
    box-shadow: -4px 2px var(--canvas-primary); 
  }

  .pic-location-mobile {
    display: flex;
  }
}

</style>