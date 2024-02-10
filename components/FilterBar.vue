<template>
  <div id="filterbar">
    <div class="logo-spot" @click="$emit('logoClicked')">
      <div class="logo">
        <img class="img" src="/resources/logos/svg/galpaca.svg" alt="logo" />
      </div>
    </div>
    <div class="filter-spot">
      <div class="filter-boxes-container">
        <div class="filter" v-for="filter in filters" :key="filter">
          <p @click="handleFilterClick(filter)">{{ filter }}</p>
        </div>
      <NuxtLink to="/checkout">
        <div class="go-to-checkout">
          <img style="width: 48px;" class="img" src="/resources/icons/checkout.svg" alt="checkout">
        </div>
      </NuxtLink>
    </div>
    <div class="filter-opened-spot" v-if="filtersOpened">
      <div class="filters-bulleted">
        <div v-for="kind in availableFilterKindsForClicked" :key="kind" class="bullet">
          <p>{{ kind }}</p>
        </div>
      </div>
    </div>
    
    </div>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(["filterClicked", "logoClicked"]);

const filters = ref(['type', 'brand', 'price', 'size']);
const filtersOpened = ref(false);
const availableFilterKindsForClicked = ref<String[]>([]);

const {data: brands} = useFetch<String[]>('/api/filters/available/brands');
const brandsAvailable = brands.value;

const {data: sizes} = useFetch<String[]>('/api/filters/available/sizes');
const sizesAvailable = sizes.value;

const {data: types} = useFetch<String[]>('/api/filters/available/subcategories');
const typesAvailable = types.value;


let state = reactive({
  filtersToggled: [] as string[],
});

async function handleFilterClick(filter: string) {
  console.log(filter);
  if (filter === 'brand') {
    console.log('in type');
    filtersOpened.value = true;
    availableFilterKindsForClicked.value = brandsAvailable;
  } else if (filter === 'size') {
    filtersOpened.value = true;
    availableFilterKindsForClicked.value = sizesAvailable;
  } else if (filter === 'type') {
    filtersOpened.value = true;
    availableFilterKindsForClicked.value = typesAvailable;
  } else {
    filtersOpened.value = false;
  }

}

function handleFilterApply(filtersToggled: string[]) {
  // emit logic for re-query
  // goes to index then to productgrid
  // emits.filterClicked(filtersToggled);
}
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
  border-left: 2px solid black;
}


.filter-opened-spot {
  background-color: white;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-left: 4px;
  z-index: 4;
  position: absolute;
  top: 72px;
  left: 74px;
  width: 144px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 2px solid black;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  max-height: 400px;
  overflow-y: scroll;
}

.filters-bulleted{
  margin-top: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
}

.bullet {
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
  width: 100%;
  border-bottom: 2px solid black;
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
  padding-top: 32px;
  padding-bottom: 32px;
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

.ticks-container {
  display: flex;
  flex-direction: column;
}

.go-to-checkout {
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 64px;
  left: calc(15vw + 2px);
  border-bottom: 2px solid var(--accent-primary);
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