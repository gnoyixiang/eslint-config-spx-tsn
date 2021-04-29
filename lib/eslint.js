/** @ts-check @type import('../types').TsEslintConfig */
module.exports = {
  env: {
    node: true,
    jest: true
  },
  extends: [
    'prettier-standard/prettier-file-base',
    'eslint-config-standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
    'prettier-standard/end'
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  rules: {
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
