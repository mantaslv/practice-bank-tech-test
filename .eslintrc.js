module.exports = {
	'env': {
		'browser': true,
		'commonjs': true,
		'es2021': true
	},
	'extends': 'eslint:recommended',
	'overrides': [
		{
		  'files': [
				'**/*.test.js',
				'**/*.test.jsx',
				'**/*.png',
				'**/*.info',
				'**/.eslintrc.js',
		  ],
		  'env': {
				'jest': true
		  }
		}
	  ],
	'parserOptions': {
		'ecmaVersion': 'latest'
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
	}
};
