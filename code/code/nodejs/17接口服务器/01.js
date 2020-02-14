// 目标：
// 提供接口服务器的功能。
// 用户以 GET 方式来访问 http://localhost:8084/getmsg 返回数据给用户
// 
// 通过postman的验证

const http = require('http')

// 引入自定义模块 ./
// 用来操作message.json文件 
const msg = require('./msg')

const server = http.createServer((req,res)=>{
    // 约定请求的地址 和方式
    if(req.url === "/getmsg" && req.method === "GET") {
        // 获取本次请求的方式：req.method
        console.log(req.method);
        
        // 假设经过很多运算，得到数据
        // let data = [{id:1,name:"张三",content:"寒雨连江夜入吴",dt:1234353322}]
        let data = msg.get()
        // 如何返回数据？
        // res.end(只能是  字符串  或buffer)
        // 需要把数转成字符串
        // 如果本次返回的数据是json字符串，则可以给浏览器设置响应头
        // 明确告诉浏览器，响应体中放置的数据是 json,编码是utf8
        res.setHeader('content-type', 'application/json;charset=utf-8')
        res.end(JSON.stringify(data))
    }else {
        res.end('404')
    }
})

server.listen(8084,()=>{
    console.log("大人，我们的接口服务器启动在8084端口");
})
