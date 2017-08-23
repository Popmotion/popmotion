var webpack = require('webpack');
var path = require('path');
var isProd = (process.env.NODE_ENV === 'production');
var devTool = isProd ? false : 'inline-source-map';
var { version } = require('./package.json');

module.exports = {
  entry: {
    global: './src/global.js',
    xl: './src/global-xl.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'popmotion.[name].min.' + version + '.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ],
  },
  resolve: {
    alias: {
      popmotion: path.resolve(__dirname, 'src/popmotion.js')
    }
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