module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  "extends": [
    "plugin:react/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-underscore-dangle': ['error', { allow: ['_id', '_headers', '_url', '_checkRequest'] }],
    'react/prop-types': 'off',
  },
};
