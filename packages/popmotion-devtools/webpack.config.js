var webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    panel: './src/panel.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
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
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};