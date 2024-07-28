import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sectionize from "@hbsnow/rehype-sectionize";
import markdoc from "@astrojs/markdoc";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://www.rockthejvm.com",
  integrations: [icon(), markdoc(), mdx(), tailwind(), react()],
  markdown: {
    rehypePlugins: [sectionize],
  },
});
