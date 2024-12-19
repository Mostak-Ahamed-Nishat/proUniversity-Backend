import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
    overrides: [
      {
        files: ["**/*.ts"], // Or other specific rules for TypeScript files
        // Add TypeScript specific rules if necessary
      },
    ],
  },
  {
    ignores: [".node_modules/*"],
  },
  { languageOptions: { globals: globals.browser } },

  {
    rules: {
      "@typescript-eslint/no-require-imports": "off", // Allow require for CommonJS
      "no-unused-expressions": "error", // Maintain clarity in code
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
