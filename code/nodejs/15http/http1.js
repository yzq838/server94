// 引入核心模块 http
const http = require('http');
// console.log(http)
// 创建服务

// 在每一次收到来自客户端请求，它都会执行一次。
const server = http.createServer(function(req, res) {

    // 获取当前请求的 方式 
    console.log(req.method); 

    // 获取当前请求资源地址
    console.log(req.url)
    
    // req:表示本次请求   (request)
    // res:用来设置本次响应(response)
    // 只要有来自客户端的请求，这个函数就会执行，并req,res就会自动传入实参。

  // 获取访问本服务器的客户端ip
  console.log(req.connection.remoteAddress);
  // 向客户端发送内容，并结束本次响应
    res.end('hello world!!!!!!! ok');
});

// 启动服务
// 监听端口
server.listen(8083, function() {
  console.log('别用鼠标选中........ 本次服务器已经启动了success');
});