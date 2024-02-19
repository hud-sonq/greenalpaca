<template>
  <FilterBar @logoClicked="handleLogoClicked" @filterClicked="handleFilter"/>
  <div id="right-of-filterbar">
    <NavBar @categoryClicked="handleCategoryChange"/>
    <ProductGrid :filterKind="filterKind" :filterThatWasClicked="filterThatWasClicked" :categoryToDisplay="category"/>
    <div v-if="constructionNoti">
      <ConstructionNotification @emitClose="closeNoti"/>
    </div> 
  </div>
</template>

<script lang="ts" setup>
useHead({
  title: "green alpaca",
  meta: [
    { property: "og:title", content: "green alpaca" },
    { property: "og:description", content: "company approved supply." },
    { property: "og:url", content: "https://greenalpaca.xyz" },
    { property: "og:image", content: "https://greenalpaca.xyz/resources/deco/png/hike.png" }
  ]
});



const filterKind = ref("");
const filterThatWasClicked = ref("");
const category = ref("");

let constructionNoti = ref(true);
const closeNoti = () => {
  constructionNoti.value = false;
}

const handleLogoClicked = () => {
  location.reload();
}

const handleFilter = (kind: string, filter: string) => {
  filterKind.value = kind;
  filterThatWasClicked.value = filter;
}

const handleCategoryChange = (newCategory: any) => {
  category.value = newCategory;
}
</script>

<style>
</style>