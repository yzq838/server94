

![image-20200217140314796](asset/image-20200217140314796.png)

- 掌握四种sql语句
- 能在**nodejs中写代码来运行sql**语句



# mysql数据库

## 数据库简介

### 什么是数据库

`database`:保存和管理数据的仓库，数据库。

什么是数据：文件，图片，视频，订单，用户名，密码等等。这些数据都需要有专门的地方来保存和管理。

在我们没有学习数据库技术之前，我们使用的数据都是以文件系统（db.json）的方式保存的。我们需要一个**专门的软件来管理我们的数据**, 这就是数据库。

数据库软件可以大致分成两大阵营

- 关系型数据库，代表产品：
  - **MySQL**
  - Oracle
  -  Sql server
  - DB2
- 非关系型数据库
  - **redis** 键值存储数据库
  - HBaise列存储数据库
  - **mongodb** 面向文档数据库
  - neo4j 图形数据库
  - Elasticsearch 搜索引擎存储

参考：数据库使用排名 <https://db-engines.com/en/ranking>

![1575526151015](asset/数据库排名.png)

### 理解关系型数据库

在关系型数据库中，存在三级关系：

- 数据库
- 数据表
- 字段

数据表的结构和**excel**一模一样：

<img src="asset/1575526384878.png" alt="1575526384878" style="zoom:33%;" />



- 每一列都是一类数据 --- `字段`
- 每一行代表一条数据 --- `记录`

 

| 数据库       | excel文件                |
| ------------ | ------------------------ |
| 数据库       | excel文件                |
| 数据表       | excel文件中的某一个sheet |
| 表结构：字段 | sheet中的表头：列        |



### MySQL简介

<img src="asset/1562659793142.png" alt="1562659793142" style="zoom: 25%;" />

