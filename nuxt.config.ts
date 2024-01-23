// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
      ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate']}],
<<<<<<< HEAD
=======
      'nuxt-server-utils',
      '@nuxt/ui',
>>>>>>> fed95b108c7613661f6c8bf81d92232955fa1f1c
  ],
  imports: {
      dirs: ['stores'],
  },
  ssr: false,
  runtimeConfig: {
      mongoURI: '',
<<<<<<< HEAD
=======
      discordWebhook: '',
      authSecret: '',
      owSecret: '',
>>>>>>> fed95b108c7613661f6c8bf81d92232955fa1f1c
      public: {
          apiBase: '',
      }
  },
  css: ['~/assets/global.css'],
  app: {
<<<<<<< HEAD
      baseURL: '/'
  },
  nitro: {
    plugins: ["~/server/index.ts"],
  }
=======
      baseURL: '/',
  },
>>>>>>> fed95b108c7613661f6c8bf81d92232955fa1f1c
})
