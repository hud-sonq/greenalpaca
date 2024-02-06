<template>
  <div id="filterbar">
    <div class="logo-spot" @click="$emit('logoClicked')">
      <div class="logo">
        <img class="img" src="/resources/logos/svg/galpaca.svg" alt="logo" />
      </div>
    </div>
    <div class="filter-spot">
      <div class="filter-boxes-container">
        <div class="filter">
          <span>type</span>
        </div>
        <div class="filter">
          <span>brand</span>
        </div>
        <div class="filter">
          <span>price</span>
        </div>
        <div class="filter">
          <span>size</span>
        </div>
      </div>
      <NuxtLink to="/checkout">
        <div class="go-to-checkout">
          <img style="width: 48px;" class="img" src="/resources/icons/checkout.svg" alt="checkout">
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(["filterClicked", "logoClicked"]);

</script>

<style scoped>

#filterbar {
  position: absolute;
  top: 0;
  left: 0;
  width: 72px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-right: 2px solid black;
  border-left: 2px solid black;
}

.logo-spot {
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;
  cursor: pointer;
}

.logo {
  width: 68px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.img {
  width: 64px;
  height: 64px;
}

.filter-spot {
  position: absolute;
  top: 72px;
  left: 0;
  width: 72px;
  height: calc(100% - 64px - 72px);
  padding-top: 32px;
  padding-bottom: 32px;
}

.filter-boxes-container {
  width: 72px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
}

.filter {
  width: 68px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 2px solid black;
  padding-bottom: 2px;
}

.ticks-container {
  display: flex;
  flex-direction: column;
}

.go-to-checkout {
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 64px;
  border-bottom: 2px solid var(--accent-primary);
  border-top: 2px solid var(--accent-primary);
  border-right: 2px solid var(--accent-primary);
  cursor: pointer;
}




</style>