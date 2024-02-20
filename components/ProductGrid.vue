<template>
  <div id="detailed-view-container" ref="detailContainer" class="">
    <DetailedProductView v-if="showDetail" @closeClicked="showDetail = false" :product="localProduct"/>
  </div>
  <div id="products-container" v-if="!showDetail">
    <div class="title-and-toggled-filter" v-if="!isLoading">
      <div class="grid-title">
        <h2>{{ categoryTitle }}</h2>
      </div>
      <div class="toggled-filter" >
        <p>{{ filterTitle }}</p>
      </div>
    </div>
    <div id="product-grid" v-if="!isLoading">
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
let detailContainer = ref<HTMLElement | null>(null);

let defaultFetchUrl = 'all'; // we need to consolidate APIs and remove this conention

const isLoading = ref(false);
const showDetail = ref(false);

let categoryTitle = ref('');
let filterTitle = ref('');

const props = defineProps<{
  filterKind: any;
  filterThatWasClicked: any;
  categoryToDisplay: string;
}>();

const handleProductClicked = (product: ProductDocument) => {
  showDetail.value = true;
  detailContainer.value?.classList.add('active');
  localProduct = product;
}

let state = reactive({
  fetchUrl: `/api/products/${props.categoryToDisplay || defaultFetchUrl}`,
  data: [] as ProductDocument[],
});

watch(() => props.categoryToDisplay, async (newVal) => {
  try {
    isLoading.value = true;
    if (showDetail) {
      showDetail.value = false;
    }
    state.fetchUrl = `/api/products/${newVal}`;
    const { data: newData } = await useFetch<ProductDocument[]>(state.fetchUrl);
    state.data = newData.value as ProductDocument[];
    categoryTitle.value = newVal;
    filterTitle.value = '';
  } catch (err) {
    console.log('error in ProductGrid category watch: ', err);
  } finally {
    setTimeout(() => {
      isLoading.value = false;
    }, 750);
  }
});

watch(() => props.filterThatWasClicked, async (newVal) => {
  try {
    isLoading.value = true;
    if (showDetail) {
      showDetail.value = false;
    }
    if (props.filterKind === 'subcategory') {
      state.fetchUrl = `/api/products/custom/subcategory?filter=${newVal}`;
      const { data: newData } = await useFetch<ProductDocument[]>(state.fetchUrl);
      state.data = newData.value as ProductDocument[];
      filterTitle.value = newVal;
      categoryTitle.value = 'custom: ';
    } else if (props.filterKind === 'brand') {
      state.fetchUrl = `/api/products/custom/brand?filter=${newVal}`;
      const { data: newData } = await useFetch<ProductDocument[]>(state.fetchUrl);
      state.data = newData.value as ProductDocument[];
      filterTitle.value = newVal;
      categoryTitle.value = 'custom: ';
    }
  } catch (err) {
    console.log('error in ProductGrid filter watch: ', err);
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
    categoryTitle.value = 'all';
    filterTitle.value = '';
  } catch (err) {
    console.log('error on ProductGrid onBeforeMount: ', err);
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
  display: none;
  width: calc(100% - 74px);
  height: calc(100% - 74px);
  position: absolute;
  bottom: 0;
  right: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

#detailed-view-container.active {
  display: block;
}

.title-and-toggled-filter {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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

.toggled-filter {
  padding-left: 16px;
  font-weight: bold;
  font-style: italic;
}

#product-grid {
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