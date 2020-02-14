
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
 * 删除
 * @param {*} id  要删除的那一条记录的id号
 */
const delMsg = id => {
    // 自已写代码
    // 思路：
    // 1. 取出全部的数据，得到一个数组
    let arr = getMsg();
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
delMsg(5); // 删除id=5那一条数据

