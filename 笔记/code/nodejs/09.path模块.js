// const fs = require('fs');

// 学习path模块的使用
const path = require('path');

// - path.basename（）
// 此方法返回 `path` 的最后一部分。一般可用来获取路径中的文件名。
// - path.join() ：路径拼接。
// - path.parse(path) ：把一个路径转成一个对象

// console.log(path);
var filePath = 'D:/94/server94/code/nodejs/abc.txt';
// console.log( path.basename(filePath) ) //abc.txt
// console.log( path.join('D:/94','./a','/c','./1.html')) // D:\94\a\c\1.html
console.log( path.parse(filePath) )