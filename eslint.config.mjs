import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";

export default defineConfig([
  { files: ["src/**/*.{js,mjs,cjs,jsx,ts,tsx}"], plugins: { js }, extends: ["js/recommended"],  languageOptions: {parser: tseslint.parser , globals: { ...globals.browser, ...globals.vitest } }},
  { ...pluginReact.configs.flat.recommended, files: ["src/**/*.{js,mjs,cjs,jsx,ts,tsx}"] },
]);
