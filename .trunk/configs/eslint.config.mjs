// @ts-check

import effect from "@effect/eslint-plugin";
import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import * as mdx from "eslint-plugin-mdx";
import react from "eslint-plugin-react";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";
import ts from "typescript-eslint";

export default ts.config(
  js.configs.recommended,
  ...ts.configs.strict,
  ...ts.configs.stylistic,
  ...tailwind.configs["flat/recommended"],
  ...astro.configs.recommended,
  ...astro.configs["jsx-a11y-strict"],
  ...effect.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...react.configs.flat.recommended,
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
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
