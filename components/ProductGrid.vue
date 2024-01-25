<template>
  <div class="grid-container">
    <div class="grid">
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
.grid-container {
  width: calc(100% - 72px);
  height: calc(100% - 74px);
  position: absolute;
  bottom: 0;
  right: 0;
  overflow: scroll;
}

.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding-top: 8px;
}
</style>