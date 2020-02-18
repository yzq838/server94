// 1. 引入包
var mysql      = require('mysql');

// 2.配置
var connection = mysql.createConnection({
  host     : 'localhost', // 你要连接的数据库服务器的地址
  user     : 'root',     // 连接数据库服务器需要的用户名
  password : 'root',     // 连接数据库服务器需要的密码
  database : 'database'     //你要连接的数据库的名字
});

// var connection = mysql.createConnection({
//     host     : 'bdm289537170.my3w.com',   // 你要连接的数据库服务器的地址
//     user     : 'bdm289537170',        // 连接数据库服务器需要的用户名
//     password : 'ABCabc123',        // 连接数据库服务器需要的密码
//     database : 'bdm289537170_db'      //你要连接的数据库的名字
//   });
 
// 3. 连接
connection.connect();
 
// 4. 执行sql
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
// 5.关闭
connection.end();