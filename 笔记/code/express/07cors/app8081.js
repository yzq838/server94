// 提供api服务器的功能

const express = require("express")

const app = express()

// 如果有100个接口，都要支持跨域，那代码应该怎么写？
//   解决方案1：每个接口都手写一个响应头。缺点：掉头发！！
//   解决方案2：用express的中间件。

// app.use()能匹配所有的请求
// 每一次请求，它都会执行中间件函数。
app.use(function(req,res,next){
    console.log("看门大哥",req.url);
    req.abc= "10086"
    // 所有后续的中间件中的res就具有这个特殊的响应头
    res.setHeader("Access-Control-Allow-Origin","*");
    next();
    // 如果一个中间件函数中，
    // 既没有next()，： 跳出当前中间件，执行下一个中间件
    // 也没有res.end(),res.send(),res.json()
    // 整体请求就得不到响应，浏览器一直处于等待状态。
})

// app.get("/getapi8081") 
// 只能匹配以get方式请求的 getapi8081
app.get("/getapi8081",(req,res)=>{
    // res.setHeader("Access-Control-Allow-Origin","*");
    console.log(req.abc)
    console.log('收到请求 getapi8081')
    res.json({
        code:200
    })
})

app.post("/post8081",(req,res)=>{
    // res.setHeader("Access-Control-Allow-Origin","*");
    console.log('收到请求 post8081')
    res.json({
        code:200,
        msg:"post"
    })
})
// app.post("/postok") 
// 只能匹配以post方式请求的 postok
app.post("/postok",(req,res)=>{
    // res.setHeader("Access-Control-Allow-Origin","*");
    console.log('收到请求 postok')
    res.json({
        code:200,
        msg:"postok"
    })
})


// 报404。

app.listen(8081,()=>{
    console.log("8081 cros方案实现跨域");
})