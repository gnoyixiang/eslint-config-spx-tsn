module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: [
    'prettier-standard/prettier-file-base',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
    'prettier-standard/end'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'error',
    'sonarjs/cognitive-complexity': 'warn'
  },
  overrides: [
    {
      files: ['**/*.test.{js,ts}', '**/*.spec.{js,ts}'],
      rules: {
        'sonarjs/no-duplicate-string': 'off'
      }
    }
  ]
}
