/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    'prettier/pretitier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: true,
        trailngComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'avoid'
      }
    ]
  }
}
