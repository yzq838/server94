
// 特别想用一下 add方法？

// require(相对路径)：把这个模块中的module.exports取出来
// 1. myMath.js中的.js后缀可以省略。
// 2. const 定义的常量名 一般会选择与模块名保持一致。

const myMath = require('utils/myMath.js');

console.log(myMath);
// console.log(XXX.pi);
// console.log(XXX.add(1,2));
// console.log(XXX(10,20));
