import eslint from "@eslint/js";
// import eslintPluginAstro from "eslint-plugin-astro";
// import * as mdx from "eslint-plugin-mdx";
// import pluginReact from "eslint-plugin-react";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  // pluginReact.configs.flat.recommended,
  // ...mdx.flat,
  // ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    // plugins: {
    //   react: pluginReact,
    // },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
    // settings: {
    //   react: {
    //     version: "detect",
    //   },
    // },
  },
);
