var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var uglifyPlugin = webpack.optimize.UglifyJsPlugin;

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
      },
      {
        test:/\.css$/,
        loader:['style-loader','css-loader'],
        include:path.resolve(__dirname,"src")
      },
      {
        test:/\.less$/,
        loader:['style-loader','css-loader','less-loader'],
        include:path.resolve(__dirname,"src")
      }
    ]
  },
  plugins:[
    new htmlWebpackPlugin({
      title:"搭建前端工作流",
      template:'./src/index.html'
    }),
    new uglifyPlugin({
      compress:false
    }),
    new webpack.BannerPlugin('作者：郭丰羡\n日期：2017-6-27')
  ]
}
module.exports = config;
