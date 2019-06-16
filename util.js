const util = require('util');

// 把一个 callback 包装成 promise
console.log(util.isArray([]));
// 将任意对象转换 为字符串的方法
console.log(util.inspect({}));
console.log(util.isRegExp(/xr/));
