import { defineStore } from 'pinia';

export const useProductFiltersStore = defineStore('productFilters', {
  state: () => ({
    possibleProductSubcategories: [],
    possibleProductSizes: [],
    possibleProductBrands: [],
  }),
  getters: {
    // Optional getters can be added here for accessing or transforming state data
  },
  actions: {
    async fetchSubcategories() {
      try {
        // Replace with your logic to fetch subcategories from the database
        const subcategories = await fetchSubcategoriesFromYourDatabase(); // Example function call
        this.possibleProductSubcategories = subcategories;
      } catch (error) {
        console.error('Error fetching subcategories:', error);
        // Handle error appropriately, e.g., display an error message to the user
      }
    },
    async fetchSizes() {
      try {
        // Replace with your logic to fetch sizes from the database
        const sizes = await fetchSizesFromYourDatabase(); // Example function call
        this.possibleProductSizes = sizes;
      } catch (error) {
        console.error('Error fetching sizes:', error);
        // Handle error appropriately
      }
    },
    async fetchBrands() {
      try {
        // Replace with your logic to fetch brands from the database
        const brands = await fetchBrandsFromYourDatabase(); // Example function call
        this.possibleProductBrands = brands;
      } catch (error) {
        console.error('Error fetching brands:', error);
        // Handle error appropriately
      }
    },
  },
});
