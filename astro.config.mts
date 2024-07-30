import { defineConfig } from "astro/config";
import icon from "astro-icon";
import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sectionize from "@hbsnow/rehype-sectionize";
import tailwind from "@astrojs/tailwind";

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
    remarkPlugins: [],
    rehypePlugins: [sectionize],
  },
});
