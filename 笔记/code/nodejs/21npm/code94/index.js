// index.js是在package.json中声明的，它是整个包的入口

const add = (a,b) => a + b;

const sub = (a, b) => a - b;

const div = (a, b) => a / b;


// 导出两个工具
module.exports = {
    add,
    sub,
    div
}