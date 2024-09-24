// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "@nuxt/eslint",
    "@nuxthq/studio",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
  ],
  image: {
    // Optional configuration for the image module
    // Here you can configure image domains, presets, or other options if needed
  },
  // vuetify: {
  //   vuetifyOptions: {
  //     theme: {
  //       defaultTheme: "dark",
  //     },
  //   },
  // },
});