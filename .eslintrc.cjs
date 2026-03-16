/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended'
    // If you use Prettier, uncomment the line below:
    // '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // Vue-specific overrides
    'vue/multi-word-component-names': 'off', // Optional: Turns off the requirement for 'UserCard.vue' vs 'Card.vue'
    'vue/require-default-prop': 'off', // Optional: TypeScript often handles prop types better than runtime validation

    // Electron-specific tweaks
    'no-unused-vars': 'off', // Turn off standard unused vars rule
    '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }] // Use TS version instead
  }
}
