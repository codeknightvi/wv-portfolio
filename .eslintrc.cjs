// eslint-disable-next-line no-undef
module.exports = {
  root: true,

  env: {
    browser: true,
    es2020: true,
    node: true,
  },

  parser: "@typescript-eslint/parser",

  plugins: ["@typescript-eslint", "react", "react-hooks", "react-refresh", "tailwindcss"],

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",

    // React
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",

    // Tailwind
    "plugin:tailwindcss/recommended",
  ],

  settings: {
    react: {
      version: "detect",
    },
    tailwindcss: {
      callees: ["cn", "clsx", "cva", "twMerge"],
    },
  },

  ignorePatterns: ["dist"],

  rules: {
    /* Vite Fast Refresh */
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],

    /* Tailwind */
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/no-custom-classname": "off",
    "tailwindcss/enforces-shorthand": "warn",

    /* General */
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "prefer-const": "warn",

    /* React 17+ */
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
  },
};
