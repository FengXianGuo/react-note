"use strict";

var fn = function fn(p) {
  return p;
};
var fn1 = function fn1() {
  return "无参数";
};
var fn2 = function fn2(a, b) {
  return a + b;
};
console.log(fn2(1, 4));
var fn4 = function fn4(a, b) {
  var m = a + 2;
  return m * b;
};
console.log(fn4(2, 5));
var obj = {
  "name":"guo",
  "arr" : ["a","b","c"],
  "getMessage":function(){
    this["arr"].forEach((item)=>{
      console.log(this.name+item);
    })
  }
}
obj.getMessage()
