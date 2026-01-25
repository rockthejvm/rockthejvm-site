/* trunk-ignore-all(eslint) */
/** @type {import("prettier").Config} */
export default {
  plugins: [
    "prettier-plugin-organize-imports",
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss", // must be loaded second last https://github.com/tailwindlabs/prettier-plugin-tailwindcss?tab=readme-ov-file#compatibility-with-other-prettier-plugins
    "prettier-plugin-astro-organize-imports", // must be loaded last https://github.com/neoki07/prettier-plugin-astro-organize-imports#compatibility-with-other-prettier-plugins
  ],
  // General
  printWidth: 80,
  proseWrap: "never",
  // Tailwind
  tailwindStylesheet: "src/styles/global.css",
  overrides: [
    // Markdown
    {
      files: ["*.md", "*.mdx"],
      options: {
        embeddedLanguageFormatting: "off",
        proseWrap: "preserve",
      },
    },
    // Astro
    {
      files: "*.astro",
      options: {
        parser: "astro",
        astroAllowShorthand: true,
      },
    },
  ],
};
