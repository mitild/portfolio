module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
   "rules": {
    "react/react-in-jsx-scope": 0,
    "no-unused-vars": 2,
    "@typescript-eslint/no-unused-vars": 2,
    "import/prefer-default-export": 0,
    "react/function-component-definition": 0,
    "react/jsx-props-no-spreading": 0,
    "react/require-default-props": 0
  },
}
