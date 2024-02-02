<template>
  <div>
    <div v-for="(item, index) in cart.cartItems" :key="item._id.$oid">
      <p>{{ item.name }} - {{ item.price }}</p>
      <button @click="removeFromCart(index)">Remove from cart</button>
    </div>
    <button @click="clearCart">Clear cart</button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useCartStore } from "~/stores/cart";

const cart = useCartStore();

const removeFromCart = (index: number) => {
  cart.removeFromCart(index);
}

const clearCart = () => {
  cart.clearCart();
}


</script>

<style>

</style>