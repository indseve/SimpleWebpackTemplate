 const path = require('path');
 const {CleanWebpackPlugin} = require('clean-webpack-plugin'); 

 module.exports = {
     entry: './src/main.js',
     plugins: [new CleanWebpackPlugin(['dist'])],
     module: {
         rules: [{
             test: /\.js$/,
             use: {
                 loader: 'babel-loader'
             },
             exclude: '/node_modules/'
         }]
     },
     output: {
         filename: 'bundle.js',
         path: path.resolve(__dirname, 'dist')
     }
 };

