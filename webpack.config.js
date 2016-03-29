var webpack = require('webpack');
var isProd = (process.env.NODE_ENV === 'production');
var filename = isProd ? 'popmotion.global.min.js' : 'popmotion.global.js';
var devTool = isProd ? false : 'inline-source-map';

module.exports = {
    entry: './src/load/global.js',
    output: {
        path: __dirname + '/dist',
        filename: filename
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel"
            }
        ]
    },
    plugins: isProd ? [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: true
        })
    ] : [

    ],
    devtool: devTool
};