### 一，git基本操作
>回顾一下git的基本知识

1. 全局设置git用户名 git config --global user.name "username"
2. 全局设置git邮箱 git config --global user.email "email"

### 二，babel预设
1. babel安装
    1. sudo npm install babel-cli -g
2. babel基本操作
    1. 单文件操作   babel  test.js(要编译的文件名.js) —out-file output.js(编译后想要的文件名);
    2. 编译整个文件夹 babel src --out-dir dist,简写babel src -d dist;
    3. -w 监听变化,使用方法babel src -d dist -w
    4. 工程中使用的话，使用npm i babel-cli --save-dev,使当前的项目依赖babel
        1. 安装过后提供了babel-node命令
        2. 可以通过babel-node 直接运行某个js文件;
3. babel开发
    1. babel与npm的集成，可以通过设置package来简化命令行操作，build babel src -d dist -
4. loose
    1. loose模式是将es6转换成es3，向下兼容，es3再想转换成es6就有难度了。
    2. normal模式则是将es6转换成es5，转换之后的es5语法用于es6，以及native开发都会方便很多。

### 三，babel plugins
    1. 在.babelrc中添加“plugins”：["插件名"]，
    2. npm i plugins,使用的时候在.babelrc中添加即可

### 四，babel解析react jsx语法

    1. babel-preset-react
    2. 设置预设react
    3. 开始演出
