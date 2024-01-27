<template>
  <div id="product-card">
    <div id="product">
      <img class="img" :src="singlePhotoDir" @click="">
    </div>
    <div id="product-info">
      <div class="product-info-item">
        <span>{{product.brand}}</span>
      </div>
      <div class="product-info-item right">
        <span>${{product.price}}</span>
      </div>
      <div class="product-info-item">
        <span>{{ product.size }}</span>
      </div>
      <div class="product-info-item right">
        <img style="max-height: 100%;" src="/resources/icons/plus.svg">
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
const singlePhotoDir = props.product.imageDir + "/" + props.product.images[0];
console.log(singlePhotoDir);
</script>

<style scoped>
#product-card {
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#product {
  width: 200px;
  height: 200px;
  border-right: 2px solid var(--accent-primary);
  border-bottom: 2px solid var(--accent-primary);
  border-top: 2px solid var(--accent-primary);
  border-left: 2px solid var(--accent-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 3px 3px var(--canvas-primary);
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
}

#product:hover {
  opacity: 0.5;
}

#product-info {
  position: relative;
  width: 100%;
  height: 48px;
  max-width: 256px;
  max-height: 48px;
  display: grid;
  grid-template-columns: auto auto;
  margin-bottom: 8px;
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
  transition: opacity 0.2s ease-in-out;
}
.product-info-item > span:hover {
  opacity: 0.4;
}
.product-info-item > img{
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
}
.product-info-item > img:hover {
  opacity: 0.4;
}

.product-info-item.right {
  justify-self: flex-end;
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* border-radius: 0.5rem; */
}

@media (max-width: 768px) {
  #product-info {
    max-width: 128px;
  }
  #product {
    width: 118px;
    height: 118px;
  }
}
</style>