const fs = require('fs');

// 文件路径，内容，回调
let arr =  [{id:1,name:'test'}];

fs.appendFile('./test.txt','\n'+JSON.stringify(arr),err => {
    if(err){
        console.log(err)
    } else {
        console.log('完成写入')
    }
})
