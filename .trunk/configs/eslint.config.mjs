/* trunk-ignore-all(eslint) */
// @ts-check
import javascript from "@eslint/js";
import astro from "eslint-plugin-astro";
import functional from "eslint-plugin-functional";
import imports from "eslint-plugin-import-x";
import unicorn from "eslint-plugin-unicorn";
import typescript from "typescript-eslint";

export default typescript.config(
  // JavaScript
  javascript.configs.recommended,
  // TypeScript
  typescript.configs.strictTypeChecked,
  typescript.configs.stylisticTypeChecked,
  // Imports
  imports.flatConfigs.recommended,
  imports.flatConfigs.typescript,
  // Extra
  unicorn.configs["flat/recommended"],
  // Functional
  functional.configs.externalTypeScriptRecommended,
  functional.configs.strict,
  functional.configs.stylistic,
  // Astro
  astro.configs["flat/recommended"],
  astro.configs["flat/jsx-a11y-strict"],
  {
    languageOptions: {
      parserOptions: {
        // projectService: true, // Does not work with astro plugin, `project` is temporarily used instead https://github.com/ota-meshi/eslint-plugin-astro/issues/447
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/method-signature-style": ["error", "property"],
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-unnecessary-qualifier": "error",
      "@typescript-eslint/no-unsafe-type-assertion": "error",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/require-array-sort-compare": "error",
      "array-callback-return": "error",
      "arrow-body-style": ["error", "as-needed"],
      "block-scoped-var": "error",
      "default-param-last": "off",
      "func-name-matching": "error",
      "func-names": ["error", "never", { generators: "never" }],
      "func-style": ["error", "expression"],
      "functional/no-conditional-statements": "off",
      "functional/prefer-immutable-types": "off",
      "max-depth": ["error", 4],
      "max-lines-per-function": ["error", 20],
      "max-lines": "error",
      "max-nested-callbacks": ["error", 3],
      "max-params": "off",
      "max-statements": ["error", 10],
      "new-cap": "error",
      "no-alert": "error",
      "no-array-constructor": "error",
      "no-bitwise": "error",
      "no-console": "error",
      "no-duplicate-imports": "error",
      "no-empty-function": "error",
      "no-eval": "error",
      "no-extend-native": "error",
      "no-implicit-coercion": ["error", { disallowTemplateShorthand: true }],
      "no-implicit-globals": "error",
      "no-implied-eval": "error",
      "no-lone-blocks": "error",
      "no-lonely-if": "error",
      "no-multi-assign": "error",
      "no-negated-condition": "error",
      "no-nested-ternary": "error",
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-new": "error",
      "no-plusplus": "error",
      "no-proto": "error",
      "no-return-assign": "error",
      "no-script-url": "error",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-shadow": "off",
      "no-template-curly-in-string": "error",
      "no-throw-literal": "error",
      "no-underscore-dangle": "error",
      "no-unneeded-ternary": "error",
      "no-unused-expressions": "error",
      "no-use-before-define": "off",
      "no-useless-call": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "error",
      "no-useless-rename": "error",
      "no-useless-return": "error",
      "no-void": "error",
      "no-warning-comments": "error",
      "object-shorthand": "error",
      "one-var": "error",
      "prefer-arrow-callback": "error",
      "prefer-destructuring": "off",
      "prefer-exponentiation-operator": "error",
      "prefer-named-capture-group": "error",
      "prefer-numeric-literals": "error",
      "prefer-object-spread": "error",
      "prefer-regex-literals": ["error", { disallowRedundantWrapping: true }],
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "prefer-template": "error",
      "require-await": "error",
      "require-unicode-regexp": ["error", { requireFlag: "v" }],
      "symbol-description": "error",
      "unicorn/no-nested-ternary": "off",
      camelcase: "off",
      complexity: ["error", { max: 5, variant: "modified" }],
      eqeqeq: "error",
      radix: ["error", "as-needed"],
      strict: "error",
      yoda: ["error", "never", { exceptRange: true }],
      "@typescript-eslint/consistent-type-exports": [
        "error",
        {
          fixMixedExportsWithInlineTypeSpecifier: true,
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        { allowHigherOrderFunctions: false },
      ],
      "@typescript-eslint/explicit-module-boundary-types": [
        "error",
        {
          allowHigherOrderFunctions: false,
          allowDirectConstAssertionInArrowFunctions: false,
          allowTypedFunctionExpressions: false,
        },
      ],
      "@typescript-eslint/max-params": [
        "error",
        {
          max: 3,
        },
      ],
      "@typescript-eslint/member-ordering": [
        "error",
        {
          default: {
            optionalityOrder: "required-first",
            order: "natural",
          },
        },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "default",
          format: ["strictCamelCase"],
          leadingUnderscore: "forbid",
        },
        {
          selector: "variableLike",
          format: ["strictCamelCase"],
          leadingUnderscore: "allow",
        },
        {
          selector: "variable",
          format: ["strictCamelCase", "UPPER_CASE"],
          leadingUnderscore: "allow",
        },
        {
          selector: "variable",
          types: ["boolean"],
          format: ["strictCamelCase"],
          prefix: ["is"],
        },
        {
          selector: "function",
          format: ["strictCamelCase", "StrictPascalCase"],
        },
        {
          selector: "typeLike",
          format: ["StrictPascalCase"],
        },
        {
          selector: "import",
          format: ["strictCamelCase", "StrictPascalCase"],
        },
      ],
      "@typescript-eslint/no-use-before-define": [
        "error",
        {
          ignoreTypeReferences: false,
        },
      ],
      "@typescript-eslint/prefer-destructuring": [
        "error",
        {
          object: true,
        },
        {
          enforceForDeclarationWithTypeAnnotation: true,
        },
      ],
      "@typescript-eslint/promise-function-async": [
        "error",
        {
          allowAny: false,
        },
      ],
      "@typescript-eslint/strict-boolean-expressions": [
        "error",
        {
          allowNullableObject: false,
          allowNumber: false,
          allowString: false,
        },
      ],
      "@typescript-eslint/switch-exhaustiveness-check": [
        "error",
        {
          allowDefaultCaseForExhaustiveSwitch: false,
          considerDefaultExhaustiveForUnions: true,
          requireDefaultForNonUnion: true,
        },
      ],
      "functional/functional-parameters": [
        "error",
        {
          enforceParameterCount: false,
        },
      ],
      "functional/immutable-data": [
        "error",
        {
          ignoreClasses: false,
          ignoreImmediateMutation: false,
          ignoreNonConstDeclarations: false,
        },
      ],
      "sort-keys": [
        "error",
        "asc",
        {
          natural: true,
          allowLineSeparatedGroups: true,
        },
      ],
      "unicorn/prevent-abbreviations": [
        "error",
        {
          allowList: {
            Props: true,
          },
        },
      ],
    },
  },
  {
    files: ["**/*.astro"],
    rules: {
      "unicorn/filename-case": "off",
    },
  },
);
