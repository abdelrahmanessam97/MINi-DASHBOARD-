  // https://nuxt.com/docs/api/configuration/nuxt-config
  export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    modules: ["@nuxtjs/color-mode", "@nuxt/eslint", "shadcn-nuxt", "@nuxtjs/tailwindcss"],
    colorMode: {
      preference: "system",
      fallback: "light",
      classSuffix: "",
    },
    shadcn: {
      /**
       * Prefix for all the imported component
       */
      prefix: "",
      /**
       * Directory that the component lives in.
       * @default "./components/ui"
       */
      componentDir: "./components/ui",
    },
  });
