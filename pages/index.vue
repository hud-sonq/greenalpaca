<template>
  <FilterBar @filterClicked="handleFilter" @logoClicked="handleLogoClicked"/>
  <div id="right-of-filterbar">
    <NavBar @categoryClicked="handleCategoryChange"/>
    <ProductGrid :filters="filters" :categoryToDisplay="category"/> 
  </div>
</template>

<script lang="ts" setup>
const filters = ref({});
const category = ref("");
const defaultCategory = "featured";

const handleFilter = (filter: any) => {
  filters.value = { ...filters.value, ...filter };
}

const handleCategoryChange = (newCategory: any) => {
  category.value = newCategory;
  console.log(category.value);
}

const handleLogoClicked = () => {
  location.reload();
}
</script>

<style>
</style>