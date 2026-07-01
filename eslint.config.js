// import js from "@eslint/js";
// import tseslint from "typescript-eslint";
// import eslintPluginVue from "eslint-plugin-vue";
// import eslintConfigPrettier from "eslint-config-prettier";

// export default [
//   js.configs.recommended,
//   ...tseslint.configs.recommended,
//   ...eslintPluginVue.configs["flat/recommended"],
//   eslintConfigPrettier,
//   {
//     files: ["*.svetle", "**/*.svetle"],
//     languageOptions: {
//       globals: globals.browser,
//       parserOptions: {
//         parser: tseslint.parser,
//       },
//     },
//   },
//   {
//     rules: {
//       "@typescript-eslint/no-explicit-any": "off",
//       "vue/attribute-hyphenation": ["error", "always"],
//     },
//   },
// ];

// eslint.config.js
import js from "@eslint/js";
import svelte from "eslint-plugin-svelte";
import globals from "globals";

export default [
  js.configs.recommended,
  ...svelte.configs.recommended, // <-- Это подключает правила и парсер для Svelte
  {
    files: ["**/*.svelte"],
    languageOptions: {
      globals: {
        ...globals.browser,
      }
    }
  }
];