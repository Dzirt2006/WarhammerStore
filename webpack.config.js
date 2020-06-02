const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') 

module.exports = {
  watch: false,
  mode: 'development',
  entry: './app/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'webpack')
  },

  //babel
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  //HtmlWebpackPlugin
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    })
  ] 
}