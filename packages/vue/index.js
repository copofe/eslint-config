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
    '@copofe/eslint-config-typescript',
  ],
  rules: {
    'vue/component-tags-order': ['warn', {
      order: ['script', 'template', 'style'],
    }],
    'vue/max-attributes-per-line': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/v-on-event-hyphenation': 'off',

    'import/first': 'off', // bacause of vue3 support <script setup> used alongside normal <script>
  },
  globals: {
    defineProps: 'readonly',
    withDefaults: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
  },
};
