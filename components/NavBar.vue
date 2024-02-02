<template>
  <div id="navbar">
    <div class="website-title">
      <NuxtLink style="text-decoration: none; color: var(--alpaca-green)" to="/about"><h1>green alpaca</h1></NuxtLink>
    </div>
    <div class="navbar-item first" @click="$emit('categoryClicked', 'clothing')">
      <h3>clothing</h3>
    </div>
    <div class="navbar-item" @click="$emit('categoryClicked', 'shoes')">
      <h3>shoes</h3>
    </div>
    <div class="navbar-item" @click="$emit('categoryClicked', 'accessories')">
      <h3>accessories</h3>
    </div>
    <div class="navbar-item last" @click="$emit('categoryClicked', 'bags')">
      <h3>bags</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(['categoryClicked']);

</script>

<style scoped>
#navbar {
  width: calc(100% - 72px);
  height: 72px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: .1rem;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  user-select: none;
}

.website-title {
  height: 32px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-right: .3rem;
  padding-left: 1rem;
  color: var(--alpaca-green);
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

.website-title:hover {
  opacity: 0.5;
}

.navbar-item {
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid black;
  padding-right: .3rem;
  padding-left: .3rem;
  cursor: pointer;
}

.navbar-item > h3 {
  margin: 0;
  padding: 0;
  transition: opacity 0.2s ease-in-out;
}

.navbar-item:hover > h3{
  opacity: 0.5;
}

.navbar-item.first {
  border-left: 2px solid black;
}

.navbar-item.last {
  margin-right: 4px;
}

@media(max-width: 768px) {
  .website-title {
    display: none;
  }
}

</style>