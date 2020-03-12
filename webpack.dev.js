const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');


module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {        
        host: 'localhost',
        port: 8848,
        open: true,
        hot: true,
        contentBase: path.resolve(__dirname, '')
    },
    plugins: [
       new webpack.NamedModulesPlugin(),
       new webpack.HotModuleReplacementPlugin()
      ]
});