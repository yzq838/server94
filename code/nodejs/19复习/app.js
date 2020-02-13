const http =require('http')
const path = require('path')
const fs = require('fs')
const server = http.createServer((req,res)=> {

    if(req.url === "/api" && req.method ==="GET") {
        // 说明用户访问的资源是 接口
        let obj = {
            data:[1,2,3],
            code:200
        }
        res.end( JSON.stringify(obj) )
    } else {
        // 说明用户访问的资源是 静态资源
    
        // 收到req.url之后，直接去public下面读出文件内容
        // 并返回
        let filePath = path.join(__dirname, "public",req.url)
        // console.log();
        let rs = fs.readFileSync(filePath); 
        res.end ( rs )
    }
    // res.end(filePath)
})
server.listen(8084,()=>{ console.log('服务器已经启动了')})