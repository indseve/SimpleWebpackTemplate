 const path = require('path');

 module.exports = {
     entry: './src/main.js',
     plugins: [],
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

