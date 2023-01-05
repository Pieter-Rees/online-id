module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['tsconfig.json']
  },
  plugins: [
    'react'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    'react/jsx-sort-props': 'error',
    'space-before-function-paren': 'off',
    '@typescript-eslint/space-before-function-paren': 'warn'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
