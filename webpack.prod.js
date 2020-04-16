const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {        
        compress: {          
          drop_debugger: true, // 清除debugger語句
          drop_console: true,
          pure_funcs: ['console.log'] // 清除console
        },
        warnings: false
      },
      sourceMap: true,
      parallel: true,
      cache: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ]
});