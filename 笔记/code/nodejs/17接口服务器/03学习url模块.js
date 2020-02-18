// 学习核心模块url
// 用来处理url相关的功能。
const url  = require('url')

// url.parse用来把url字符串拆分成一个对象
// 对象 = url.parse(url字符串)
 // 如果第二个参数设为true，它还可以解析url地址中传参成对象格式。
let obj = url.parse('http://localhost:8084/getmymsg?dt=1581386323944&id=abc',true) 
// console.log('接口的地址是:',obj.pathname );
// console.log('接口的参数是:',obj.query );
// console.log('接口的参数 id 是:',obj.query.id );
// console.log('接口的参数 dt 是:',obj.query.dt );

// 能不能解构赋值？
let {pathname,query} = obj
console.log('接口的地址是:',pathname );
console.log('接口的参数是:',query );


console.log(obj);
