 const path = require('path');
 const webpack = require('webpack');
 const EncodingPlugin = require('webpack-encoding-plugin')
 const {
     CleanWebpackPlugin
 } = require('clean-webpack-plugin');

 module.exports = {
     entry: './src/main.js',
     plugins: [new CleanWebpackPlugin(),
         new webpack.ProvidePlugin({
             $: 'jquery',
             jQuery: 'jquery',
             'window.jQuery': 'jquery'
         }),
         new EncodingPlugin({
             encoding: 'UTF-8'
         })
     ],
     module: {
         rules: [{
                 test: /\.js$/,
                 use: {
                     loader: 'babel-loader'
                 },
                 exclude: '/node_modules/'
             },
             {
                 test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
                 use: [{
                     loader: 'url-loader',
                     options: {
                         name: '[name].[ext]', // 打包后的文件名称
                         outputPath: '', // 默认是dist目录
                         publicPath: '../font/', // 图片的url前面追加'../font'
                         useRelativePath: true, // 使用相对路径
                         limit: 50000 // 表示小于1K的图片会被转化成base64格式
                     }
                 }]
             },
             {
                 test: /\.css$/,
                 use: [
                     'style-loader',
                     'css-loader'
                 ]
             }
         ]
     },
     output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, 'dist'),
         publicPath: '/'
     }
 };