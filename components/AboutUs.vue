<template>
  <div id="aboutus">
    <div class="split-container">
      <div class="pic">
        <img class="img" src="/resources/deco/png/hike.png">
        <p style="font-size: 10px; align-self: auto;">📍 - Sewanee Perimeter Trail, TN</p>
      </div>
      <div class="paragraph">
        <div class="company-motto">
          <h1 class="text">company approved supply.</h1>
        </div>
        <div class="company-and-svg" @click="goHome">
          <h2 class="text-logo">green alpaca</h2>
          <svg id="arrow-svg" class="" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="black" d="m10.537 12l-4.24-4.246q-.141-.14-.154-.341t.153-.367q.16-.16.354-.16t.354.16l4.388 4.389q.131.13.184.267q.053.136.053.298t-.053.298q-.053.137-.184.267l-4.388 4.389q-.14.14-.341.153q-.201.012-.367-.153q-.16-.16-.16-.354t.16-.354zm6.1 0l-4.24-4.246q-.141-.14-.154-.341t.153-.367q.16-.16.354-.16t.354.16l4.388 4.389q.131.13.184.267q.053.136.053.298t-.053.298q-.053.137-.184.267l-4.388 4.389q-.14.14-.341.153q-.201.012-.367-.153q-.16-.16-.16-.354t.16-.354z"/></svg>
        </div>
      </div>
      <div class="pic-location-mobile">
        <p style="font-size: 10px; align-self: auto;">📍 - Sewanee Perimeter Trail, TN</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
function goHome() {
  router.push('/');
}

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
  box-shadow: -6px 6px var(--canvas-primary);
}

.paragraph {
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.pic-location-mobile {
  display: none;
  position: absolute;
  bottom: 0;
  right: 0;
  color: white;
}

.text-logo {
  border-left: 2px solid var(--accent-primary); 
  border-bottom: 2px solid var(--accent-primary); 
  font-style: italic;
  box-shadow: -4px 4px var(--canvas-primary); 
  padding: 4px;
  width: 129px;
}

.company-and-svg {
  cursor: pointer;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.2s ease-in-out;
}

.company-and-svg:hover {
  opacity: 0.2;
}

#arrow-svg {
  padding-bottom: 5px;
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
  }

  .pic-location-mobile {
    display: flex;
  }

  #arrow-svg {
    filter: invert(1) drop-shadow(-1px 2px var(--canvas-primary));
  }
}
</style>