<template>
  <div id="products-container">
    <div class="product">
      <ProductCard v-for="product in data" :key="product._id" :product="product"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProductDocument } from '~/server/models/Product.model';

const {data} = useFetch<ProductDocument[]>("/api/products");
console.log(data.value);
</script>

<style scoped>
#products-container {
  width: calc(100% - 72px);
  height: calc(100% - 74px);
  position: absolute;
  bottom: 0;
  right: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.product {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 7px;
  gap: 20px;
}
</style>