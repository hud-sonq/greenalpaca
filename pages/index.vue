<template>
  <FilterBar @logoClicked="handleLogoClicked" @filterClicked="handleFilter"/>
  <div id="right-of-filterbar">
    <NavBar @categoryClicked="handleCategoryChange"/>
    <ProductGrid :filters="filters" :categoryToDisplay="category" :checkout="checkoutClicked"/> 
  </div>
</template>

<script lang="ts" setup>
const filters = ref({});
const category = ref("");
const defaultCategory = "featured";

const checkoutClicked = ref(false);

const handleLogoClicked = () => {
  location.reload();
}

const handleFilter = (filter: any) => {
  filters.value = filter;
}

const handleCategoryChange = (newCategory: any) => {
  category.value = newCategory;
}

</script>

<style>
</style>