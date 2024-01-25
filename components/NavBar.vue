<template>
  <div id="navbar">
    <div class="navbar-item first">
      <h3>clothing</h3>
    </div>
    <div class="navbar-item">
      <h3>shoes</h3>
    </div>
    <div class="navbar-item">
      <h3>accessories</h3>
    </div>
    <div class="navbar-item last">
      <h3>bags</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>

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

.navbar-item.first {
  border-left: 2px solid black;
}

.navbar-item.last {
  margin-right: 4px;
}

</style>