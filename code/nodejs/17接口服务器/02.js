// 目标：
// 提供接口服务器的功能。
// 用户以 GET 方式来访问 http://localhost:8084/getmsg 返回数据给用户
// 参数:
//    dt: 可选的。时间戳。 
//      如果用户传入了dt，则表示只返回大于此时间戳记录。
//         http://localhost:8084/getmsg?dt=1581386323940  
//      如果不传入，则表示直接返回所有的留言数据.
// 
// 通过postman的验证

const http = require('http')

// 引入核心模块url
// 用来处理 req.url 这个属性，从中拆出 请求地址和请求参数
const url = require('url')

// 引入自定义模块 ./
// 用来操作message.json文件 
const msg = require('./msg')

const server = http.createServer((req,res)=>{
    // 约定请求的地址 和方式
    // console.log(req.url);
    // 收到请求后，第一处理req.url

    let obj = url.parse(req.url,true)
    // console.log(obj);
    // obj.pathname :表示接口地址
    // obj.query    :表示本次传参
    
    if(obj.pathname === "/getmsg" && req.method === "GET") {
        // 获取本次请求的方式：req.method
        // console.log(req.method);
        // 本次请求的参数是
        console.log("本次请求的参数dt是",obj.query.dt);
        
        let dt = obj.query.dt 

        // 假设经过很多运算，得到数据
        let data = msg.get()
        if(dt){
            // 在data数组，只返回时间大于dt的记录
            let result = data.filter(function(item) {
                return item.dt > dt
            })
            res.setHeader('content-type', 'application/json;charset=utf-8')
            res.end(JSON.stringify(result))
        } else {
            res.setHeader('content-type', 'application/json;charset=utf-8')
            res.end(JSON.stringify(data))
        }
        
    }else {
        res.end('404')
    }
})

server.listen(8084,()=>{
    console.log("大人，我们的接口服务器启动在8084端口");
})
