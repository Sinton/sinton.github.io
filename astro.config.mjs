import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://www.l0101.com",
  integrations: [mdx()],
  vite: {
    resolve: {
      dedupe: ["astro"],
    },
  },
});