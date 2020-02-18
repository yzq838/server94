const express = require('express')

// 创建一个express实例
const server = express();

// 就这一句，就可以实现 访问静态资源
// express.static("要托管的文件夹")
// 在这个文件夹下的所有的静态资源都可以直接访问
// server.use( express.static("pyg") )
server.use("/pyg", express.static("pyg") )

// 让web02目录下的文件也可以直接访问
server.use( express.static("web02") )


server.listen(8080,()=>{
    console.log("express服务器已经在8080端口，准备好了");
    
})
