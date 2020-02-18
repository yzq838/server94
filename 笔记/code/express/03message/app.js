const express = require('express')

// 引入自定义模块
const user = require('./utils/user')

const multer = require('multer')
//  配置
const upload = multer({dest:'avatars/'}) 
const app = express()
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
app.listen(8084,()=>{
    console.log("服务器启动了 8084");
    
})