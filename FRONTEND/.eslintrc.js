module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: [
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint'
  ],
  rules: {
    'linebreak-style': ['error', 'windows'],
    'global-require': 0,
    'eslint linebreak-style': [0, 'error', 'windows'],
    'no-underscore-dangle': 0
  }
}
