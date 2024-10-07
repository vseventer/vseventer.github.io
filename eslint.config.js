import eslint from "@eslint/js";
import pluginRouter from "@tanstack/eslint-plugin-router";
import importPlugin from "eslint-plugin-import";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginRouter.configs["flat/recommended"],

  {
    plugins: {
      import: importPlugin,
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
  },

  { ignores: ["dist", "src/components/ui"] },

  {
    settings: {
      react: { version: "18.3" },
      "import/resolver": {
        typescript: {},
      },
    },
    rules: {
      ...importPlugin.flatConfigs.recommended.rules,
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat["jsx-runtime"].rules,

      "import/order": [
        "error",
        {
          alphabetize: { order: "asc", caseInsensitive: true },
          distinctGroup: false,
          groups: [
            "builtin",
            "external",
            "internal",
            "index",
            "sibling",
            "parent",
          ],
          "newlines-between": "always",
          pathGroups: [
            {
              group: "external",
              pattern: "{react,react-dom/**}",
              position: "before",
            },
            {
              group: "internal",
              pattern: "@/**",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
        },
      ],

      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
);
