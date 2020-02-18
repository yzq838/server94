// nodejs中提供了两个全局变量来获取获取绝对路径：

// - __dirname ：获取当前被执行的文件的文件夹所处的绝对路径
// - __filename：获取当前被执行的文件的绝对路径

// console.log(__dirname);
// console.log(__filename);

const fs = require('fs')
const path = require('path')

// 用核心模块path提供的join方法来拼接生成绝对地址。

let filePath = path.join(__dirname, "test.txt")

console.log( filePath  )
let rs = fs.readFileSync(filePath,'utf8')
console.log(rs);
