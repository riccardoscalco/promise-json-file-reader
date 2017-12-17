import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
	{
		input: 'index.js',
		plugins: [
			babel({
				exclude: ['node_modules/**']
			})
		],
		output: {file: pkg.main, format: 'umd'},
		name: 'promiseJsonFileReader'
	},
	{
		input: 'index.js',
		output: {file: pkg.module, format: 'es'},
		plugins: [
			babel({
				exclude: ['node_modules/**']
			})
		],
	}
];