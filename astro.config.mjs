import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sectionize from "@hbsnow/rehype-sectionize";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./remark-reading-time.mjs";
import sitemap from "@astrojs/sitemap";

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
    mdx(),
    tailwind({
      nesting: true,
    }),
    react(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
    rehypePlugins: [sectionize],
  },
  redirects: {
    "/p/about-us": "/about",
    "/p/privacy": "/legal/privacy",
    "/p/terms": "/legal/terms",
    "/p/logo-trademarks": "/legal/trademarks",
    "/p/membership": "/memberships/personal",
    "/p/team-pack": "/memberships/team",
  },
});
