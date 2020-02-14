const MYPI = 3.14; 

function add (a,b) {
    return a + b;
}

// 把能够这个文件中定义的常量和方法给其它的.js去使用
// 要导出当前这个文件中定义的方法，常量 ，变量

// 直接给module.exports这个对象赋值,
// module.exports这个对象保存了什么内容，则在其它的模块中
// 就可以使用什么内容。
// module.exports = add;
// module.exports = MYPI;
let obj  = {
    // "pi": MYPI,
    "add" : add
}
module.exports = 100;

// console.log (MYPI + add(1,2))