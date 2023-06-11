module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
	},
	overrides: [
		{
			files: ["*.mdx"],
			extends: "plugin:mdx/recommended",
			settings: {
				"mdx/code-blocks": true,
				"mdx/language-mapper": {},
			},
		},
		{
			files: ["*.ts", "*.tsx"],
			extends: [
				"eslint:recommended",
				"plugin:prettier/recommended",
				"plugin:@typescript-eslint/recommended",
			],
			parser: "@typescript-eslint/parser",
			plugins: ["@typescript-eslint"],
		},
	],
};
