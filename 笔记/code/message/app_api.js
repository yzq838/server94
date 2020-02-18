const express = require('express')
const app = express();
const user = require( './utils/user.js')
const msg = require( './utils/msg.js')
const bodyparser = require('body-parser');
const multer = require('multer');

const session = require('express-session');
var cors = require('cors')
app.use(cors({
    origin: 'http://localhost:8080', 
    optionsSuccessStatus: 200 ,
    methods:['GET','POST','OPTIONS'],
    headers:['Conten-Type', 'Authorization'],
    credentials: true,
}))
// 2. 配置
const upload = multer({dest:'images/'}) 
// 上传的文件会保存在这个目录下
// uploads表示一个目录名，你也可以设置成其它的


app.use(bodyparser.urlencoded({extended:false}))

//2. 配置项
let conf = {
    secret: '123456', //加密字符串。 使用该字符串来加密session数据，自定义
    resave: false, //强制保存session即使它并没有变化
    saveUninitialized: false //强制将未初始化的session存储。当新建了一个session且未
    //设定属性或值时，它就处于未初始化状态。
  };
  
//3. 使用express-session
app.use(session(conf));

app.get('/checklogin',(req,res)=>{
    if( req.session.isLogin) {
        res.json({
            code:200,
            data:{
                name: req.session.name,
                avatar:req.session.avatar
            }
        })
    } else {
            res.json( {
                code: 400,
                msg: "没有登陆" 
            })
        }
    
})

app.post('/login', (req,res)=>{
    let {name,pwd } = req.body;
    console.log(req.file);
    var item = user.login(name,pwd)
    if(item){
        req.session.isLogin = true;
        req.session.name = item.name
        req.session.avatar = item.avatar
        res.json({code:200,msg:'登录成功'})
    }else {
        res.json({code:400,msg:"用户名或者密码错误"})
    }
})

app.post('/logout', (req,res)=>{
 
    if(req.session.isLogin){
       req.session.destroy();
       res.send({code:200,msg:'退出成功'})
    }else {
       res.send({code:400,msg:'退出失败'})
    }
})
app.post('/reg',upload.single("avatar"),(req,res)=>{
    let {name,pwd } = req.body;
    console.log(req.file);
    
    if( user.add(name,pwd,req.file.path) ) {
        res.json({code:200,msg:'添加成功'})
    } else {
        res.json({code:400,msg:"注册失败"})
    }
})

app.get('/getmsg',(req,res)=>{
    let {dt} = req.query
    var data = msg.get(dt)
    var users = user.get()
    data.forEach(item => {
        let obj = users.find(it=>it.name == item.name);
        if(obj) {

            item.avatar = obj.avatar 
        }
    })
    res.json({
        code:200,
        data
    })
})
app.post('/addmsg',(req,res)=>{
    let {content} = req.body;
    console.log(req.session);
    
    msg.add(req.session.name,content);
    res.json({
        code: 200,
        msg:"添加留言成功"
    })
})
app.listen(8081)