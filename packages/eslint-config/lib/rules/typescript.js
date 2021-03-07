module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
  },
};
