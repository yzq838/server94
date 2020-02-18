// 由于四个操作：
// 添加
// 删除
// 修改
// 查询
// 在代码上，只是sql语言不一样，其它都是一样的，
// 所以，我们打算封装一个模块： 输入sql,得到结果

var mysql      = require('mysql');

/**
 * 
 * @param {*} sql  要执行的sql语句
 * @param {*} callback  执行sql之后的回调
 */
function doSQL(sql,callback){
    var connection = mysql.createConnection({
        host     : 'localhost', // 你要连接的数据库服务器的地址
        user     : 'root',     // 连接数据库服务器需要的用户名
        password : 'root',     // 连接数据库服务器需要的密码
        database : 'database94'     //你要连接的数据库的名字
      });
    connection.connect();
    connection.query(sql,(err,data)=>{
        // sql执行成功之后做什么
        callback(err,data)
    });
    // connection.end();
}

// 导出模块
module.exports = {
    doSQL
}
//---------------------对doSQL函数的测试-------------------

// doSQL("select id,name from users",function(err,data){
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log(data);  
//     }
// })

// doSQL("insert into users(name,pwd) values('小王','123456')",
//     function(err,data){
//         if(err){
//             console.log(err);
//         }
//         else {
//             console.log(data);  
//         }
//     }
// )

// doSQL('delete from users where name="老王"',function(err,data){
//         if(err){
//             console.log(err);
//         }
//         else {
//             console.log(data);  
//         }
//     }
// )
// 把小王密码改成123
// doSQL('update users set pwd="123" where name="小王"',function(err,data){
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log(data);  
//     }
// })
