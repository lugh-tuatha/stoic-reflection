// built-in node dependencies
const path = require('path');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    devtool: 'source-map',
    entry:{
        // vendor: path.resolve(__dirname, 'src/js/vendor.js'), this is for third party libraries
        main: path.resolve(__dirname, 'src/js/main.js'),
    }, 
    module: {
        rules: [
            {
                test: /styles\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // III. Extract css into files
                    "css-loader", // II. Turns css into common js
                ]
            },
            {
                test: /\.(png|spg|jpg|jpeg|gif|webp)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'assets'
                    }
                },
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({filename: '[name].[contenthash].css'}),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin(),
        new HtmlWebpackPlugin({
            title: 'Stoic Reflection',
            filename: 'index.html',
            template: 'src/index.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Journals',
            filename: 'journals.html',
            template: 'src/journals.html',
        }),
    ]
}