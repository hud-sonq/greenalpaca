import { defineStore } from 'pinia';
import type { ProductDocument } from '~/server/models/Product.model';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as ProductDocument[],
    cartTotal: 0,
  }),
  actions: {
    addToCart(item: ProductDocument) {
      const alreadyExists = this.cartItems.find((i) => i._id === item._id);
      if (alreadyExists) {
        // Item is already in the cart, do not add it again
        return 'Item already in cart';
      } else {
        this.cartItems.push(item);
        this.cartTotal += parseFloat(item.price);
        return 'Added to cart! Cart total: ' + this.cartTotal;
      }
    },
    removeFromCart(index: number) {
      this.cartItems.splice(index, 1);
      this.cartTotal -= parseFloat(this.cartItems[index].price);
    },
    clearCart() {
      this.cartItems = [];
    },
  },
});