const express = require('express')

// 用来解析cookie
// 所有的cookie都会附加req.cookies上。
const cookieParser = require('cookie-parser');

const app = express();

app.use(cookieParser());

// 设计一个登陆接口
// 用户输入用户名，密码之后，如果验证通过，则发凭据(写入cookie)
app.get('/login',(req,res)=>{
    // 检查本次请求是否携带了凭据
    console.log( req.headers.cookie )
    // 给本次发请求的浏览器写入凭据

    // 1. nodejs提供的方法
    // res.setHeader('content-type', 'text/html;charset=utf8');
    // 它是一个响应头，名字是固定的 就是set-cookie,值就是要设置的cookie
    res.setHeader('set-cookie', 'name=curry');

    // 2. express框架提供的方法
    res.cookie("age", "30")
     // 给cookie设置有效期。
     // 如果超过了这个时间，则cookie会自动爆炸（自已消失）
     // expires: 日期格式。
     // new Date(Date.now() + 1000*10)  表示10s之后的时间
    res.cookie('salary', '20000', { expires: new Date(Date.now() + 1000*10) })

    res.send("你已经有了服务器发给你凭据")

})

// 对来访者 检查凭据 。
// 就是看请求头中是否有cookie
// 有就解析出来--借用第三方包 cookie-parser
app.get('/user',(req,res)=>{
    // 检查本次请求是否携带了凭据
    // 凭据会自动保存在req.headers.cookie中
    // console.log( req.headers.cookie )
    //如何把这个cookie解析出来？ 从字符串 ---> 对象
    console.log( req.cookies ) 
    let {name,age} = req.cookies; // 解构赋值

    // console.log( req.headers)

    // console.log("有人访问user");
    if(name) {
        res.send(`<h1>user页面 ${name} ${age} <a href='./quit'>退出</a></h1>`)
    } else {
        res.send("你没有登陆！<a href='./login'>登陆</a>")
    }

})

app.get('/quit',(req,res)=>{
    // 删除cookie
    // res.clearCookie('cookie名')
    res.cookie("name")
    res.cookie("age")
    res.send('退出成功')
})
app.listen(8080,()=>{
    console.log("服务器已经启动在8080");
})