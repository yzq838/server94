const express = require('express')

const app = express();

// ---restful接口------

// - 通过URL设计资源。接口名一般都是名词，不包含动词。
// - 请求方法决定资源的操作类型(增加，删除，修改，查询)
// - get : 查询
// - post :增加
// - put: 修改
// - delete: 删除
app.get('/articles',(req,res)=>{
    res.send('获取')
})

app.post('/articles',(req,res)=>{
    res.send('添加')
})

app.delete('/articles',(req,res)=>{
    res.send('删除')
})
app.put('/articles',(req,res)=>{
    res.send('编辑')
})
// $.ajax({
//     type:"put",
//     url:'http://localhost:8080/articles',
//     data:{},
    
// }).then(res=>{

// })

//---普通人写接口------------------------
// 动词+名词
app.get('/getarticle',(req,res)=>{
    res.send('获取')
})

app.post('/addarticle',(req,res)=>{
    res.send('添加')
})

app.post('/delarticle',(req,res)=>{
    res.send('删除')
})
app.post('/updatearticle',(req,res)=>{
    res.send('编辑')
})

app.listen(8080,()=>{
    console.log(8080);
    
})
