<template>
  <div id="detailed-product-view">
    <div class="go-back-button" @click="$emit('closeClicked')" >
      <img src="/resources/icons/arrow-left.svg" alt="go back"/>
      <p style="padding-left: 4px; color: var(--alpaca-green);">back to products</p>
    </div>
    <div class="all-photos-vertically-container">
      <div v-for="image in product.images" :key="image">
        <a :href="props.product.imageDir + '/'  + image" target="_blank"><img class="product-img" :src="product.imageDir + '/' + image" alt="product image"></a>
      </div>
      <div class="bottom-view-detail">
        <div class="detail-text">
          <h1>{{product.brand}}, {{ product.name }}</h1>
          <div class="add-to-cart-price-and-button" @click="addToCart(product)">
            <div><h1>${{ product.price }}</h1></div>
            <div class="atc-button">
              <img src="/resources/icons/plus.svg">
            </div>
          </div>
          <p>{{ product.description }}</p>
          <p>Size: <span style="font-style: italic;">{{ product.size }}</span> | Color: <span style="font-style: italic;">{{ product.color }}</span> | Condition: <span style="font-style: italic;">{{  product.condition }}</span></p>
          <p style="font-style: italic;">Manufactured in {{  product.country }}</p>
          <!-- <p>Color: {{ product.color }}</p>
          <p>Material: {{ product.material }}</p>
          <p>Condition: {{ product.condition }}</p>
          <p>Manufactured in: {{ product.country }}</p> -->
        </div>
      </div>
    </div>
    <div class="right-view-detail">
      <div class="detail-text">
        <h1>{{product.brand}}, {{ product.name }}</h1>
        <p>{{ product.description }}</p>
        <p>Size: <span style="font-style: italic;">{{ product.size }}</span> | Color: <span style="font-style: italic;">{{ product.color }}</span> | Condition: <span style="font-style: italic;">{{  product.condition }}</span></p>
        <p style="font-style: italic;">Manufactured in {{  product.country }}</p>
        <div class="add-to-cart-price-and-button" @click="addToCart(product)">
          <div><h1>${{ product.price }}</h1></div>
          <div class="atc-button"><img src="/resources/icons/plus.svg"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ProductDocument } from '~/server/models/Product.model';
import 'swiper/swiper-bundle.css';

const cart = useCartStore();
const emits = defineEmits(['closeClicked']);


const props = defineProps<{
  product: any;
}>();
const singlePhotoDir = props.product.imageDir + "/" + props.product.images[0];

function addToCart(product: ProductDocument) {
  if(product._id) {
    cart.addToCart(product);
    console.log('added to cart from detail', cart.cartItems);
  }
}

onMounted(() => {
  console.log(props.product);
});

</script>

<style scoped>
span {
  font-style: italic;
}

.add-to-cart-price-and-button {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  border-top: 2px solid var(--alpaca-green);
  width: 100%;
}

.atc-button {
  pointer-events: all;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border: 4px solid var(--alpaca-green);
  border-radius: 50%;
  opacity: 1;
}

.atc-button:hover {
  background-color: var(--alpaca-green);
  transition: background-color .3s ease-in-out;
}

.atc-button:hover img {
  filter: invert(100%);
  transition: filter .3s ease-in-out;
}

.swiper {
  width: 256px;
  height: 256px;
}

.detail-text {
  padding: 4px;
  border: 4px solid var(--alpaca-green);
  box-shadow: 6px 6px var(--canvas-primary);
}

.right-view-detail {
  position: fixed;
  pointer-events: none;
  top: 74px;
  right: calc(15vw + 72px);
  width: 256px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  padding-bottom: 12px;
  overflow-y: hidden;
}

.bottom-view-detail {
  display: none;
  width: 256px;
  height: 256px;
}

#detailed-product-view {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% - 72px);
  overflow-y: auto;
}

.go-back-button {
  z-index: 3;
  background-color: white;
  position: fixed;
  top: 74px;
  left: calc(15vw + 76px);
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

.all-photos-vertically-container {
  position: absolute;
  top: 74px;
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  margin-left: 12px;
  margin-top: 12px;
  padding-bottom: 256px;
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

.product-img {
  width: 512px;
  height: 512px;
  object-fit: contain
  
}

@media(max-width: 768px) {
  .all-container {
    width: calc(100% - 74px);
  }

  .product-img {
    width: 256px;
    height: 256px;
  }

  .go-back-button {
    left: 76px;
  }

}

@media(max-width: 1111px) {
  .all-photos-vertically-container {
    padding-bottom: calc(512px + 124px);
  }
  .right-view-detail {
    display: none;
  }
  .bottom-view-detail {
    height: fit-content;
    display: flex;
    position: absolute;
    bottom: 0;
    right: 0;
    overflow: scroll;
  }
}
</style>