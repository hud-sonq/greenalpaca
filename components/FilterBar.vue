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
          <div @click="showClickableFilters('type')">
            <p>type</p>
          </div>
        </div>
        <div class="filter">
          <div @click="showClickableFilters('brand')">
            <p>brand</p>
          </div>
        </div>
      </div>
      <div>
        <NuxtLink to="/checkout">
          <div class="go-to-checkout">
            <img style="width: 48px;" class="img" src="/resources/icons/checkout.svg" alt="checkout">
          </div>
        </NuxtLink>
      </div>
    </div>
    <div id="opened-filters-fixed" ref="expandableFilterWindow">
      <div class="to-be-centered">
        <div class="close-x" @click="closeFilterWindow()">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#10763c" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14zM17 8.4L13.4 12l3.6 3.6l-1.4 1.4l-3.6-3.6L8.4 17L7 15.6l3.6-3.6L7 8.4L8.4 7l3.6 3.6L15.6 7z"/></svg>
        </div>
        <div class="filters-bulleted" v-if="!isLoading">
            <div v-for="specificFilter in clickableFilters" class="bullet" :key="specificFilter.valueOf">
            <div @click="$emit('filterClicked', filterKindForEmit, specificFilter)"><p>{{ specificFilter }}</p></div>
          </div>
        </div>
        <div v-else>
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><g><circle cx="3" cy="12" r="2" fill="#10763c"/><circle cx="21" cy="12" r="2" fill="#10763c"/><circle cx="12" cy="21" r="2" fill="#10763c"/><circle cx="12" cy="3" r="2" fill="#10763c"/><circle cx="5.64" cy="5.64" r="2" fill="#10763c"/><circle cx="18.36" cy="18.36" r="2" fill="#10763c"/><circle cx="5.64" cy="18.36" r="2" fill="#10763c"/><circle cx="18.36" cy="5.64" r="2" fill="#10763c"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></g></svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(["filterClicked", "logoClicked"]);
const isLoading = ref(false);

const expandableFilterWindow = ref<HTMLElement | null>(null);
const filterWindowExpanded = ref(false);
let clickableFilters = <String[]>[];

let filterKindForEmit = ref('');

async function getBrands() {
  const {data} = useFetch('/api/filters/available/brands');
  return data;
}
async function getSubcategories() {
  const {data} = useFetch('/api/filters/available/subcategories');
  return data;
}

async function showClickableFilters(filter: string) {
  expandableFilterWindow.value?.classList.add('active');
  try {
    isLoading.value = true;
    if (filter === 'type') {
      // @ts-ignore
      clickableFilters = await getSubcategories();
      filterKindForEmit.value = 'subcategory';
    } else {
      // @ts-ignore
      clickableFilters = await getBrands();
      filterKindForEmit.value = 'brand';
    }
  } catch (err) {
    console.log('error on FilterBar showClickableFilters', err);
  } finally {
    isLoading.value = false;
  }
}

function closeFilterWindow() {
  expandableFilterWindow.value?.classList.remove('active');
  filterWindowExpanded.value = false;
}
</script>

<style scoped>

.close-x {
  position: relative;
  top: 0;
  right: -32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

#opened-filters-fixed {
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  z-index: 4;
  position: absolute;
  left: 74px;
  bottom: 0;
  width: 72px;
  height: calc(100vh - 74px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

#opened-filters-fixed.active {
  opacity: 1;
  pointer-events: all;
}

.to-be-centered {
  background: rgba(255, 255, 255, 0.7);
  height: fit-content;
  width: 99px;
  border-right: 2px solid black;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
}

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

.filters-bulleted {
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding-left: 4px;
}

.bullet {
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  width: 100%;
  cursor: pointer;
}

.bullet:hover {
  opacity: 0.5;
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
}

.filter-boxes-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
}

.filter {
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 2px solid black;
  padding-bottom: 2px;
  cursor: pointer;
}

.go-to-checkout {
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: calc(15vw + 2px);
  border-top: 2px solid var(--accent-primary);
  border-right: 2px solid var(--accent-primary);
  cursor: pointer;
}

.attributes-container p {
  margin: 0;
}

@media (max-width: 768px) {
  .go-to-checkout {
    left: 0;
  }
}


</style>