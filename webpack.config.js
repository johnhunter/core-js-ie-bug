module.exports = {
    entry: {
        main: './src/index.js',
        polyfills: './src/polyfills.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    }
};
