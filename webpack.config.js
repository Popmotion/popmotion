module.exports = {
    entry: './src/load/global.js',
    output: {
        path: __dirname,
        filename: 'redshift.global.js'
    },
    module: {
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    loose: "all",
                    optional: ["runtime"]
                }
            }
        ]
    },
    devtool: 'inline-source-map'
};