const express = require('express')
const bodyParser = require('body-parser');
// 引入自定义模块
const user = require('./utils/user')

const multer = require('multer')
//  配置
const upload = multer({dest:'avatars/'}) 

// 自定义的模块，用来操作mysql
const sqlutil = require('./utils/sqlutil')

//1. 引入session包
const session = require('express-session');

//2. 配置session项
let conf = {
  secret: '123456', //加密字符串。 使用该字符串来加密session数据，自定义
  resave: false, //强制保存session即使它并没有变化
  saveUninitialized: false //强制将未初始化的session存储。当新建了一个session且未
  //设定属性或值时，它就处于未初始化状态。
};

const app = express()

//3. 使用express-session
app.use(session(conf));

// 它就会自动解析请求体中的参数
// 它会把参数解析成对象，保存在req.body中
app.use(bodyParser.urlencoded({extended:false}));
// 托管静态资源
app.use(express.static("public94"))

// 实现一个接口来做用户注册功能
// 用户在页面上，传递：用户名，密码，头像
// 在后端：
// 1. 把他的头像文件保存起来.
//    放在avatars目录下
// 2. 把用户的信息保存到user.json文件中
//    user.json是我们专门来用来保存用户信息的 临时数据库


app.post('/user_add',upload.single("avatar"),(req,res)=>{
    // console.log(req.file)
    // console.log(req.body)
    let {name, pwd} = req.body;
    let avatarUrl = req.file.path;

    //调用自定义模块，实现添加方法
    user.add(name,pwd,avatarUrl)

    res.send({
        code: 200,
        msg: "用户注册成功"
    })
})


// 实现一个接口来做用户注册功能 - 添加到数据库
// 用户在页面上，传递：用户名，密码，头像
// 在后端：
// 1. 把他的头像文件保存起来.
//    放在avatars目录下
// 2. 把用户的信息保存添加到数据库

app.post('/user_add_sql',upload.single("avatar"),(req,res)=>{
    // console.log(req.file)
    // console.log(req.body)
    let {name, pwd} = req.body;
    let avatarUrl = req.file.path;

    //调用自定义模块，实现添加方法
    // user.add(name,pwd,avatarUrl)
    // 添加一个用户的sql
    let sqlStr = `insert into users(name,pwd) values("${name}","${pwd}")`
    sqlutil.doSQL(sqlStr,(err,data)=>{
        if(err){
            res.send({
                code: 500,
                msg: "服务器开小差了"
            })
        }else {
            // console.log(data)
            if(data.affectedRows === 1){
                res.send({
                    code: 200,
                    msg: "用户注册成功"
                })
            } else {
                res.send({
                    code: 400,
                    msg: "用户注册失败"
                })
            }
        }
    })
})

// 用户登陆: 连接mysql数据库来做验证
// 约定:普通键值对传参
// 参数：name, pwd
// 返回值：
//  {code:200,msg:'登陆成功'}
//  {code:400,msg:'用户名密码错误'}


app.post('/user_login_sql',(req,res)=>{
    // 1. 获取通过post传过来的用户参数：name,pwd
    let {name,pwd} = req.body; 
    // 2. 根据 name,pwd去数据库中进行搜索，如果找到这个人
    // 就是登陆成功。
    let sqlStr = `select id,name,pwd from users where name="${name}" and pwd="${pwd}"`
    console.log(sqlStr);
    sqlutil.doSQL(sqlStr,(err,data)=>{
        if(err){
            // 执行sql出错
            res.send( {
                code:500,
                msg:"服务器停止工作了"
            })
        }
        else {
            console.log(data)
            if(data.length > 0) {
                // 登陆成功
                // 用通过session 发凭证
                req.session.isLogin = true;
                req.session.name = name

                // 会给浏览器设置cookie,cookie的值就是sessionID

                res.send( {
                    code:200,
                    msg:"登陆成功"
                })  
            } else {
                res.send( {
                    code:400,
                    msg:"登陆失败"
                })
            }
        }
    } )
})


app.post('/user_login',(req,res)=>{
    // 1. 获取通过post传过来的用户参数：name,pwd
    let {name,pwd} = req.body; 
    // console.log(name,pwd)
    // 2. 读出user.json中的内容，判断，当前的用户参数
    //    是否在user.json中已经存在
    let allUsers = user.get(); 
    // 检查在allUsers中是否有一个人叫name,并且密码是pwd
    // find方法：如果找到了符合条件的元素就返回元素，否则就是undefined
    let curUser = allUsers.find(function(item){
        console.log(item)
        if(item.name === name && item.pwd ===pwd ){
            return true
        }
    })
    // 3. 返回值
    // 如果找到了这个人，就说明它的信息是对的
    if(curUser) {
        // 登陆成功
        // 用通过session 发凭证
        req.session.isLogin = true;
        req.session.name = name

        // 会给浏览器设置cookie,cookie的值就是sessionID

        res.send( {
            code:200,
            msg:"登陆成功",
            data:curUser 
        })
    } else {
        res.send( {
            code:400,
            msg:"登陆失败"
        })
    }
})
// 检测用户是否登陆
// get
// 原理：就是获取session值。如果获取到，说明登陆成功。
app.get('/get_user',(req,res)=>{
    // 当请求进来之后，就去检查它是否带了sessionID
    // get_user，它的作用就是获取当前登陆信息
    // （获取session）
    let name = req.session.name;
    let isLogin = req.session.isLogin;
    if(isLogin){
        // 说明它已经登陆了
        let result = {
            code:200,
            data:{
                "name":name
            }
        }
        res.send(result)
    } else {
        res.send({code:400,msg:"没有登陆"})
    }
})

// 退出就是删除session
app.get('/quit',(req,res)=>{
    req.session.destroy();
    res.send({code:200,msg:"退出成功"})
})

app.listen(8084,()=>{
    console.log("服务器启动了 8084");
})