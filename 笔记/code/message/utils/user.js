// 封装对user.json的操作，并导出


// 文件模块
const fs = require('fs');
// 路径模块
const path = require('path');

const DATA_FILE = "../db/user.json"
// NB的优化：消除魔术数！

// 拼接一个绝对路径
let filePath = path.join(__dirname,DATA_FILE)

/**
 * 获取message文件中的内容
 */
const get = () => {
    // 使用 同步 的方式读
    let rs = fs.readFileSync(filePath,'utf8')  
    // rs数据 是什么格式的？ string
    // json是一种特殊格式的字符串
    let arr = JSON.parse(rs) 
    // 把JSON字符串  ===》 JS中的数据-数组
    
    // console.log( typeof rs)
    // console.log( arr )
    // console.log(rs)
    return arr;
}

const login = (name,pwd) => {
   let arr =  get()
   return arr.find(item => (item.name == name && item.pwd == pwd))
}

/**
 * 添加用户
 * 传入name及pwd即可，id是自动增长的，dt是时间戳
 * 
 * @param {*} name  用户名
 * @param {*} pwd  内容
 * @param {*} avatar  头像
 * 
 */
const add = (name,pwd,avatar)=>{
    // 分析:如何向一个.json文件中添加一条数据
    // 思路：
    // 1. 读出文件内容，转成数组
    let arr = get()
    if(arr.find(it =>it.name == name)){
        return false
    }
    // 2. 用数组的append方法，添加一条记录
    // 数组的最后一个元素如何获取？ [3,4] 要长度减一。
    // let id = arr.length ? (arr[arr.length-1]["id"] + 1) : 1
    let id = 1;
    // 现在数组中有元素，则length肯定是大于0
    if(arr.length) {
        // 在最后一个元素的id的基础上加1
        id = arr[arr.length-1].id + 1
    } 

    let obj = {
        id,
        // id: arr.length+1,// 它是跟着数组长度变化而增长的
        name,
        pwd,
        avatar
    }

    arr.push( obj ) //追加到数组的尾部
    
    // 3. 把当前的数组写回到文件中去
    // 采用同步的写文件 writeFile
    // 把数组转字符串再写入
    fs.writeFileSync(filePath,JSON.stringify(arr))
    // console.log(arr);
    return arr
}

/**
 * 删除
 * @param {*} id  要删除的那一条记录的id号
 * 
 * message.json中保存了很多记录
 */
const del = id => {
    // 自已写代码
    // 思路：
    // 1. 取出全部的数据，得到一个数组
    let arr = get();
    // 2. 在数组中找出id值为指定参数的那条记录，然后删除它。
    //  找出索引，
    let idx = arr.findIndex(item => item.id == id)
    console.log(idx);
    //  调用splice
    //  在一个数组中删除下标为idx的元素
    arr.splice(idx, 1)
    // 3. 把删除了记录之后数组写回到文件中
    // 采用同步的写文件 writeFile
    // 把数组转字符串再写入
    fs.writeFileSync(filePath,JSON.stringify(arr))
}

/**
 * 修改 message.
 */
const update = () => {

}
module.exports = {
    get,
    add,
    del,
    login
}