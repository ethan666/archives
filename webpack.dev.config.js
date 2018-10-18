const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
 
    /*入口*/
    entry: path.join(__dirname, 'src/index.js'),
    
    /*输出到dist文件夹，输出文件名字为bundle.js*/
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'main.js'
    },

    plugins: [
        new CleanWebpackPlugin('dist'),
        new ExtractTextPlugin({
            filename: 'css/main.css',
            allChunks: true
        }),
        new CopyWebpackPlugin([
            {
                from: './public/index.html',
                to: 'index.html'
            }])
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true
        // port: 8081,
        // host: 'localhost'
    }
};