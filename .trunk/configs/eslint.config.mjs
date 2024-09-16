// @ts-check

import eslint from "@eslint/js";
import eslintPluginAstro from "eslint-plugin-astro";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs["jsx-a11y-strict"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
);

//   {
//     languageOptions: {
//       parserOptions: {
//         projectService: {
//           allowDefaultProject: ["*.js"],
//           defaultProject: true,
//         },
//         tsconfigRootDir: import.meta.dirname,
//       },
//     },
//     rules: {
//       "@typescript-eslint/no-unused-vars": "warn",
//     },
//   },
// ];
