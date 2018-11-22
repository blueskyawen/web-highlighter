// cSpell:ignore devtool,contenthash
const {staticDirname, examplePath} = require('./paths.js');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./example.base.config');

const config = {
    mode: 'production',
    plugins: [
        new CleanWebpackPlugin([staticDirname], {root: examplePath})
    ],
    output: {
        filename: 'index.[contenthash].js'
    }
};

module.exports = merge(baseConfig, config);