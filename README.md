### 一，git基本操作
>回顾一下git的基本知识

1. 全局设置git用户名 git config --global user.name "username"
2. 全局设置git邮箱 git config --global user.email "email"

### 二，babel
    ## bable预设

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

    ### babel plugins
    1. 在.babelrc中添加“plugins”：["插件名"]，
    2. npm i plugins,使用的时候在.babelrc中添加即可

    ### babel解析react jsx语法

    1. babel-preset-react
    2. 设置预设react
    3. 开始演出

### 三，es6
    1. 项目搭建
        ## 基本项目目录结构说明

        ```
        src es6源代码
        dist es6->es5可运行代码
        index.html 加载dist目录下的代码，测试
        ```
        ## 如何开发

        ```
        npm run dev
        ```
    2.箭头函数
        1. 无函数体箭头函数
            1. 无参数 var fn = （)=>"无参数箭头函数"；
                - 上面的例子，（）表示参数位置，无参数则（）中没有内容，=>直接跟返回值，可以是字符串，也可以是表达式
            2. 有参数箭头函数
                1. 唯一参数 var fn = p => p
                    - 上面的例子，第一个p为唯一参数，第二个p为返回值。
                2. 多个参数 var fn = (a,b) => a+b;
                    - 上面的例子，第一个（)中可以写入多个参数，=>后面则是返回值，可以写表达式；
        2. 有函数体箭头函数
            - var fn = (a)=>{
              var m = a+3;
              return m;
            }