MySQL是一个关系型数据库管理系统，由瑞典MySQL AB 公司开发，目前属于 Oracle 旗下产品 。MySQL所使用的 SQL 语言是用于访问[数据库](https://baike.baidu.com/item/数据库/103728)的最常用标准化语言。

- 体积小、速度快、总体拥有成本低，一般中小型网站的开发都选择 MySQL 作为网站数据库。
- 搭配 [PHP](https://baike.baidu.com/item/PHP) 和 [Apache](https://baike.baidu.com/item/Apache) 可组成良好的开发环境。



3p技术：php,asp,jsp



### 安装MySQL

- 单独安装mysql

  - 官网下载：<https://www.mysql.com/downloads/>

- 集成安装

  由于mysql,apache,php是经典的开者伙伴，市面上有很多的集成环境（一个大的软件，其中已经配置好了这三个软件），我们也可以使用它们。优点在于：基本不需要配置，使用比较方便。这样的集成环境有：

  - wampserver

  -  `phpstudy`

  - appserv

我们以phpstudy为例，去官网下载安装。值得提醒的是，当我们安装完MySQL后，我们的计算机又变成服务器了，不过不是Web服务器，而是MySQL数据库服务器了。

## phpstudy-mysql-front中操作数据库

phpstudy[下载](https://www.xp.cn/) ，安装

最新版(2018)需要额外去装一下SQL_front

### 启动phpstudy中的mysql

开启了mysql服务器（这个服务器就在你的电脑上，理解我们平时开启小黑窗）

接下来就是要连接上这个mysql服务器。

<img src="asset/image-20200217095648896.png" alt="image-20200217095648896" style="zoom:50%;" />

推荐使用sql_front来连接mysql服务器。你也可以使用phpMyAdmin去连接mysql服务器。

<img src="asset/image-20200217115545847.png" alt="image-20200217115545847" style="zoom:50%;" />

### 安装sql_front管理工具

<img src="asset/mysql.png" alt="mysql" style="zoom:50%;" />

### 启动sql_front



### 建立连接

- 先启动phpstudy（启动mysql）

  <img src="asset/image-20200216234642029.png" alt="image-20200216234642029" style="zoom:50%;" />

- 建立连接

  host:表示主机。由于mysql是安装在你自已电脑上的，所以这里直接填入localhost。

  默认用户名密码都是root。

  

  <img src="asset/1575617520761.png" alt="1575617520761" style="zoom:50%;" />

### 新建数据库

看到如下内容，就表示，你通过mysql_front连接上了你的数据库服务器了。

<img src="asset/1566217626323.png" alt="1566217626323" style="zoom: 50%;" />



在弹出的窗口中填写数据库名即可。

<img src="asset/1566217681176.png" alt="1566217681176" style="zoom:50%;" />

### 新建数据表



<img src="asset/1566217854988.png" alt="1566217854988" style="zoom:50%;" />

得到的效果如下：

<img src="asset/1566218476941.png" alt="1566218476941" style="zoom: 50%;" />



### 添加字段

<img src="asset/1566218596477.png" alt="1566218596477" style="zoom:50%;" />

得到如下：

<img src="asset/1566218674687.png" alt="1566218674687" style="zoom:50%;" />

### 添加数据

![1566346995067](asset/1566346995067.png)





![image-20200217141614917](asset/image-20200217141614917.png)



### 连接不上怎么办？

- 是否打开了mysql服务器。
- sql_front连不上。
- 使用phpAdmin试一试 。 <img src="asset/image-20200217115545847.png" alt="image-20200217115545847" style="zoom:50%;" />
- 最后，可以使用远程的数据库。我在阿里上买的数据库。
  - url: https://dms-net.aliyun.com/?spm=cp-aliyun-com.10698423.101.d4.60517231LcLLDp&host=bdm289537170.my3w.com&port=3306&dbType=MySQL&userName=bdm289537170
  - <img src="asset/image-20200217120334622.png" alt="image-20200217120334622" style="zoom:80%;" />

## SQL语句

结构化查询语言(Structured Query Language)简称SQL，用来操作关系型数据库：

- 是一种数据库查询和程序设计语言，用来存取数据以及查询、更新、和管理关系型数据库。

- 数据库脚本文件的扩展名。



常用的sql语句有四类，分别对应对数据的四种操作：

- 增(create）(用户注册)
- 删(delete)  （删除订单）
- 改(update)  （修改密码）
- 查(read)  （搜索，用户登陆）

### 在mysql-front中运行sql

![image-20200216225220255](asset/image-20200216225220255.png)

### 添加数据

格式: 

```SPARQL
 insert into 表名(字段名1，字段名2,....)  values (值1，值2，....)
```

 注意: 

- 字段的顺序要和值的顺序是完全匹配的
- 字段列表可以不与真实数据表中的字段完全相等，
  - 可以省略一些不必要的字段
  - 顺序与不需要与定义表时的顺序一致
-  如果是字符串类型的字段，其值要加""，如果是数值类型的字符串，其值不需要加“”

示例:

```sql
insert into stu (sex, weight, name) values ('男', 60, '庞凯')
```

### 删除数据

格式: 

```
 delete  from 表名  where 删除条件
```

注意：

- 不指定条件将删除所有数据

示例：

```sql
-- 删除id为14的同学
delete from stu where id=14

-- 删除的时候，不加条件，将删除stu表中的全部记录
delete from stu
```



### 修改数据

格式:  

 ```
update 表名 set 字段1=值1, 字段2=值2,...  where 修改条件
 ```

注意：

	- 要修改的值使用键值对来表示 
	- 多个字段用,分隔
	- 不指定条件，将修改当前表中全部的记录



示例：

```sql
-- 修改id为1的同学的年龄为53
update stu set age=53 where id = 1

-- 修改id为1的同学的年龄为35，身高为160
update stu set age=35,height=160 where id = 1

-- 如果修改的时候，不加条件，则会修改全部的数据
update stu set weight = 60

```



### 数据查询

作用：是把数据从数据库查出来

格式: 

```
SELECT  字段名1, 字段名2, .....  FROM 表名	WHERE <条件表达式>
```

示例：

 ```sql
# 查询部分字段
SELECT id,name,age FROM stu
# 查询所有字段
SELECT * FROM stu
# 带条件的查询
SELECT * FROM 表名 WHERE 条件1 and 条件2
 ```



## SQL 高级查询(了解)

### where子句

select  field1, field2... from 表名  查询表中的所有数据

  where 可以使用条件来筛选查询出的结果

![2img](asset/01.jpg) 

 ```sql

-- 查询所有的学生
select * from stu

-- 查询所有学生的id，name，height
select id,name,height from stu

-- 带条件的查询
select * from stu where 条件

-- 查询所有的男同学
select * from stu where sex='男'

-- 查询年龄大于50的同学
select * from stu where age > 50

-- 查询年龄大于50岁的男同学
select * from stu where age>50 and sex='男'

-- 查询年龄在30~60之间的同学，包括30和60
select * from stu where age>=30 and age<=60
select * from stu where age between 30 and 60
 ```



案例3: 查询学号为2的学生的所有信息

表： stu

字段： 所有字段  *

筛选条件：  id=2

```sql
select * from stu where id = 2
# 相等判断，写一个等号
```



案例4: 查询年龄大于等于25的学生的学号、姓名、年龄

表： stu

字段： id,name,age

筛选条件： age>=25

```sql
select id,name,age from stu where age >= 25
```



案例5: 查询年龄在23-28之间的学生的所有信息

表： stu

字段： *

筛选条件： 

```sql
select * from stu where age >= 23 and age <= 28

select * from stu where age between 23 and 28
```



### 模糊查询

通配符:

  %: 代表任意长度(包括0)的任意字符

  _:  代表1位长度的任意字符

```
a%b :  ab  abb  asdfb
a_b: acb  atb 
a_b%:  acb  a&baaad

```

like: 在执行模糊查询时，必须使用like来作为匹配条件

```sql
-- 模糊查询
-- 查询姓王的同学
select * from stu where name like '王%'

-- 查询姓王的同学，要求完整的姓名必须是三个字
select * from stu where name like '王__'

-- 查询名字中带有王的人
select * from stu where name like '%王%'
```



### 查询结果排序

order by 可以对查询结果按某个字段进行升序或者降序排列

  升序 asc （默认值） ，  降序 desc 

可进行排序的字段通常是  整型  英文字符串型  日期型  (中文字符串也行,但一般不用)

```sql
-- select * from stu order by 字段 排序方式, 字段 排序方式
-- 查询所有的学生，按年龄升序排列
select * from stu order by age asc
select * from stu order by age

-- 查询所有的学生，按年龄降序排列
select * from stu order by age desc

-- 查询所有的学生，先按身高升序排列，如果身高相同再按id降序排列
select * from stu order by height asc, id desc

-- 查询所有的男同学，并按年龄降序排列
select * from stu where sex='男' order by age desc

```

注意：如果SQL语句中，有where和order by，where一定要放到order by之前



### 限制查询结果

limit 用来限制查询结果的起始点和长度

 格式:  limit  start, length

 start: 起始点。 查询结果的索引，从0开始。 0代表第一条数据。如果省略start，则默认表示从0开始

 length: 长度

```sql
-- 查询前3个同学
-- select * from stu limit 0, 3

-- 查询第3到第5名同学
-- select * from stu limit 2,3

-- 查询年龄最大的三个同学
-- select * from stu order by age desc limit 0,3

-- 查询年龄最大的三个男同学
-- select * from stu where sex='男' order by age desc limit 0,3
select * from stu where sex='男' order by age desc limit 3
```

注意：where、order by、limit如果一起使用，是有顺序的，where在最前面、其次是order by、limit要放到最后==。



### 连接查询

连接查询意思是将两个表或更多张表连接到一起查询。查询的结果一般会包含有两个表的全部结果。

不是说任意的两个表都可以连接查询；能够连接查询的两个表必须有关系才行。

连接查询的语法：

```mysql
select * from 表1 , 表2 where  两个表的关系
```

创建两个表:类别表和文章表：

```
// 类别表
CREATE TABLE IF NOT EXISTS `categroy` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `slug` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='文章类型表' AUTO_INCREMENT=1;
```



```
//文章表
CREATE TABLE IF NOT EXISTS `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cateid` int(11) NOT NULL,
  `title` varchar(20) NOT NULL,
  `content` varchar(50) NOT NULL,
  `dt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='文章表' AUTO_INCREMENT=1;
```

这两个表的关系是 category.id = article.cateid

```bash
//插入数据
insert into article (cateid,title,content) value(1,"我要拿什么爱你","我要拿什么爱你呢？");
insert into categroy (name,slug) value ('科学','kexue');
//选出数据
 select article.id,title,content,name,dt from article,categroy where article.cateid=categroy.id;
```





## 附：mysql命令行

启动mysql命令行工具，就使用sql来操作数据库啦。

### 显示所有数据库

`show databases;`

### 创建数据库

`create database 数据库名;`

### 使用某个数据库

`use 数据库名；`

### 建立数据表

格式：

```
create 表名(
字段名 类型（长度） 是否可为空 其它修饰
)
```

示例：

```
CREATE TABLE IF NOT EXISTS `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sno` int(11) NOT NULL,
  `sname` varchar(10) NOT NULL,
  `sage` varchar(50) NOT NULL,
  `sgender` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COMMENT='学生表' AUTO_INCREMENT=1;
```

### 显示数据表

`show tables;`

### 修改表名

`rename table 原表名 to 新表名；`

### 删除数据库

`drop database if exists school; `

//如果存在SCHOOL则删除

### 删除数据表

`drop table 数据表名;`



### 查看表结构

`desc tabl_name;`





### phpstudy中文乱码

<img src="asset/1566377317686.png" alt="1566377317686" style="zoom:50%;" />





# node操作mysql

通过mysql这个包来操作mysql数据库。

mysql模块是一个第三方模块，专门用来操作MySQL数据库。 

```shell
# 安装
npm i mysql
```

## 基本用法

参考：https://www.npmjs.com/package/mysql#introduction

### 直接使用

1.直接使用：

一共需要5个步骤：

1) 加载 MySQL 模块

2) 创建 MySQL 连接对象

3) 连接 MySQL 服务器

**4) 执行SQL语句**           

5) 关闭链接。

```javascript
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'me',
  password : 'secret',
  database : 'my_db'
});
 
var connection = mysql.createConnection({
  host     : 'bdm289537170.my3w.com',   // 你要连接的数据库服务器的地址
  user     : 'bdm289537170',        // 连接数据库服务器需要的用户名
  password : 'ABCabc123',        // 连接数据库服务器需要的密码
  database : 'bdm289537170_db'      //你要连接的数据库的名字
});

connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 
connection.end();
```



参考地址： https://www.npmjs.com/package/mysql#introduction 

### 使用连接池

```
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'example.org',
  user            : 'bob',
  password        : 'secret',
  database        : 'my_db'
});
 
pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
```

参考地址： https://www.npmjs.com/package/mysql#pooling-connections 

### 查询

执行查询类型的SQL语句，查询结果（result）是一个数组，每个单元是对象，对象的属性是数据表的字段名。



```js
// 1. 加载mysql
const mysql = require('mysql');
// 2. 创建连接对象
const conn = mysql.createConnection({
    // 对象的属性名字不能改变
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'qishiliu'
});
// 3. 连接到MySQL服务器
conn.connect();
// 4. 执行SQL语句
let sql = 'select id,name,age from stu';
conn.query(sql, (err, result, fields) => {
    if (err) throw err; // throw err 相当于 return console.log(err);
    console.log(result); // result就是查询结果
});
// 5. 关闭连接，释放资源
conn.end();
```



###  添加

执行添加类型的SQL语句，查询结果（result）是一个对象，该对象中有两个属性要关注：

- affectedRows： 受影响行数
- insertID： 查询数据的主键值

占位符形式：

  数据添加时，占位符需要一个对象。 对象的属性是数据表字段名，值是要写入数据表的数据

```js
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'qishiliu'
});
conn.connect();

let sql = 'insert into users (name,password) values("小王","snv")'
conn.query(sql, (err, result) => {
    if (result.affectedRows > 0) {
        console.log('添加成功，新数据的id为：' + result.insertId);
    } else {
        console.log('添加失败');
    }
});

