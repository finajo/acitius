const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const distDir = path.resolve(__dirname, 'dist');
const srcDir = path.resolve(__dirname, 'src');

const environment = process.env.NODE_ENV || 'development';
const extractSass = new ExtractTextPlugin({ filename: 'style.css' });

module.exports = {
	entry: [`${srcDir}/js/app.jsx`, `${srcDir}/scss/app.scss`],
	output: {
		path: distDir,
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	devServer: {
		contentBase: distDir,
		compress: true
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				include: srcDir,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
				include: srcDir,
				use: extractSass.extract({
					use: [
						{
							loader: 'css-loader',
							options: { sourceMap: true }
						},
						{
							loader: 'postcss-loader',
							options: { sourceMap: true }
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
								data: `$env: ${process.env.NODE_ENV};`
							}
						}
					],
					// use style-loader in development
					fallback: 'style-loader'
				})
			}
		]
	},
	plugins: [
		autoprefixer,
		extractSass,
		new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(environment) } })
	],
	resolve: { extensions: ['.js', '.jsx'] }
};
