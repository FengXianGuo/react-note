### 一，git基本操作
>回顾一下git的基本知识

1. 全局设置git用户名 git config --global user.name "username"
2. 全局设置git邮箱 git config --global user.email "email"

### 二，babel
#### bable预设

1. babel安装
    > sudo npm install babel-cli -g
2. babel基本操作

    单文件操作   
    > babel  test.js(要编译的文件名.js) —out-file output.js(编译后想要的文件名);

    编译整个文件夹
    > babel src --out-dir dist,简写babel src -d dist;

    -w 监听变化
    > 使用方法babel src -d dist -w

    工程中使用的话
    > 使用npm i babel-cli --save-dev,使当前的项目依赖babel

        (1) 安装过后提供了babel-node命令
        (2) 可以通过babel-node 直接运行某个js文件;

3. babel开发
    babel与npm的集成

    > 可以通过设置package来简化命令行操作，build : babel src -d dist

4. loose
    > loose模式是将es6转换成es3，向下兼容，es3再想转换成es6就有难度了。

    > normal模式则是将es6转换成es5，转换之后的es5语法用于es6，以及native开发都会方便很多。

### babel plugins
>1. 在.babelrc中添加“plugins”：["插件名"]，
>2. npm i plugins,使用的时候在.babelrc中添加即可

### babel解析react jsx语法
>1. babel-preset-react
>2. 设置预设react
>3. 开始演出

### 三，es6
#### 1.项目搭建
##### 基本项目目录结构说明

>1. src es6源代码
>2. dist es6->es5可运行代码
>3. index.html 加载dist目录下的代码，测试
>4. 如何开发 npm run dev

#### 2. 箭头函数
##### 2.1. 无函数体箭头函数
>2.1.1. 无参数 var fn = （)=>"无参数箭头函数"；

    上面的例子，（）表示参数位置，无参数则（）中没有内容，=>直接跟返回值，可以是字符串，也可以是表达式
>2.1.2. 有参数箭头函数

    (1).唯一参数

    var fn = p => p
    上面的例子，第一个p为唯一参数，第二个p为返回值。

    (2). 多个参数

    var fn = (a,b) => a+b;
    上面的例子，第一个（)中可以写入多个参数，=>后面则是返回值，可以写表达式；

##### 2.2. 有函数体箭头函数

```
var fn = (a)=>{
  var m = a+3;
  return m;
}
{}表示函数体，如果需要用到函数体，并且需要返回值，那么就要显式的书写return
```


##### 2.3. 注：箭头函数中的this共享父作用域的关键字this；

#### 3.类
>3.1. 通过class创建类，内部通过constructor来定义内部属性，通过直接书写方法，定义prototype上的公共方法

```
class Animal {
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  getMessage(){
    console.log(this.name + 'is' + this.age);
  }
}
```
>3.2. 类的继承，通过super

>3.3. static，是类的静态方法，可以理解为对象的工具方法，不是实例上的属性，而是类上面的属性，想要调用直接通过类来使用。

>3.4. 对象字面量

    (1). 以往对象中的方法，例如
        {
          getName ： function（){
            console.log("test")
          }
        }
        es6增强后，
        可以写成
        {
          getName(){
            console.log("test")
            //不需要再书写键值
          }
        }

    (2). 增强后的proto，可以通过再对象中，直接书写__proto__:others,来快捷的改写对象原型
      var obj = {
        __proto__:others,
      }

    (3). 简化了定义属性的写法，可以直接通过书写属性名的方式，来定义属性。
      var a = 1
      var b = "2"
      var fn = (m,n)=>console.log(m+n)
      var obj = {a,b,fn};极大的优化了代码可读性

> 3.5. 解构赋值

    (1) 数组的解构赋值 var [dog] = ["dog","cat"]
    (2)对象的解构赋值
    var obj = {a:1,fn:function(){console.log(1)}}
    var {a,fn} = obj;

