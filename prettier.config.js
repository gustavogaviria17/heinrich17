module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  singleQuote: true,
  jsxSingleQuote: false,
  tabWidth: 2,
  trailingComma: 'all',
  printWidth: 100,
  parser: 'typescript',
  semi: true,
  overrides: [
    {
      files: ['*.html'],
      options: {
        parser: 'html',
      },
    },
    {
      files: ['*.js', '*.cjs', '*.mjs'],
      options: {
        parser: 'flow',
      },
    },

    {
      files: '*.ts',
      options: {
        parser: 'typescript',
      },
    },

    {
      files: ['*.json', '*.jsonc', '.babelrc', '.prettierrc', '.eslintrc', '.stylelintrc'],
      options: {
        parser: 'json',
      },
    },
  ],
};