conn.end();
```

### 修改

执行修改类型的SQL语句，查询结果（result）是一个对象，该对象中有 affectedRows 属性，表示本次修改操作影响到的行数。

```js
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'qishiliu'
});
conn.connect();

// 更新
// update stu set 字段=值,字段=值 where id=11
let sql = 'update users set password="123" where name="小王"';

conn.query(sql, (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
        console.log('修改成功');
    } else {
        console.log('修改失败');
    }
});

conn.end();
```

### 删除

执行删除类型的SQL语句，查询结果（result）是一个对象，该对象中有 affectedRows 属性

```js
const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'qishiliu'
});
conn.connect();

// 删除
let sql = 'delete from stu where id=1';

conn.query(sql,(err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
        console.log('删除成功');
    } else {
        console.log('删除失败');
    }
});

conn.end();
```



## 模块化封装

分析上面几个单独的功能点，它们基本的语法格式是一致的，只是要执行的sql语句不同而已，所以，我们可以对它们进行一个简单的封装。然后再写测试文件对其进行测试。

涉及两个文件：

- sqltool.js
- sqltooltest.js

### 回调函数封装

模块名：sqltool.js

![1575621544199](node-mysql讲义.assets/1575621544199.png)

```javascript
// 由于四项（insert,delete,update,select）操作只是sql语句不同
// 封装一个函数

