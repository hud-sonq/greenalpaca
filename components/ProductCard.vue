<template>
  <div id="product-card">
    <div id="product">
      <img class="img" :src="product.imageDir">
    </div>
    <div id="product-info">
      <div class="product-info-item">
        <span>{{product.brand}}</span>
      </div>
      <div class="product-info-item">
        <span>${{product.price}}</span>
      </div>
      <div class="product-info-item bottom">
        <span>{{ product.size }}</span>
      </div>
      <div class="product-info-item bottom">
        <img style="max-height: 100%;" src="/resources/icons/addtocart.svg">
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProductDocument } from '~/server/models/Product.model';
interface Props {
  product: ProductDocument;
}
const props = defineProps<Props>();
</script>

<style scoped>
#product-card {
  display: flex; 
  flex-direction: column;
}

#product {
  width: 256px;
  height: 256px;
  border-radius: 0.5rem;
  border: 1px solid var(--accent-primary);
  display: flex;
  justify-content: center;
  align-items: center;
}

#product-info {
  position: relative;
  width: 256px;
  height: 48px;
  max-width: 256px;
  max-height: 48px;
  display: grid;
  grid-template-columns: auto auto;
}

.product-info-item {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  color: var(--text-primary);
  font-size: 14px;
  max-height: 24px;
}

.product-info-item > span {
  margin: 0;
  padding: 0;
  cursor: pointer;
}
.product-info-item > span:hover {
  opacity: 0.4;
}
.product-info-item > img{
  cursor: pointer;
}
.product-info-item > img:hover {
  opacity: 0.4;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}

@media (max-width: 768px) {
  #product-info {
    max-width: 128px;
  }
  #product {
    width: 128px;
    height: 128px;
  }
}
</style>