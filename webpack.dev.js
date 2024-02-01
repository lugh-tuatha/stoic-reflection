const common = require('./webpack.common');

// built-in node dependencies
const path = require('path');

// external dependencies
const { merge } = require('webpack-merge')

module.exports = merge(common, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    }
})