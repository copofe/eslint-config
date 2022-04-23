module.exports = {
  extends: [
    '@copofe/eslint-config-basic',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/no-shadow': 'error',
  },
};
