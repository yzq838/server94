

// 通过代码的方式：把用户 老王，密码 520 添加users表中

// 1. 引入包
var mysql      = require('mysql');

// 2.配置
var connection = mysql.createConnection({
  host     : 'localhost', // 你要连接的数据库服务器的地址
  user     : 'root',     // 连接数据库服务器需要的用户名
  password : 'root',     // 连接数据库服务器需要的密码
  database : 'database94'     //你要连接的数据库的名字
});

 
// 3. 连接
connection.connect();
 
// 4. 执行sql
// 格式：connection.query(sql语句,(err,data)=>{
  // 如果执行sql出错，则err就有值，
  // 没有错误，执行结果就保存在data中。
// })
var name = "亮亮";
var pwd = "123"
let sqlStr = `insert into users(name,pwd) values("${name}","${pwd}")`
connection.query(sqlStr,(err,data)=>{
  if(err){
    console.log(err); 
  } else {
   
    // 对于添加操作来说，data
    // 如果添加成功，则data是一个对象 
    // 根据受影响的行数来判断是否添加成功
    console.log(data)
    if(data.affectedRows === 1) {
      console.log("添加成功")
    }
    
  }
} );
 
// 5.关闭
connection.end();