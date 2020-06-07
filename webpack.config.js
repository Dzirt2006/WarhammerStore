const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: ['babel-polyfill', './app/main.js'],
  output: {
    path: __dirname + '/public', // assumes your bundle.js will also be in the root of your project folder
    filename: 'bundle.js'
  },
  //babel
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
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
  //HtmlWebpackPlugin
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     template: 'public/index.html'
  //   })
  // ] 
}