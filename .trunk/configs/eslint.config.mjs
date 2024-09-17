// @ts-check

import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import * as mdx from "eslint-plugin-mdx";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";
import ts from "typescript-eslint";
const react = require("eslint-plugin-react");

export default ts.config(
  js.configs.recommended,
  ...ts.configs.strict,
  ...ts.configs.stylistic,
  react.configs.flat.recommended,
  ...tailwind.configs["flat/recommended"],
  ...astro.configs.recommended,
  ...astro.configs["jsx-a11y-strict"],
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
  {
    ...mdx.flat,
    processor: mdx.createRemarkProcessor({
      lintCodeBlocks: true,
    }),
  },
  {
    ...mdx.flatCodeBlocks,
    rules: {
      ...mdx.flatCodeBlocks.rules,
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
