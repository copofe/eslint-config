module.exports = {
  extends: [
    '@copofe/eslint-config-basic',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'vue/component-tags-order': ['error', {
      order: ['script', 'template', 'style'],
    }],
  },
};
