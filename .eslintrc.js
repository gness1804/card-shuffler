// prettier-ignore
/* eslint-disable */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
  ],
  parserOptions: {
    // will be used most of the time as I typically work in module-based frameworks
    sourceType: 'module',
    ecmaVersion: 2017,
    ecmaFeatures: {
      //  only if using JSX
      // jsx: true
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  parser: 'babel-eslint',
  rules: {
    'no-console': 'error',
    // the two below are only if using TypeScript
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
}
