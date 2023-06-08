/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/essential',
      'eslint:recommended',
      'prettier',
      'prettier/vue',
      '@vue/eslint-config-prettier'
    ],
    plugins: ['vue', 'prettier'],
    parserOptions: {
      parser: 'babel-eslint',
      ecmaVersion: 'latest',
    },
    rules: {
      'prettier/prettier': 'error',
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
  };