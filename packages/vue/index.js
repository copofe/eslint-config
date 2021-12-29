module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
      },
    },
  ],
  extends: [
    '@copofe/eslint-config-typescript',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/no-v-html': 'off',
  },
}