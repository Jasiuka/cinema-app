// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  supabase: {
    redirect: false,
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        moduleResolution: "node",
      },
    },
  },
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],
  modules: ["@pinia/nuxt", "nuxt-icon", "@nuxtjs/supabase"],
});
