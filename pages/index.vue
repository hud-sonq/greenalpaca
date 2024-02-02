<template>
  <FilterBar @filterClicked="handleFilter" @logoClicked="handleLogoClicked" @cartCheckoutClicked="handleCartCheckoutClicked"/>
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

const handleCartCheckoutClicked = () => {
  checkoutClicked.value = true;
}

const handleFilter = (filter: any) => {
  filters.value = { ...filters.value, ...filter };
}

const handleCategoryChange = (newCategory: any) => {
  category.value = newCategory;
}

const handleLogoClicked = () => {
  location.reload();
}
</script>

<style>
</style>