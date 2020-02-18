// 使用核心模块的步骤
// 1. 引入模块
//   格式： 常量 =  require('核心模块名')


// 2. 使用模块的api

const fs = require('fs');
// require('fs')把fs这个模块中的代码执行一次，并把`执行结果`保存在常量fs中

// 后面的fs：是模块的名字
// 前面的fs: 是常量名

// 假设目标是要 读出 当前文件夹下的 `01.js`的内容
// console.log(fs);

fs.readFile('01.js', 'utf8',(err, data) => {
    if (err) throw err;
    console.log(data);
});

