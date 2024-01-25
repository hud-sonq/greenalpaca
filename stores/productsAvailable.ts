import { defineStore } from 'pinia'

export const useMyAvailableProductsStore = defineStore({
    id: 'all-available-products',
    state: () => ({
        products: [],
    }),
    actions: {
        async fetchProducts() {
            const response = await fetch('/api/products')
            const products = await response.json()
            this.products = products
        },
    },
})
