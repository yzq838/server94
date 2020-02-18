// 目标：写一个模块来对 database/user.json进行操作
const fs = require("fs")
const path = require("path")

// 找到要操作的user.json的路径
const FILE_PATH = path.join(__dirname,"../database/user.json")
// console.log(FILE_PATH);

// 获取
const get = ()=>{
    // 1. 读出user.json文件中的内容
    let fileStr = fs.readFileSync(FILE_PATH, 'utf8');
    // console.log(fileStr);
    
    // 2. 转成json对象
    let arr = JSON.parse( fileStr )
    // 3. 返回
    return arr
}

/***
 * 添加
 * name: 用户名
 * pwd: 密码
 * avatarUrl: 头像地址
 */
const add = (name,pwd,avatarUrl) => {
    // 1. 获取数据，数组格式
    let arr = get();
    // 2. 向数组中添加一个对象
    // 原数组的最后一个元素的id+1
    let id = arr.length ? arr[arr.length - 1].id + 1 : 1 
    arr.push({
        id,
        name,
        pwd,
        avatarUrl
    })
    // 3. 写回去user.json文件
    fs.writeFileSync(FILE_PATH, JSON.stringify(arr))

    // 4. 返回新数据
    return arr;
}

// 导出模块
module.exports = {
    "add":add,
    "get":get
}

// 测试
// var result = get()
// console.log(result);
// add("ok","123","avatar/aaa")
// 添加

