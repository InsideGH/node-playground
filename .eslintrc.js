module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module"
  },
  rules: {
    semi: ["error", "never"],
    "no-console": [
      "off",
      {
        allow: ["warn", "error"]
      }
    ],
    "no-unused-vars": [
      "off",
      {
        vars: "all",
        args: "after-used"
      }
    ]
  }
};
