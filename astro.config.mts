import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sectionize from "@hbsnow/rehype-sectionize";
import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.rockthejvm.com",
  integrations: [
    icon({
      include: {
        "fa6-brands": [
          "facebook",
          "github",
          "linkedin",
          "x-twitter",
          "youtube",
        ],
        // Include all `uis` icons
        "fa6-solid": ["rss"],
      },
    }),
    markdoc(),
    mdx(),
    tailwind(),
    react(),
    sitemap(),
  ],
  markdown: {
    rehypePlugins: [sectionize],
  },
});
