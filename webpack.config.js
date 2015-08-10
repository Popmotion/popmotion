module.exports = {
    entry: './src/load/global.js',
    output: {
        path: __dirname,
        filename: 'popmotion.global.js'
    },
    module: {
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    loose: "all"
                }
            }
        ]
    },
    devtool: 'inline-source-map'
};