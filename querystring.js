const querystring = require('querystring');

// 这个主要是用来解析 url 后面参数的，形如下面这样子的都可以：
let query = 'a=1&b=2&c=3';
let obj = querystring.parse(query);
console.log(obj, obj.a); // { a: '1', b: '2', c: '3' }   '1'

query = 'a=1&b=2&c=3&a=3'; // 如果参数重复，其所对应的值会变成数组
obj = querystring.parse(query);
console.log(obj); // { a: [ '1', '3' ], b: '2', c: '3' }

// 相反的我们可以用 querystring.stringify() 把对象拼凑成形如 url 后面参数的模样
query = querystring.stringify(obj);
console.log(query); // a=1&a=3&b=2&c=3
