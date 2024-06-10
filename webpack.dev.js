const Path = require('path');
const { merge } = require('webpack-merge');
const entry = require('./webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(entry, {
	mode: 'development',
	output: {
		clean: true,
		path: Path.resolve(__dirname, 'devPack'),
		filename: 'bundle.js',
	},
	devtool: 'source-map',
	devServer: {
		static: {
			directory: Path.resolve(__dirname, 'devPack'),
		},
		watchFiles: ['./src/*.html'],
		port: 9630,
		open: true,
		hot: true,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			inject: 'head',
			scriptLoading: 'defer',
			template: 'src/index.html',
		}),
	],
});
