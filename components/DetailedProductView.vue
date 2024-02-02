<template>
  <div id="detailed-product-view">
    <div class="go-back-button" @click="$emit('closeClicked')" >
      <img src="/resources/icons/arrow-left.svg" alt="go back"/>
      <p style="padding-left: 4px; color: var(--alpaca-green);">back to products</p>
    </div>
    <div class="all-container">
      <div class="product-container">
        <div class="bottom-left"></div>
        <div class="bottom-right"></div>
        <div class="top-left"></div>
        <div class="top-right"></div>
        <img :src="singlePhotoDir" alt="product" style="width: 100%; height: 100%;" />
      </div>
    </div>
  </div>
</template>
  <!-- <div class="many-texts-container">
    <div class="product-text-container">
      <div style="padding-right: 8px;"><h4>{{props.product.brand}}, {{ props.product.name }}</h4></div>
      <div style="padding-left: 8px;"><span>{{ props.product.description }}. Made in {{ props.product.country }}</span></div>
    </div>
    <div class="product-text-container">
      <div style="padding-right: 24px;"><span>Size: {{ props.product.size }}</span></div>
      <div style="padding-right: 8px;"><span>Condition: {{ props.product.condition }}</span></div>
      <div style="padding-left: 8px;"><span>Inventory: {{ props.product.inventory }}</span></div>
    </div>
    <div class="product-text-container">
      <div style="padding-right: 8px;"><span>Price: ${{ props.product.price }}</span></div>
      <div style="padding-left: 8px;"><img src="/resources/icons/plus.svg"></div>
    </div>
  </div> -->

<script lang="ts" setup>
const emits = defineEmits(['closeClicked']);

const props = defineProps<{
  product: any;
}>();
const singlePhotoDir = props.product.imageDir + "/" + props.product.images[0];

</script>

<style scoped>
span {
  font-style: italic;
}

#detailed-product-view {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 72px);
}

.go-back-button {
  position: absolute;
  top: 0;
  left: 0;
  width: 72px;
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  border-right: 2px solid var(--alpaca-green);
  border-bottom: 2px solid var(--alpaca-green);
}

.all-container {
  width: calc(100% - 74px);
  height: 512px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product-container {
  position: absolute;
  width: 512px;
  height: 512px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  border: 6px solid var(--alpaca-green);
  box-shadow: 6px 6px var(--canvas-primary);
}

.bottom-left {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 256px;
  height: 64px;
  background-color: var(--alpaca-green);
  z-index: 1;
}

.bottom-right {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 128px;
  height: 64px;
  background-color: var(--alpaca-green);
  z-index: 1;
}

.top-left {
  position: absolute;
  top: 0;
  left: 0;
  width: 128px;
  height: 64px;
  background-color: var(--alpaca-green);
  z-index: 1;
}

.top-right {
  position: absolute;
  top: 0;
  right: 0;
  width: 64px;
  height: 64px;
  background-color: var(--alpaca-green);
  z-index: 1;
}

@media(max-width: 768px) {
  .all-container {
    width: calc(100% - 74px);
  }

  .product-container {
    width: 256px;
    height: 256px;
  }

  .bottom-left {
    width: 128px;
    height: 32px;
  }

  .bottom-right {
    width: 64px;
    height: 32px;
  }

  .top-left {
    width: 64px;
    height: 32px;
  }

  .top-right {
    width: 32px;
    height: 32px;
  }
}
</style>