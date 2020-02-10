
// 向同级目录下的message.json的内容插入一条记录

// 文件模块
const fs = require('fs');
// 路径模块
const path = require('path');

const DATA_FILE = "message.json"
// NB的优化：消除魔术数！

let filePath = path.join(__dirname,DATA_FILE)

/**
 * 获取留言
 */
const getMsg = ()=>{
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

/**
 * 添加留言
 * @param {*} name  用户名
 * @param {*} content  内容
 */
const addMsg = (name,content)=>{
    // 分析:如何向一个.json文件中添加一条数据
    // 思路：
    // 1. 读出文件内容，转成数组
    let arr = getMsg()
    
    // 2. 用数组的append方法，添加一条记录
    let obj = {
        id: arr.length+1,// 它是跟着数组长度变化而增长的
        name,
        content,
        dt:Date.now()
    }
    arr.push( obj )
    
    // 3. 把当前的数组写回到文件中去
    // 采用同步的写文件 writeFile
    // 把数组转字符串再写入
    fs.writeFileSync(filePath,JSON.stringify(arr))

    // console.log(arr);

    return arr
   
    // 传入name及content即可，id是自动增长的，dt是时间戳
}

const delMsg = id => {
    // 自已写代码
    // 作业
}

let rs = addMsg("小张","明天要休息一天")
let rs1 = addMsg("小陈","想的真美丽！程序员还有休息的时间吗？")

delMsg(1); // 删除id=1那一条数据

// console.log(rs)
