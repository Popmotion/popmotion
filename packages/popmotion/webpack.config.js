var webpack = require('webpack');
var path = require('path');
var isProd = (process.env.NODE_ENV === 'production');
var devTool = isProd ? false : 'inline-source-map';

module.exports = {
  entry: {
    global: './src/global.ts',
    xl: './src/global-xl.ts'
  },
  output: {
    path: __dirname + '/dist',
    filename: 'popmotion.[name].min.js'
  },
  module: {
    rules: [
      {
        test: (modulePath) => modulePath.endsWith('.ts') && !modulePath.endsWith('test.ts'),
        loader: 'ts-loader'
      }
    ],
  },
  resolve: {
    alias: {
      popmotion: path.resolve(__dirname, 'src/index.ts')
    },
    extensions: ['.ts', '.tsx'],
    modules: [
      path.resolve('./node_modules'),
      path.resolve('./src')
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