function exeSql(sql,callback){
  var mysql      = require('mysql');

  // 配置连接信息
  var connection = mysql.createConnection({
    host     : 'localhost',   // 你要连接的数据库服务器的地址
    user     : 'root',        // 连接数据库服务器需要的用户名
    password : 'root',        // 连接数据库服务器需要的密码
    database : 'message'      //你要连接的数据库的名字
  });

  // 连接
  connection.connect();
 
  // connection.query(sql语句，回调(错误，数据){})
  connection.query(sql, function (err, data) {
    callback(err,data)
  });

  // 结束连接
  connection.end();
}
exeSql('select * from users',function(err,data){
  console.log('查询完成之后：');
  
  console.log(err);
  console.log(data);
})


 // 实现用户注册，添加一条新记录
  // 把用户名为 test，密码是123456的用户加入
// let name = "老王"
// let password = "666"
// let sql = `insert into users(username,password) values('${name}','${password}')`;
// console.log(sql);
// exeSql(sql,function(err,data){
//   console.log('添加完成之后：');
  
//   console.log(err);
//   console.log(data);
  
// })

```

这上面这个模块中，就定义了一个函数exeSql。它接收两个参数：参数1是要执行的sql语句；参数2是回调函数。

额外写一个测试文件 sqltooltest.js

```javascript
const sqltool = require('./sqltool');

// sqltool.exeSql('select * from users', (err, data) => {
//   console.log(err);
//   console.log(data);
// });

sqltool.exeSql('select * from users where username="小美1" and userpassword="666"', (err, data) => {
  console.log(err);
  console.log(data);
  if (data.length > 0) {
    console.log('用户名密码Ok');
  } else {
    console.log('用户名密码error');
  }
});

```



### 改用 promise来封装



```
/**
 *
 * @param {*} sql 要执行的sql语句
 * @param {*} callback sql执行完成之后的回调函数
 *
 * demo:
 * 
    let sql = 'select * from users where username="小花" and userpassword="456"';

    exeSql(sql, function(err, data) {
    if (err) {
        console.log('err');
    } else {
        console.log(data);
    }
    });
 */

function exeSql(sql, callback) {
  var mysql = require('mysql');
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'message' //你要连接的数据库名字
  });

  connection.connect();
  // 检查  用户名 小王，密码 123 是否正确
  // let sql = 'select * from users where username="小王" and userpassword="123"';
  connection.query(sql, function(error, results, fields) {
    // fields,表示本次操作涉及的字段

    callback(error, results);
  });

  connection.end();
}

function exeSqlPromise(sql) {
  var p = new Promise((resolve, reject) => {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'message' //你要连接的数据库名字
    });

    connection.connect();
    // 检查  用户名 小王，密码 123 是否正确
    // let sql = 'select * from users where username="小王" and userpassword="123"';
    connection.query(sql, function(error, results, fields) {
      // fields,表示本次操作涉及的字段
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
    connection.end();
  });
  return p;
}

