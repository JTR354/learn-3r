// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
      // 指定ESLint可以解析JSX语法
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: './tsconfig.eslint.json',
      // React启用jsx
      ecmaFeatures: {
          jsx: true,
      },
  },
  env: {
      es6: true,
      browser: true,
      jest: true,
      node: true,
  },
  plugins: ['@typescript-eslint', 'jest', 'prettier', 'import', 'unused-imports'],
  extends: [
      'airbnb',
      'airbnb-typescript',
      'airbnb/hooks',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:jest/recommended',
      'prettier',
      'plugin:prettier/recommended',
  ],
  rules: {}
}
