const common = require('./webpack.common');

// built-in node dependencies
const path = require('path');

// external dependencies
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].bundle.js',
        clean: true,
    },
});