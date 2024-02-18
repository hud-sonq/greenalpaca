<template>
  <div id="navbar">
    <div class="website-title">
      <NuxtLink style="text-decoration: none; color: var(--alpaca-green)" to="/"><h1>green alpaca</h1></NuxtLink>
    </div>
    <div class="navbar-item mobile-info">
      <NuxtLink class="link" to="/about" style="text-decoration: none; height: 26px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="black" d="M11 9h2V7h-2zm3 8v-2h-1v-4h-3v2h1v2h-1v2zM5 3h14a2 2 0 0 1 2 2v14c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H5c-.53 0-1.04-.21-1.41-.59C3.21 20.04 3 19.53 3 19V5c0-1.11.89-2 2-2m14 16V5H5v14z"/></svg>
      </NuxtLink>
    </div> 
    <div class="navbar-item" @click="$emit('categoryClicked', 'clothing')">
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
h3 {
  font-size: 16px;
}

#navbar {
  width: calc(100% - 72px);
  height: 72px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: .05rem;
  border-bottom: 2px solid black;
  border-right: 2px solid black;
  user-select: none;
}

.website-title {
  height: 32px;
  width: fit-content;
  position: absolute;
  left: 4px;
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

.link {
  transition: opacity 0.2s ease-in-out;
}

.link:hover {
  opacity: 0.15;
}

.navbar-item > h3 {
  margin: 0;
  padding: 0;
  transition: opacity 0.2s ease-in-out;
}

.navbar-item:hover > h3{
  opacity: 0.15;
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

@media(max-width: 360px) {
  h3 {
    font-size: 12px;
  }
}
</style>