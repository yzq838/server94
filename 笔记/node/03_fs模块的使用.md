# fs模块

fs模块是nodejs用来进行文件操作的模块。fs是 FileSystem的简写。它属于**核心模块**，你引入fs之后就可以直接使用了。

官方手册：http://nodejs.cn/api/fs.html

核心模块的使用步骤：

1. 引入模块

   ```javascript
   // 引入模块
   const fs = require('fs');
   // 可以使用var、let，但是建议使用const，因为我们不希望它被改变。
   // 名字不必大写成FS，一般也就叫fs这个名字。
   ```

2. 调用api实现自己的要求

   ```javascript
   fs.apiName()
   ```

   

fs模块中操作文件(或者文件夹)的方法，大多都提供了两种选择：

- 同步版本的 （方法名上有Sync）
- **异步版本**的

## 文件内容读取 - readFile

### 异步格式

```js
fs.readFile('文件路径'[,选项], function (err, data) {
  if (err) throw err;
  console.log(data);
});
```

说明：

- 参数1：文件路径。 相对路径和绝对路径均可。
- 参数2： 配置项，可选参数，可不写。主要用来配置字符集。一般可设置为'utf8'

​      如果不设置该参数，文件内容会Buffer形式返回。

- 参数3: 读取完成后触发的回调函数。这个回调函数在读完文件后自动被nodejs自动调用，并传入 err 和 data

  - 如读取成功

    - err: null

    - data: 文件内容，如果不设置参数2,则返回二进制数据。可以使用 toString() 方法将二进制数据

      转为正常字符串

  - 如读取失败

    - err: 错误对象
    - data: undefined

示例：

```javascript
const fs = require("fs")
fs.readFile('文件路径',"utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### 同步格式

与异步格式不同在于：

- api的名字后面有Sync（async是异步的，sync表示同步的）
- 不是通过回调函数来获取值，而是像一个普通的函数调用一样，直接获取返回值

```javascript
const fs = require("fs")
let rs = fs.readFileSync('文件路径',"utf8");
console.log(rs)
```



## 文件写入 

### 覆盖写入 writeFile

功能：向指定文件中写入字符串， 如果没有该文件则尝试创建该文件。它是覆盖写入：会把文件中的内容全部删除，再填入新的内容。

格式：

```javascript
fs.writeFile(pathName, content, option, callback);
参数1: 要写入的文件路径 --- 相对路径和绝对路径均可，推荐使用绝对路径
参数2: 要写入文件的内容
参数3: 配置项，设置写入的字符集，默认utf-8
参数4: 写入完成后触发的回调函数，有一个参数 --- err （错误对象）
```

示例

```javascript
const fs = require('fs')
fs.writeFile('./a.txt', 'hello world niahi \n 换一行', err => {
  if (err) {
    console.info(err)
    throw err
  }
})
```



### 文件追加 appendFile

功能 ：向指定文件中写入字符串（追加写入）， 如果没有该文件则尝试创建该文件。

格式：

```
fs.appendFile(pathName, content, option, callback);
参数1: 要写入的文件路径 --- 相对路径和绝对路径均可，推荐使用绝对路径
参数2: 要写入文件的字符串
参数3: 配置项，设置写入的字符集，默认utf-8
参数4: 写入完成后触发的回调函数，有一个参数 --- err （错误对象）
```

示例：

```javascript
const fs = require('fs')

fs.appendFile('./a.txt', '\n 为天地立命', err => {
  if (err) {
    console.info(err)
    throw err
  }
})
```



## 路径问题

`在读取文件时，使用相对路径是容易出问题的`。

下面我们来看会出什么问题。

假设有如下两个文件，它们所处的目录及文件名如下所示：

```
day02/02code-nodejs/03.fs.js
day02/02code-nodejs/03.fs.txt
```

03.fs.js代码的作用是读出03.fs.txt中的内容，并显示出来。由于03.fs.js和要读取的目标03.fs.txt是在同级目录下，所以可以写相对路径始下：

```javascript
// 03.fs.js
const fs = require('fs');
fs.readfilesync("./03.fs.txt",'utf8'); 
//注意这里对text.txt的访问使用的是相对"fs.js" 本身的路径
```



现在，我们想要运行03.fs.js这个文件有多种方式，根据当前处在的位置不同：

- 如果终端中的路径定位在`day02/02code-nodejs目录下，则通过`node 03.fs.js`

