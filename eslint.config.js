import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";
import parser from "@typescript-eslint/parser";

export default defineConfig([
  {
    files: ["**/*.{js,ts,mts}"],
    languageOptions: { globals: globals.node },
  },
  {
    files: ["**/*.{ts,mts}"],
    languageOptions: {
      parser,
    },
    plugins: {
      "@typescript-eslint": tseslint,
      prettier: eslintPluginPrettier,
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-empty-interface": "off",
    },
  },
  eslintConfigPrettier,
]);
