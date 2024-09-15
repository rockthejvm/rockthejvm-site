/** @type {import("prettier").Config} */
export default {
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss", // MUST come last before astro-organize-imports,
    "prettier-plugin-astro-organize-imports", // MUST come last
  ],
  tailwindConfig: "../../tailwind.config.js",
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  astroAllowShorthand: true,
  // astroSkipFrontmatter: true,
};
