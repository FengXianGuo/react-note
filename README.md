### 一，git基本操作
>回顾一下git的基本知识

1. 全局设置git用户名 git config --global user.name "username"
2. 全局设置git邮箱 git config --global user.email "email"

### 二，babel
1. babel安装
    1. sudo npm install babel-cli -g
2. babel基本操作
    1. 单文件操作   babel  test.js(要编译的文件名.js) —out-file output.js(编译后想要的文件名);
    2. 编译整个文件夹 babel src --out-dir dist,简写babel src -d dist;
    3. -w 监听变化,使用方法babel src -d dist -w
    4. 工程中使用的话，使用npm i babel-cli --save-dev,使当前的项目依赖babel
        1. 安装过后提供了babel-node命令
        2. 可以通过babel-node 直接运行某个js文件;
