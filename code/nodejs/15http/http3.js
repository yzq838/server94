// 目标：实现一个web服务器，让用户来访问我们的资料:.html,.css, 图片....bundleRenderer.renderToStream

// 1.引入核心模块
const http = require('http')
const fs = require('fs')

// 2. 创建服务
const server = http.createServer((req,res)=>{
    if(req.url === '/index.html') {
        // 读出index.html并显示
        let htmlStr = fs.readFileSync('./index.html');
        res.setHeader('content-type', 'text/html;charset=utf-8')
        res.end(htmlStr)
    } else if(req.url === '/style.css') {
        // 读出style.css并返回
        let cssStr = fs.readFileSync('./style.css','utf8');

        //设置响应头。
        // 响应头中的信息会被浏览器收到，浏览器会根据响应头中设置信息做相对应的处理。
        // 具体到content-type,这个响应头的作用是告诉浏览器本次响应体中数据是 什么东东。
        // text/css;charset=utf-8  .类形是css文本，编码是utf8格式。

        // 如果没有设置content-type,则浏览器会自已去识别 响应体中数据的类型。

        // 名字是：content-type，值是：text/css;charset=utf-8
        res.setHeader('content-type', 'text/css;charset=utf-8')
        res.end(cssStr)
    }
    else if(req.url === '/6.png') {
        // 读出图片的内容并返回
        // 图片文件不是字符串格式，而应该是buffer格式
        // readFileSync 不设置utf8就是buffer.
        // let cssStr = fs.readFileSync('./6.png','utf8');
        let fileBuffer = fs.readFileSync('./6.png');

        // res.end(字符串 | buffer)
        res.setHeader('content-type', 'image/png')
        res.end(fileBuffer)
    }
    else {

        res.end('ok')
    }
})
// 3. 启动端口监听
server.listen(8084,()=>{
    console.log('启动端口监听成功');
    
})