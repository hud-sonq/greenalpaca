// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
      ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate']}],
  ],
  imports: {
      dirs: ['stores'],
  },
  ssr: false,
  runtimeConfig: {
      mongoURI: '',
      discordWebhook: '',
      authSecret: '',
      public: {
          apiBase: '',
      }
  },
  css: ['~/assets/global.css'],
  app: {
      baseURL: '/'
  },
  nitro: {
    plugins: ["~/server/index.ts"],
  }
})
