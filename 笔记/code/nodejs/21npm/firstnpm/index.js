// 目标：在index.js中去用一下dayjs的代码

// 格式就是像使用核心模块一样，直接require("包名")
const dayjs = require('dayjs')

console.log(dayjs);


// 使用dayjs的功能
var dt = dayjs()
.startOf('month') // 把日期设为本月的第一天
.add(1, 'day') // 在此基础上加一天
.set('year', 2018) // 把年份设为2018
.format('YYYY-MM-DD HH:mm:ss') // 格式化输出

console.log(dt);

