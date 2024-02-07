import { defineStore } from 'pinia';
import type { ProductDocument } from '~/server/models/Product.model';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as ProductDocument[],
    cartTotal: 0,
  }),
  actions: {
    addToCart(item: ProductDocument) {
      const existingItem = this.cartItems.find(i => i.id === item.id);
      if (existingItem) {
        // Item is already in the cart, do not add it again
        return 'Item is already in the cart';
      } else {
        this.cartItems.push(item);
        this.cartTotal += parseFloat(item.price);
      }
    },
    removeFromCart(index: number) {
      this.cartItems.splice(index, 1);
    },
    clearCart() {
      this.cartItems = [];
    },
  },
});