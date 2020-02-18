// 使用express框架中的路由来快速实现接口功能// 使用express框架中的路由来快速实现接口功能

const express = require('express');

// 1. 引入包
// 这个包可以自动把在 请求体中的 数据解析出来
const bodyParser = require('body-parser');

// 1. 引入
// multer用来处理文件上传的接口(发布文章：封面图像,标题....)
const multer = require('multer');

// 2. 配置
const upload = multer({dest:'uploads/'}) 
// 上传的文件会保存在这个目录下
// uploads表示一个目录名，你也可以设置成其它的

const app1 = express();

app1.use( express.static('public'))

// 使用包
// 把请求体中的数据以普通键值对格式来接收
app1.use(bodyParser.urlencoded({extended:false}));

// 把请求体中的数据以JSON格式来接收
app1.use(bodyParser.json())

// 路由： 请求的方式是get,请求的路径是 /abc, 回调函数是(req,res)=>{}
app1.get("/abc",(req,res)=>{
    res.send("ok")  
})

// 实现一个接口： get， 
// url: /api/getdata,支持传入任何参数
// 返回值：收到的参数

// 在express框架中，url地栏中的参数，可以直接通过
// express添加在req对象上的query属性直接获取
app1.get('/api/getdata',(req,res)=>{
    // req.query自动会保存在url地址栏中查询字符串，
    // 直接给转好对象
   
    console.log(req.query);
    // res.end()一样。结束请求，并返回响应体
    // res.send(req.query)

    // res.json() 与res.send()相同，都可以直接返回一个对象。
    res.json(req.query)
})


// 实现一个接口： post 
// url: /api/post,支持传入任何参数普通键值对
// 返回值：收到的参数

app1.post("/api/post",(req,res)=>{
    // 如何获取传过来的参数？
    // 需要两步：
    // 1.引入bodyparser
    // 2.在req.body上获取参数
    console.log(req.body);
    

    // res.send("post-abc")  
    res.send(req.body)  
})

// 实现一个接口： post 
// url: /api/upload, 支持传入：文件
// 返回值：收到的信息

// upload.single("cover")  处理单个文件上传。
// 文件所在的参数是 cover
// 把cover属性对应的文件保存在 upload对象所设置的目录中
// 同时，把当前这个文件的信息保存在req.file属性中。
app1.post("/api/upload",upload.single("cover"),(req,res)=>{

    // 当前这个文件的信息保存在req.file属性中。
    console.log(req.file);

    // req.body 保存那些个不是文件的参数信息
    console.log(req.body);
    
    res.send("ok")
})


// 实现一个接口： post 
// url: /api/postJSON,接收json格式的，复杂的数据（不是普通的键值对）
// 返回值：收到的参数

app1.post("/api/postJSON",(req,res)=>{
    // 如何获取传过来的参数？
    // 需要两步：
    // 1.引入bodyparser
    // 2.在req.body上获取参数
    console.log(req.body);
    

    // res.send("post-abc")  
    res.send(req.body)  
})


app1.listen(8000,()=>{
    console.log("8000已经启动"); 
})