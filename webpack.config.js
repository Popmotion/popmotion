var webpack = require('webpack');
var isProd = (process.env.NODE_ENV === 'production');
var filename = isProd ? 'popmotion.global.min.js' : 'popmotion.global.js';
var devTool = isProd ? false : 'inline-source-map';

module.exports = {
  entry: './src/global.js',
  output: {
    path: __dirname + '/dist',
    filename: filename
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: isProd ? [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      minimize: true
    })
  ] : [

  ],
  devtool: devTool
};