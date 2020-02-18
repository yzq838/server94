const http = require('http')
const fs = require('fs')

// 用户在地址栏输入 http://localhost:8084/index.html
// 我们返回给用户 index.html文件的内容
const server = http.createServer(function(req,res){
    // 对本次请求进行判断。
    // 如果用户请求的是 /index.html,则读出 index.html文件的内容，并返回给浏览器
    console.log("当前请求的资源地址是：",req.url)
    if( req.url === '/index.html') {
        // var htmlStr = 读出index.html文件内容
        const htmlStr = fs.readFileSync('index.html','utf8');
        // var htmlStr = `<!DOCTYPE html>
        // <html lang="en">
        // <head>
        //     <meta charset="UTF-8">
        //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
        //     <title>Document</title>
        // </head>
        // <body>
        //     <h1>server</h1>
        //     <h2>大家好！！！</h2>
        // </body>
        // </html>`
        // res.end("响应体")
        res.end(htmlStr)
    } 
    else if(req.url === '/about.html') {
        const htmlStr = fs.readFileSync('about.html','utf8');
        res.end(htmlStr)
    }
    else {
        res.end('404')
    }
})

server.listen(8084,function(){
    console.log("尊敬的用户，您的服务器已经成功地在8084端口启用了。")
})