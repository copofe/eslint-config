module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:eslint-comments/recommended',
  ],
  rules: {
    // import
    'import/no-unresolved': 'off',
    'import/extensions': 'off',

    // comments
    'eslint-comments/disable-enable-pair': 'off',

    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
};
