const express = require("express")

const app = express()
// 静态资源托管

app.use( express.static("public94"))

app.get("/get",(req,res)=>{
    res.json({
        code:200
    })
})
app.listen(8084,()=>{
    console.log("8084");
})