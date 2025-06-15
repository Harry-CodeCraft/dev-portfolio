import { FlatCompat } from "@eslint/eslintrc";
import importPlugin from "eslint-plugin-import"; // Import the plugin object
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    plugins: {
      import: importPlugin, // Use the plugin object
    },
    rules: {
      "no-debugger": "error", // Throw error for debugger statements
      "no-console": ["error", { allow: ["warn", "error"] }], // Throw error for console.log, allow console.warn and console.error
      "import/order": [
        "error",
        {
          groups: [
            ["builtin", "external"], // Built-in and external modules first
            ["internal", "parent", "sibling", "index"], // Internal and relative imports next
          ],
          "newlines-between": "always", // Enforce new lines between groups
          alphabetize: {
            order: "asc", // Sort imports alphabetically
            caseInsensitive: true, // Ignore case when sorting
          },
        },
      ],
    },
  },
];

export default eslintConfig;
