 module.exports = {
  root: true,
  plugins: ["@typescript-eslint", "import", "prettier", "unicorn"],
  extends: [
    "eslint:recommended",
    "airbnb-typescript/base",
    "prettier",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    "@typescript-eslint/lines-between-class-members": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "import/no-extraneous-dependencies": "off",
    "unicorn/no-array-for-each": "error",
    "import/no-default-export": "error"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json",
  },
};