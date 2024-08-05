import { defineConfig } from "astro/config";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sectionize from "@hbsnow/rehype-sectionize";
import tailwind from "@astrojs/tailwind";
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
        heroicons: ["computer-desktop", "moon", "sun"],
      },
    }),
    mdx(),
    tailwind({
      applyBaseStyles: false,
      nesting: true,
    }),
    react(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [sectionize],
    shikiConfig: {
      themes: {
        light: "github-light-default",
        dark: "github-dark-default",
      },
    },
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
