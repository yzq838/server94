const http = require('http');
const url = require('url')

// 引入核心模块
// 它用来处理查询字符串
const querystring = require('querystring');

// let obj = querystring.parse("name=tiny&age=30&content=123&aa=1111&aaaaa=wwwww" )
// console.log(obj);



const server = http.createServer(function(req,res){

    let obj = url.parse(req.url, true)
    // obj 对象中就pathname,和query属性

    // console.log(obj);
    
    if(req.method ==="GET" && obj.pathname === "/getmsg") {
        // get在url中传递的参数，已经放在了 obj.query

        let result = {
            code : 200,
            data: obj.query
        }
        res.end(JSON.stringify( result ))
    } 
    else if(req.method ==="POST" && obj.pathname === "/addmsg") {
        console.log("post接口有人访问.....");
        let result = ""; // 用来保存接收到的参数

        req.on("data",function(buf){
            //post参数是一段一段向后端传递的
            // 后端也是一段一段接收的
            // 每次收到一段，则data就触发一次，会执行回调，回调函数的参数buf
            // 就是当前收到的这一段数据，它是buffer格式的。
            console.log("data事件发生，它表示当前收到了一部分数据...",buf);
            
            // 把当的收到的这一段数据，放在result
            result = result + buf; 
            // 隐式转换：result是字符串，而buf是buffer，把buffer转成string
        })
        req.on("end",function(){
            console.log("参数接收完毕");
            // console.log(result);
            // result：
            // 查询字符串：name=tiny&age=30&content=123&aa=1111&aaaaa=wwwww
            // 希望得到对象的格式：{name:"tiny",age:30}
            // 如何把查询字符串转成对象？可以自已代码去转，也可以使用核心模块querystring
            let obj =  querystring.parse(result)
            // console.log(obj);
            // 按接口要求，加一个属性
            obj._t = Date.now();

            res.end( JSON.stringify( obj))
        })

        // res.end("post")
    }
    
    else {

        res.end("404")
    }
})

server.listen(8080,()=>{
    console.log("我们的接口服务器已经成功启动了");
})