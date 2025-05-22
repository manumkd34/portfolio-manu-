import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://manumkd34.github.io',
  // base:'PM', // Commenté pour le développement local
  trailingSlash: 'always',
  integrations: [tailwind()],
});