<template>
  <div id="detailed-view-container">
    <DetailedProductView v-if="showDetail" @closeClicked="showDetail = false" :product="localProduct"/>
  </div>
  <div id="products-container" v-if="!showDetail">
    <div class="grid-title" v-if="!isLoading">
      <h2>{{ props.categoryToDisplay || 'featured' }}</h2>
    </div>
    <div class="product" v-if="!isLoading">
      <ProductCard v-for="product in state.data" :key="product._id" :product="product" @productClicked="handleProductClicked"/>
    </div>
    <div v-else class="loading">
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><g><circle cx="3" cy="12" r="2" fill="#10763c"/><circle cx="21" cy="12" r="2" fill="#10763c"/><circle cx="12" cy="21" r="2" fill="#10763c"/><circle cx="12" cy="3" r="2" fill="#10763c"/><circle cx="5.64" cy="5.64" r="2" fill="#10763c"/><circle cx="18.36" cy="18.36" r="2" fill="#10763c"/><circle cx="5.64" cy="18.36" r="2" fill="#10763c"/><circle cx="18.36" cy="5.64" r="2" fill="#10763c"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></g></svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProductDocument } from '~/server/models/Product.model';
let localProduct = {} as ProductDocument; // the product that was clicked on, which goes into detailed view
let defaultFetchUrl = 'featured';

const isLoading = ref(false);
const showDetail = ref(false);

const props = defineProps<{
  filters: any;
  categoryToDisplay: string;
}>();

const handleProductClicked = (product: ProductDocument) => {
  showDetail.value = true;
  localProduct = product;
}



let state = reactive({
  fetchUrl: `/api/products/${props.categoryToDisplay || defaultFetchUrl}`,
  data: [] as ProductDocument[],
});

watch(() => props.categoryToDisplay, async (newVal) => {
  try {
    isLoading.value = true;
    state.fetchUrl = `/api/products/${newVal}`;
    const { data: newData } = await useFetch<ProductDocument[]>(state.fetchUrl);
    state.data = newData.value as ProductDocument[];
  } catch (err) {
    console.log(err);
  } finally {
    setTimeout(() => {
      isLoading.value = false;
    }, 750);
  }
});

onBeforeMount(async () => {
  try {
    isLoading.value = true;
    const { data: newData } = await useFetch<ProductDocument[]>(state.fetchUrl);
    state.data = newData.value as ProductDocument[];
  } catch (err) {
    console.log(err);
  } finally {
    setTimeout(() => {
      isLoading.value = false;
    }, 750);
  }
});
</script>

<style scoped>
#products-container {
  width: calc(100% - 74px);
  height: calc(100% - 74px);
  position: absolute;
  bottom: 0;
  right: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

#detailed-view-container {
  width: calc(100% - 74px);
  height: calc(100% - 74px);
  position: absolute;
  bottom: 0;
  right: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.grid-title {
  width: fit-content;
  height: 32px;
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 4px;
  margin-top: 8px;
  margin-bottom: 8px;
  padding-right: 16px;
  padding-left: 16px;
  border-right: 2px solid var(--accent-primary);
}

.product {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 7px;
  gap: 20px;
}

.loading {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>