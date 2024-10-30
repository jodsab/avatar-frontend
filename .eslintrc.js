module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['standard', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
	overrides: [
		{
			env: {
				node: true,
			},
			files: ['.eslintrc.{js,cjs}'],
			parserOptions: {
				sourceType: 'script',
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react'],
	rules: {
		'comma-dangle': 'off',
		indent: [2, 'tab'],
		'no-tabs': 0,
		'space-before-function-paren': 'off',
		'react/prop-types': 0,
	},
}
