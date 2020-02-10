// nodejs中提供了两个全局变量来获取获取绝对路径：

// - __dirname ：获取当前被执行的文件的文件夹所处的绝对路径
// - __filename：获取当前被执行的文件的绝对路径

// console.log(__dirname);
// console.log(__filename);

const fs = require('fs')

// let rs = fs.readFileSync("./test.txt",'utf8')
console.log( __dirname + "./test.txt" )
let rs = fs.readFileSync(__dirname + "./test.txt",'utf8')
// let rs = fs.readFileSync("./test.txt",'utf8')
console.log(rs);