//导出模块
module.exports = {
  exeSql: exeSql,
  exeSqlPromise: exeSqlPromise
};

```







# 改进留言板

## 登陆

1.安装mysql

2.引入自定义模块

sqltool.js

```
// 由于四项（insert,delete,update,select）操作只是sql语句不同
// 封装一个函数

function exeSql(sql,callback){
  var mysql      = require('mysql');

  // 配置连接信息
  var connection = mysql.createConnection({
    host     : 'localhost',   // 你要连接的数据库服务器的地址
    user     : 'root',        // 连接数据库服务器需要的用户名
    password : 'root',        // 连接数据库服务器需要的密码
    database : 'message'      //你要连接的数据库的名字
  });

  // 连接
  connection.connect();
 
  // connection.query(sql语句，回调(错误，数据){})
  connection.query(sql, function (err, data) {
    callback(err,data)
  });

  // 结束连接
  connection.end();
}

module.exports = {
  "exeSql": exeSql
}
```



3. 修改登陆接口

serverSession.js

```javascript
// 用户登陆---连接数据库进行判断
server.post('/login',(req,res)=>{
    let {name,password} = req.body;
    let sql = `select * from users where username='${name}' and password='${password}'`;
    sqltool.exeSql(sql,(err,data)=>{
        if(err){
            res.json( { code:500,msg:'服务器错误'})
        } else {
            if(data.length === 1){
                req.session.loginname = name
                req.session.logintime = Date.now()

                res.json( { code:200,msg:'登陆成功'})
            } else{
                res.json( { code:500,msg:'用户名密码错误'})
            }
        }
    }) 
})
```

## 注册

前端页面 reg.html

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="./assets/bootstrap.css" />
    <style>
      .login {
        width: 400px;
        margin: 50px auto;
      }
    </style>
    <title>留言板-用户注册</title>
  </head>
  <body>
    <div class="container">
      <div class="login shadow-sm p-5">
        <h3>留言板-用户注册</h3>
        <div class="form-group ">
          <label for="username">昵称</label>
          <input type="text" class="form-control" id="username" placeholder="昵称" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password" />
        </div>
        <div>
          <button class="btn" id="btn" type="button">注册</button>
        </div>
        <div class="text-right"><a href="./login.html">登陆</a> <a href="./index.html">主页</a></div>
      </div>
    </div>
    <script src="./jquery-1.8.1.js"></script>
    <script>
      $('#btn').click(function() {
        // 获取用户名和密码
        let name = $('#username').val().trim()
        let password = $('#password').val().trim()

        // 判断是否为空
        if(name === '' || password === ''){
          alert('不能为空')
          return
        }
        // 请求
        $.ajax({
          url:'http://localhost:8000/adduser',
          type:'post',
          data:{
            name, password
          },
          crossDomain: true,
          xhrFields: {
              withCredentials: true
          },
          success(res){
            if(res.code === 200){
              alert('注册成功！')
              location.href = "./login.html"
            } else {
              alert(res.msg)
            }
          }
        })
      });
    </script>
  </body>
</html>

```

后端接口

```javascript
// 用户注册---保存到数据库
server.post('/adduser',(req,res)=>{
    let {name,password} = req.body;
    let sql = `insert into users (username,password) values('${name}','${password}')`;
    sqltool.exeSql(sql,(err,data)=>{
        if(err){
            res.json( { code:500,msg:'服务器错误'})
        } else {
            console.log(data);
            res.json( { code:200,msg:'注册成功'})
        }
    }) 
})
```





## 改造添加留言接口

```

let obj = {
    add(msgObj){
        console.log('本次要添加的留言',msgObj);
        let {name,content,dt} = msgObj;

        let sql = `insert into words (name,content,dt) values('${name}','${content}',${dt})`;
        sqltool.exeSql(sql,(err,data)=>{
            console.log(err);
            console.log(data); 
        })
    }
}
```













![1575630994043](node-mysql讲义.assets/1575630994043.png)



