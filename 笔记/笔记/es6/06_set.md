##  Set对象

Set是集合的意思。是ES6 中新增的内置对象，它类似于数组，但是`成员的值都是唯一的，即没有重复的值`。使用它可以方便地实现用它就可以实现**数组去重**的操作。

### 创建set对象

- 创建空set；

- 根据已有数组创建set

```js
// 1. 基本使用
let set = new Set();
// 得到一个空的Set对象

let set = new Set([1,2,3])
```



### Set 的成员方法

- `size`：属性，获取 `set` 中成员的个数，相当于数组中的 `length`
- `add(value)`：添加某个值，返回 Set 结构本身。
- `delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
- `has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
- `clear()`：清除所有成员，没有返回值。
- ` forEach`:遍历

### 应用-数组去重

```javascript
let arr = [1,1,2,3,3];
console.info([...new Set(arr)])
```

