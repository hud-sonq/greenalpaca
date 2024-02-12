import { defineStore } from 'pinia';

export const useProductFiltersStore = defineStore('productFilters', {
  state: () => ({
    availableSubcategories: [],
    availableBrands: [],
  }),
  getters: {
    // Optional getters can be added here for accessing or transforming state data
  },
  actions: {
    async fetchSubcategories() {
      let subcategories; // Declare the subcategories variable
      try {
        const {data: subs} = await useFetch<String[]>('/api/filters/available/subcategories');
      } catch (error) {
        console.error('Error fetching subcategories:', error);
      } finally { 
      }
    },
    async fetchBrands() {
      try {
        this.availableBrands = async () => {
          const {data: brands} = await new Promise (useFetch<String[]>('/api/filters/available/brands'));
        }
      } catch (error) {
        console.error('Error fetching brands:', error);
      }
    },
  },
});
