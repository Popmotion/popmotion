module.exports = {
    entry: './src/load/global.js',
    output: {
        path: __dirname,
        filename: 'redshift.global.js'
    },
    devtool: 'inline-source-map'
};