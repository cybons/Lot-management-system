// frontend/eslint.config.js
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      "build/**",
      "coverage/**",
      "public/**",
      "../backend/**",
      "scripts/**",
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    files: ["src/**/*.{ts,tsx,js,jsx}"],
    ignores: [
      "src/types/api.d.ts", // OpenAPI generated file
    ],
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { JSX: true },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // TypeScript strict rules
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],

      // React rules
      "react/react-in-jsx-scope": "off",

      // File size limits
      "max-lines": [
        "error",
        {
          max: 300,
          skipBlankLines: true,
          skipComments: true,
        },
      ],

      // Import organization
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      // Feature boundary enforcement
      "import/no-restricted-paths": [
        "error",
        {
          zones: [
            // features/* cannot import from other features' internal modules
            {
              target: "./src/features/*/!(index).{ts,tsx}",
              from: "./src/features/*/!(index).{ts,tsx}",
              except: ["./index.ts"],
              message:
                "Features must not directly import from other features' internals. Use the public API (index.ts) instead.",
            },
          ],
        },
      ],

      // Enforce API layer usage (no direct fetch/axios in features)
      // Allowed in: lib/, services/, hooks/ (infrastructure layer)
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "axios",
              importNames: ["default"],
              message:
                "Direct axios usage in features is forbidden. Use the API layer (features/*/api.ts) instead.",
            },
          ],
          patterns: [
            {
              group: ["node-fetch"],
              message:
                "Direct fetch usage in features is forbidden. Use the API layer (features/*/api.ts) instead.",
            },
          ],
        },
      ],
    },
  },

  // Allow axios in infrastructure layer
  {
    files: ["src/lib/**/*.{ts,tsx}", "src/services/**/*.{ts,tsx}", "src/hooks/**/*.{ts,tsx}"],
    rules: {
      "no-restricted-imports": "off",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "max-lines": "off",
    },
  },

  eslintConfigPrettier,
];
