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
    'no-debugger': 'warn',
    'no-spaced-func': 'off', // deprecated
    'func-call-spacing': 'off', // format by prettier
    'no-unused-expressions': ['error', { allowTernary: true, allowShortCircuit: true }],
    'arrow-body-style': 'off',

    'no-underscore-dangle:': 'off',
  },
};
