// 引入核心模块
const fs = require('fs')

// try {
//     // 可能出错的代码
//     // 如果有错误，会自动进入catch,并传入错误信息
//     // 如果没有任何错误，则catch分支不会执行

// } catch(err){

// }

console.log(1)
// 如果不设置utf8，则读出来的内容是Buffer格式的。
// Buffer格式：理解为这个一段文本内容在硬盘中保存编码
// <Buffer 76 61 72 20 61 20 3d 20 31 3b 0d 0a 63 6f 6e 73 6f 6c 65 2e 69 6e 66 6f 28 61 20 2b 20 32 29 3b>
// Buffer转字符串 ，直接使用 toString()方法 
// let rs = fs.readFileSync("01.js")
try {
    let rs = fs.readFileSync("./01.js",'utf8')
    console.log(rs);
} catch(err){
    console.log("有错误：");
    
    console.log(err);
}

console.log(3)