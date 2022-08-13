module.exports = {
  overrides: [
    {
      files: ['*.vue'],
      parser: 'vue-eslint-parser',
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
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
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/v-on-event-hyphenation': 'off',
    'vue/max-len': ['error', { code: 100 }],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3,
      },
      multiline: {
        max: 1,
      },
    }],

    'import/first': 'off', // bacause of vue3 support <script setup> used alongside normal <script>
  },
  globals: {
    defineProps: 'readonly',
    withDefaults: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
  },
};
