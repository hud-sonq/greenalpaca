<template>
    <div>
      <h1>Checkout</h1>
      <div v-if="cartItems.length === 0">
        <p>No items in cart</p>
        <button @click="router.push('/')">Go home</button>
      </div>
      <div v-else>
        <div v-for="item in cartItems" :key="item._id" style="border: 1px solid red;">
          <h2>{{ item.brand }}</h2>
          <h3>{{ item.name }} | ${{ item.price }}</h3> 
        </div>
        <div>
          <h2>Total: ${{ cartTotal }}</h2>
        </div>
        <button @click="goHandlePayment">Pay for items</button>
        <button @click="clearCart">Clear cart</button>
        <button @click="router.push('/')">Go home</button>
      </div>
      
    </div>
  </template>
  
  <script lang="ts" setup>
  
  import { useCartStore } from '~/stores/cart';
  import type { ProductDocument } from '~/server/models/Product.model';
  const cart = useCartStore();
  
  const cartItems = cart.cartItems;
  const cartTotal = cart.cartTotal;
  
  const router = useRouter();
  
  let getCartItemResources;
  
  function clearCart() {
    cart.clearCart();
    location.reload();
  }
  
  function goHandlePayment() {
    console.log('paying for items');
  }

  
  onMounted(() => {
    console.log('yoyo from checkout component', cartItems, cartTotal);
  });
  
  </script>
  
  <style>
  
  </style>