module.exports = {
    entry: './src/load/global.js',
    output: {
        path: __dirname,
        filename: 'popmotion.global.js'
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
    devtool: 'inline-source-map'
};