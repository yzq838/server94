const module1 = require("./module1.js")
// const module2 = require("./module1.js")
// const module3 = require("./module1.js")

console.log(module1);

// // 核心模块加载，是直接写模块名
// const fs = require("fs")

// const main = require("./main")

// 如果require中写的是相对路径：加载是自定义模块
// 如果require 是模块名：加载是核心模块 或者 第三方模块

// module.paths 是一个数组，它用来规定当前的执行代码需要在哪些地方
// 去找模块
// console.log(module.paths)

// const main = require("main")
// console.log(main);


