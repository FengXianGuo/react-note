var fn = p => p;
var fn1 = ()=>"无参数"
var fn2 = (a,b)=>a+b;
console.log(fn2(1,4));
var fn4 = (a,b)=>{
  var m = a+2;
  return m*b;
}
console.log(fn4(2,5));
