var path = require('path');
var webpack = require('webpack');

var config = {
  entry : path.resolve(__dirname,"./src/index.js"),
  output : {
    path:path.resolve(__dirname,"./dist"),
    filename:"bundle.js"
  }
}
module.exports = config;
