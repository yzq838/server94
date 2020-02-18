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
connection.query('select id,name from users where name="小豪豪" and pwd="1888"',(err,data)=>{
  if(err){
    console.log(err); 
  } else {
    // console.log(Array.isArray(data) )
    // // 对于查询操作来说，data就是一个数组
    // // 如果查询不到数据，则返回空数组
    // data.forEach(item => {
    //   console.log(item);
    // })
    // console.log(data)
    if(data.length > 0) {
      console.log("用户名，密码正确")
    } else {
      console.log("用户名密码错误！")
    }
  }
} );
 
// 5.关闭
connection.end();