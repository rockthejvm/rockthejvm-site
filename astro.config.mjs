import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import site from "./src/data/site.json";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: `"https://${site.domain}"`,
  integrations: [preact(), icon()],
});