- 如果终端中的路径定位在`day02`目录下，则通过：`node 02code-nodejs/03.fs.js` 

  此时就不能正确找到文件了。

我们分析一下这个问题： 我们在fs中读取文件时，由于使用的是相对路径，所以在读这个文件的时，nodejs会去这里：`运行命令的小黑窗的路径 + 代码中的相对路径` 找它。而由于我们通过cd命令修改了运行这个js文件的小黑窗的路径，所以导致nodejs不能找到这个文件了。

解决方法: 就是在操作文件时，使用**绝对路径**来定位文件。

## \__dirname __filename 获取绝对路径

相对与路绝位置在前面的学习中也有涉及，例如a标签的 href ，img标签的src属性在设置值时都可以写相对或者绝对地址。

例如：

```html
<a href="./index.html">相对地址</a>
<a href="https://www.baidu.com/index.html">绝对地址</a>
```

这里提到的

> 绝对路径： 从磁盘根目录开始到指定文件的路径。
>
> 相对路径：是以某个文件的位置为起点，相对于这个位置来找另一个文件。



nodejs中提供了两个全局变量来获取获取绝对路径：

- __dirname：获取当前被执行的文件的文件夹所处的绝对路径
- __filename：获取当前被执行的文件的绝对路径

全局变量的含义是：

- 变量：它们的值是变化的。在不同的文件中值就不同。
- 全局：在任意地方都可以直接使用。

## path模块

官网文档地址：http://nodejs.cn/api/path.html#path_path 。它是也是node中的核心模块，作用是用来处理路径问题：拼接，分析，取后缀名等等。

 使用步骤：

1. 引入模块。

```
const path = require('path')
```

2. 使用模块。

下面是几个常用的api。

- path.basename（） ：此方法返回 `path` 的最后一部分。一般可用来获取路径中的文件名。

- path.join() ：路径拼接。
- path.parse(path) ：把一个路径转成一个对象

示例

```javascript
path.basename('/foo/bar/baz/asdf/quux.html');// 返回: 'quux.html'
path.basename('/foo/bar/baz/asdf/quux.html', '.html');// 返回: 'quux'
path.dirname('/foo/bar/baz/asdf/quux');// 返回: '/foo/bar/baz/asdf'
path.extname('index.html');// 返回: '.html'
```

注意：不考虑其中地址是否真的存在，只是单纯调用方法，获取结果。



## 实操

> 通过fs模块，实现对json文件的操作。

message.json

```json
[{"id":1,"name":"test","content":"测试发言内容","dt":1581171783658}]
```

实现功能：

- 读出。从message.json文件中读出内容，以js数组格式返回。

- 添加。传入name及content即可，id是自动增长的，dt是时间戳。

  



## 附：fs模块中的常用方法

| API                                         | 作用              | 备注           |
| ------------------------------------------- | ----------------- | -------------- |
| fs.access(path, callback)                   | 判断路径是否存在  |                |
| fs.appendFile(file, data, callback)         | 向文件中追加内容  |                |
| fs.copyFile(src, callback)                  | 复制文件          |                |
| fs.mkdir(path, callback)                    | 创建目录          |                |
| fs.readDir(path, callback)                  | 读取目录列表      |                |
| fs.rename(oldPath, newPath, callback)       | 重命名文件/目录   |                |
| fs.rmdir(path, callback)                    | 删除目录          | 只能删除空目录 |
| fs.stat(path, callback)                     | 获取文件/目录信息 |                |
| fs.unlink(path, callback)                   | 删除文件          |                |
| fs.watch(filename[, options]\[, listener])  | 监视文件/目录     |                |
| fs.watchFile(filename[, options], listener) | 监视文件          |                |
| fs.existsSync(absolutePath)                 | 判断路径是否存在  |                |

## 附：path模块常用方法列表

| 方法                       | 作用                               |
| -------------------------- | ---------------------------------- |
| path.basename(path[, ext]) | 获取返回 path 的最后一部分(文件名) |
| path.dirname(path)         | 返回目录名                         |
| path.extname(path)         | 返回路径中文件的扩展名(包含.)      |
| path.format(pathObject)    | 将一个对象格式化为一个路径字符串   |
| path.join([...paths])      | 拼接路径                           |
| path.parse(path)           | 把路径字符串解析成对象的格式       |
| path.resolve([...paths])   | 基于当前**工作目录**拼接路径       |