> 3.6. 函数的扩展

    (1) 默认值 function(name = "guo",age = "19"),如果参数没有传入，则使用默认参数
    (2) 任意参数rest function（obj,...keys){},其中key是剩余参数的所有
    (3) 扩展操作 var arr = [1,2,3,4] console.log(Math.max(...arr));
    复制 var newarr = [...arr]

> 3.7. let和const

    (1)let局部作用域有效
    (2) const定义常量

> 3.8. 模块

    (1) export default 拿不到问题，用babel插件解决
    (2) import 重命名
      疑问： 1. exprot，module.exports,exports,export default之间都有什么关系。

> 3.9 exports 和 module.exports 的区别

    对于每一个可执行脚本(js文件),node都会进行模块化
    (function(){
        exports = module.exports = {};
        return module.exports;
    })()

    从上面我们可以看出

    1. 所有脚本导出的都是对象
    2. 当其他文件引用当前脚本时，拿到的是module.exports；
    3. exports 实际上是module.exports的引用；

    如何使用:
    (1)exports:
        exports.a = 1;
        exports.fn = function(){
            console.log("this is fn")
        }
    (2)module.exports:
        module.exports.a = 1;
        module.exports.fn = function(){
            console.log("this is fn")
        }
    注意：
    (1)
        exports.b = 1;
        module.exports = {
            a = 1
        }
        如上，导出的内容将没有b;
    (2)
        exports = {
            b : 1
        };
        module.exports.a = 1;
        如上，导出的内容将没有b;
    (3)
        如果想要导出一个对象呢？

        使用exports.obj = {};
        在引用的时候:
        var o = require("./obj");
        取用的话，需要o.obj才能拿到想要的;

        如何才能直接拿到obj呢？
        exports = {}?
        这样做没有任何意义，因为暴露的是module.exports;

        答案：module.exports = {
            a : 1
        }

        因为node最终暴露的是module.exports，所以改写module才是正确的方案;

    总结：exports是module.exports的快捷方式，exports主要是用暴露一个个属性，而module.exports则是用来暴露一个类，一个对象。

> 3.10 es6中的export和import

    （1）export命令，向外面暴露的是一个对象；

        输出一个变量：
        export var name = "guo"，向外输出一个变量

        输出多个变量：
        export {name,age}

    （2）import命令，用来引用一个对象；

        解构赋值提取引用：
        import {name, age} from './test.js'

        拿到暴露的模块对象：
            （1）import * as test form './test.js';
             上面代码的意思是，拿到暴露的所有内容，重命名为test对象。

            （2） module test from 'test.js'
             以指令的方式获取整个暴露对象;

    （3）export default

        使用方法:
        export default function getAge() {}

        1. 每一个js文件只能使用一次export default;
        2. import的时候可以随意重命名;
        3. import的时候不再需要花括号;

        总结：通过export defaul会将输出的内容变成一个default变量，可以随意重命名，而且不需要从对象中提取，导入时候不再需要花括号。

        注：一条import 语句可以同时导入默认方法和其它变量:
        import defaultMethod, { otherMethod } from 'xxx.js';


### 四，webpack
> 4.1 webpack介绍

    官网webpack.github.io

> 4.2. 基本命令

    1. npm i webpack --save-dev
    2. 根目录下创建webpack.config.js文件

    var path = require('path');
    var webpack = require('webpack');
    var config = {
        //配置入口
      entry : path.resolve(__dirname,"./src/index.js"),
        //配置输出
      output : {
        path:path.resolve(__dirname,"./dist"),
        filename:"bundle.js"
      }
    }
    //把配置文件暴露出去;
    module.exports = config;

    3. npm script 中添加命令build：webpack --progress --colors

> 4.3. es6

    1. 创建.babelrc文件
    2. 安装 npm i babel-loader babel-core babel-preset-es2015
    3. 配置.babelrc文件
