const express = require("express")

const app = express()
// 静态资源托管

// app.get("/getapi8080",(req,res)=>{
    
//     var obj = {a:1,b:2,c:[1,2,3]}
//     res.jsonp(obj)
  
// })

app.get("/getapi8080",(req,res)=>{
    // res.json({
    //     code:200
    // })
    let {callback} =  req.query;
    // 前端希望这个函数叫什么名字
    console.log(callback);
    
    var obj = {a:1,b:2,c:[1,2,3]}
    // res.send("fn({a:1,b:2})")
    res.send(`${callback}(`+ JSON.stringify(obj) + ")")
    // res.json({
    //     code:200
    // })
})

app.listen(8080,()=>{
    console.log("8080");
})