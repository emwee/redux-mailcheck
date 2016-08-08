var path = require('path');
var webpack = require('webpack')

module.exports = {
	entry: {
		main: './index.js',
	},
	output: {
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['', '.js']
	},
	module: {
		loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }, {
			test: /\.js$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader',
			query: {
					presets: ['es2015', 'stage-2', 'react']
			}
		}]
	}
};