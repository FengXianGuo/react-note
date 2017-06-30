var path = require('path');
var webpack = require('webpack');
var env = require('yargs').argv.env;
// console.log(mode);
var uglifyPlugin = webpack.optimize.UglifyJsPlugin;

var libraryName = "sparrow";
var plugins=[];
var filename = '';
if(env === 'production'){
  plugins.push(new uglifyPlugin({
    minimize:true
  }))
  filename = libraryName + '.min.js'
}else{
  filename = libraryName + '.js'
}
var config = {
    entry : path.resolve(__dirname,'./src/index.js'),
    output:{
        path:path.resolve(__dirname,'./lib'),
        filename : filename,
        library:libraryName,
        libraryTarget:'umd',
        umdNamedDefine:true
    },
    "devtool":'cheap-source-map',
    resolve:{
        extensions:['./js','./css','./json'],
        // root:path.resolve('./src')这个配置项有问题
    },
    module:{
        loaders:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude : /node_modules/
                // presets:{}可以直接在这里写配置
            },
            {
                test:/\.js$/,
                loader:'eslint-loader',
                exclude : /node_modules/
                // presets:{}可以直接在这里写配置
            }
        ]
    },
    plugins:plugins
}
module.exports = config;
