// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ["@storyblok/nuxt", { 
      accessToken: process.env.STORYBLOK_TOKEN,
     }],
    '@pinia/nuxt',
  ],
  hooks: {
    'vite:extendConfig': (config, { isClient, isServer }) => {
      if (isClient)
        config.resolve.alias.vue = 'vue/dist/vue.esm-bundler.js'
    },
  },
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: ';@import "@/src/assets/style/constants.scss";'
  //       }
  //     }
  //   }
  // },
  css: [
    '@/src/assets/style/main.scss',
  ],
  // // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  // plugins: ['~/plugins/highlightjs.js'],
  // /* Layout Transitions */
  // layoutTransition: {
  //   name: "fade",
  //   mode: ""
  // },
  // /* Page Transitions */
  // pageTransition: {
  //   name: "fade",
  //   mode: ""
  // }
  // layoutTransition: 'fade',
  // styleResources: {
  //   scss: [
  //     '@/src/assets/style/*.scss'
  //   ],
  // },
});
