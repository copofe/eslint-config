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
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
  },
}