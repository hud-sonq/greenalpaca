<template>
  <div id="filterbar">
    <div class="logo-spot">
      <div class="logo">
        <img class="img" src="/resources/logos/svg/galpaca.svg" alt="logo" />
      </div>
    </div>
    <div class="filter-spot">
      <div class="filter-title">
        <h3 class="filter-title-text">filters</h3>
      </div>
      <div class="filter-text-container">
        <p class="filter-text">$$$</p>
      </div>
      <div class="filter-text-container">
        <p class="filter-text">size</p>
      </div>
      <div class="filter-text-container">
        <p class="filter-text">brand</p>
      </div>
      <div class="filter-text-container">
        <p class="filter-text">color</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

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
}

.logo-spot {
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid black;
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
  height: 100%;
}

.filter-title {
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.filter-title-text {
  font-weight: 10000;
}
.filter-text-container {
  cursor: pointer;
  width: 72px;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.filter-text {
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  padding: 0.5rem;
  margin-right: 6px;
  padding-left: 44px;
}

</style>