const http = require('http')

const server = http.createServer((req,res)=>{

    // 响应行： HTTP/1.1 状态码 状态码的说明
    res.statusCode = 404;

    // 响应头：
    // 理解成一个对象，其中有很多键值对，每一个都表示不同的含义。
    // content-type:告诉浏览器，本次响应体中的内容是html,并且是utf8编码的
    res.setHeader("content-type","text/html;charset=utf8")
    
    // 响应体:给请求带回去的核心内容。

    // 设置响应体  res.end("响应体")
    res.end("<h1>大家好</h1>")
})

//  第一个参数是端口号.可以自已定义
//  第二个参数是一个回调，表示当前端口监听成功时，它会执行

server.listen(8080,()=>{
    console.log("服务器已经启动");
})