import { defineStore } from 'pinia';
import type { ProductDocument } from '~/server/models/Product.model';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as ProductDocument[],
  }),
  actions: {
    addToCart(item: ProductDocument) {
      this.cartItems.push(item);
    },
    removeFromCart(index: number) {
      this.cartItems.splice(index, 1);
    },
    clearCart() {
      this.cartItems = [];
    },
  },
});