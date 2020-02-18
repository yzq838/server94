// 引入 第三方模块 
const express = require('express')

// 创建express实例
const server = express()

// req,res和http模块中的一样
// 只是，express框架增强它们的功能
// res.send() 就是express 给res提供的新方法
//  相比res.end()它可以直接传入对象，并自动设置响应头。

// 如果有请求 '/' 路径，则执行后面的回调函数。
server.get('/', (req, res) => {
    // req对象中保存本次请求的所有信息
    console.log('有人访问了',req.url)
    res.end('Hello World!')
    // res.end({"a":1})
    // res.send({"a":1})
})

// 如果有请求 '/abc' 路径，则执行后面的回调函数。
server.get('/abc', (req, res) => {
    // req对象中保存本次请求的所有信息
    console.log('有人访问了',req.url)
    // res.end('Hello World!')
    // res.end({"a":1})
    res.send({"a":1})
})

// 开启服务，监听端口 300
// 服务器启动成功，则输出
server.listen(3000, () => console.log('Example app listening on port 3000!'))
