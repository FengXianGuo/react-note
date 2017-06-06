var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');

var config = {
  entry : path.resolve(__dirname,"./src/index.js"),
  output : {
    path:path.resolve(__dirname,"./dist"),
    filename:"bundle.js"
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude:/node_modules/
      }
    ]
  },
}
module.exports = config;
