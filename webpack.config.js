var path = require('path');
var webpack = require('webpack');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname + '/dist',
		publicPath: '/static/',
		filename: 'build.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: "babel-loader",
				include: [path.resolve(__dirname, 'src')]
			},
			{
				test: /\.css$/,
				// use: ExtractTextPlugin.extract({
				// 	use: ["vue-style-loader", "style-loader", "css-loader"]
				// })
				loader: 'style-loader!css-loader'
			},
			{
				test: /\.vue$/,
				// use: {
				// 	loader: "vue-loader",
				// 	options: {
				// 		loaders: {
				// 			css: ExtractTextPlugin.extract({
				// 				use: 'css-loader'
				// 			})
				// 		}
				// 	}
				// }
				use: 'vue-loader'
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				use: [{
					loader: "url-loader",
					options: {
						limit: 10000,
						name: 'images/[name].[hash:7].[ext]'    // 将图片都放入images文件夹下，[hash:7]防缓存
					}
				}]
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				use: [{
					loader: "url-loader",
					options: {
						limit: 10000,
						name: 'fonts/[name].[hash:7].[ext]'    // 将字体放入fonts文件夹下
					}
				}]
			}
		]
	},
	resolve: {
        modules: [path.resolve(__dirname, './src'), 'node_modules'],
        extensions: [".js", ".css"],
	},
	devtool: 'cheap-module-source-map',
	plugins:[
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		// new ExtractTextPlugin('src/style/style.css'),
		// new FriendlyErrorsWebpackPlugin(),
		new webpack.ProgressPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress:{
			  warnings: true
			}
		})
	]
}

