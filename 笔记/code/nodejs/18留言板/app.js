// 实现web服务器功能
// 目标：
// localhost:8084/index.html   ---->读出public94/index.html 返回
// localhost:8084/login.html   ---->读出public94/login.html 返回

const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const querystring = require('querystring')
// 引入自定义模块
// 用来操作message.json
const msg = require("./msg")


const STATIC_PATH = "public94";  //  所有静态资源放置的地方

// 集中设置 content-type 映射关系 
const TYPE_MAP = {
    ".html": "text/html;charset=utf-8",
    ".css": "text/css;charset=utf-8",
    ".png": "image/png",
    ".js": "application/javascript",
    ".jpg": "image/jpg",

}
// 所有的静态资源放在public94
const server = http.createServer((req, res) => {
    let obj = url.parse(req.url)
    console.log(req.url);
    if (obj.pathname === "/getmsg" && req.method === "GET") {
        // 如果 是  /getmsg ，就应该是执行接口的功能
        // 服务器执行接口的功能= 
        var result = {
            code : 200,
            data : msg.get()
        }  
        res.setHeader("content-type","application/json;charset=utf-8")
        res.end(JSON.stringify( result) )
    } else if(obj.pathname ==="/addmsg" && req.method === "POST"){
        // 1. 获取post过来的参数
        let result = "";
        req.on("data",buf=>{
            result +=buf
        })
        req.on('end',()=>{
            // 把查询字符串转成对象
            // let obj = querystring.parse(result)
            let {name,content} = querystring.parse(result)
            // console.log("post收到的参数",result,obj);
            // 2. 保存到 message.json， 来实现添加功能
            msg.add(name,content)
            let rs = {
                code: 200,
                msg:'添加成功'
            }
            res.setHeader('content-type','application/json;charset=utf-8')
            res.end( JSON.stringify(rs) )
        })


    } else {
        // 如果 不是接口 ，就直接去public94下读文件

        // 1. 获取当前用户要访问的资源路径。req.url
        // 2. 拼接服务器上对应的文件地址：  /index.html  =======> public94/index.html
        // 3. 读出来，并返回
        let filePath = path.join(__dirname, STATIC_PATH, req.url)
        try {
            let rs = fs.readFileSync(filePath)
            // 如果找不到这个文件，就会抛出错误，而进入catch分支。
            // res.setHeader("content-type","text/css;charset=utf-8")

            // 思路：根据不同的后缀名去设置不同的content-type.
            // 如何取出后缀名？ 用path模块的extname()
            let extName = path.extname(req.url)
            // console.log(req.url)
            // console.log(extName)
            // // 设计模式之策略模式
            if (TYPE_MAP[extName]) {
                // TYPE_MAP[extName] : 取对象中的属性值。
                res.setHeader('content-type', TYPE_MAP[extName])
            }
            // TYPE_MAP[extName] && res.setHeader('content-type', TYPE_MAP[extName])
            res.end(rs)
        } catch (err) {
            res.setHeader("content-type","text/html;charset=utf-8")
            // statusCode 就是状态码
            // 找到不文件，就设置404.
            res.statusCode = 404;
            res.end(`${req.url} 没有找到`)
        }
    }
})

server.listen(8084, () => {
    console.log('亲爱的，你的服务器在8084端口....');
})

