<template>
  <FilterBar />
  <div id="right-of-filterbar">
    <NavBar />
    <ProductGrid/> 
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

.right-of-filterbar {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 72px;
  width: calc(100%- 72px);
  height: 100%;
  border: 12px solid red;
}

</style>