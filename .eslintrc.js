module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "standard"
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "space-before-function-paren": ["error", "never"]
  }
}