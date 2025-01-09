/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: ["*.md", "*.mdx"],
      options: {
        embeddedLanguageFormatting: "off",
      },
    },
  ],
  astroAllowShorthand: true,
  astroSkipFrontmatter: true,
  printWidth: 80,
  proseWrap: "never",
};
