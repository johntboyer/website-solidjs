module.exports = {
	root: true,
	extends: ["eslint:recommended", "plugin:prettier/recommended"],
	overrides: [
    {
      files: ['*.mdx'],
      extends: 'plugin:mdx/recommended',
      settings: {
        'mdx/code-blocks': true,
        'mdx/language-mapper': {}
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ["plugin:@typescript-eslint/recommended"],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
    }
  ],
}