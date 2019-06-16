const crypto = require('crypto');

// const hash = crypto.createHash('md5');
const hash = crypto.createHash('sha1');

// 可任意多次调用update():
// hash.update('Hello, world!');
// hash.update('Hello, nodejs!');
hash.update('xr');

console.log(hash.digest('base64')); // 7e1977739c748beac0c0fd14fd26a544
