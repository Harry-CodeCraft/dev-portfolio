import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "no-debugger": "error", // Throw error for debugger statements
      "no-console": ["error", { allow: ["warn", "error"] }], // Throw error for console.log, allow console.warn and console.error
    },
  },
];

export default eslintConfig;
