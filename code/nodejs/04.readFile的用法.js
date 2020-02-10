// 引入核心模块
const fs = require('fs')

// fs.readFile("01.js","utf8")
// fs.readFile("01.js","utf8",function (err, data) {

console.log(1)
fs.readFile("01.js1111",function (err, data) {
    console.log(2)
    // 回调函数，自动调用
    // 如果有错误，则错误信息会保存第一个参数中
    // 如果没有错误，则数据会保存在第二个参数中
    if (err)  {
        // 在读的过程，发生了错别
        // throw err :把这个错误 抛出来 交给上一级来处理 
        // throw err;
        console.log(err)
    }
    else{
        // 整个读取没有错误
        // 如果不设置utf8，则读出来的内容是Buffer格式的。
        // Buffer格式：理解为这个一段文本内容在硬盘中保存编码
        // <Buffer 76 61 72 20 61 20 3d 20 31 3b 0d 0a 63 6f 6e 73 6f 6c 65 2e 69 6e 66 6f 28 61 20 2b 20 32 29 3b>
        // Buffer转字符串 ，直接使用 toString()方法 
        console.log(data);
        console.log(data.toString());
    }

})

console.log(3)