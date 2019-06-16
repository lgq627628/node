const url = require('url');

let site = 'http://www.xr.com/a/b/index.html?a=1&b=2';
// url.parse() 解析各种参数，参数一样会自动合并到对象的数组里
let urlObj = url.parse(site, true); // true 的意思是把参数解析层对象

console.log(urlObj);
// /a/b/index.html  { a: '1', b: '2' }
