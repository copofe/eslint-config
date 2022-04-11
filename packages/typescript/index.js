module.exports = {
  extends: [
    '@copofe/eslint-config-basic',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
  },
};
