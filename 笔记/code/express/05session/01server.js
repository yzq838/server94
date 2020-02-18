const express = require("express")
//1. 引入session包
const session = require('express-session');

const app = express();

//2. 配置项
let conf = {
  secret: '123456', //加密字符串。 使用该字符串来加密session数据，自定义
  resave: false, //强制保存session即使它并没有变化
  saveUninitialized: false //强制将未初始化的session存储。当新建了一个session且未
  //设定属性或值时，它就处于未初始化状态。
};

//3. 使用express-session
app.use(session(conf));

// 设计一个登陆接口
// 用户输入用户名，密码之后，如果验证通过，则发凭据(写入cookie)
app.get('/login',(req,res)=>{
   // 发凭据
   // 设置session
   req.session.name = "curry"
   req.session.age = "30"
   // 表现就是在浏览器中，cookie多出一项connect.sid="XXXXX"

   res.send("你的凭据已经设置了")
})

// 对来访者 检查凭据
// 直接在req.session中取
app.get('/user',(req,res)=>{

    let name = req.session.name
    let age = req.session.age
    if(name) {

        res.send(`用户页面:${name} ${age} <a href="./quit">退出</a>`)
    } else {
        res.send(`没有登陆`)

    }
})

// 销毁session
app.get('/quit',(req,res)=>{
    req.session.destroy();
    res.send("你已经成功退出了")
})
app.listen(8080,()=>{
    console.log("服务器已经启动在8080");
})