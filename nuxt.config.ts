// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate']}],
    'nuxt-server-utils',
  ],
  imports: {
    dirs: ['stores'],
  },
  ssr: false,
  runtimeConfig: {
    mongoURI: '',
    discordWebhook: '',
    discordToken: '',
    authSecret: '',
    ppClientSecret: '',
    public: {
        apiBase: '',
        ppClientId: ''
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