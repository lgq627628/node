const path = require('path'); // 使用path模块可以正确处理操作系统相关的文件路径

let str = '/root/a/b/index.html';

console.log(path.dirname(str)); // 路径
// /root/a/b
console.log(path.extname(str)); // 后缀名
// .html
console.log(path.basename(str)); // 文件名
// index.html

// path.resolve() 路径解析，简单来说就是拼凑路径，最终返回一个绝对路径
var pathOne = path.resolve('.'); // 当前路径
let pathTwo = path.resolve('rooot/a/b', '../c', 'd', '..', 'e'); // 拼凑路径

// 一般用来打印绝对路径，就像下面这样，其中 __dirname 成为魔术变量，指的就是当前目录，算是个预处理命令，给编译器准备的，将来会由系统替换成真值
let pathThree = path.resolve(__dirname, 'build'); // 这个用法很常见，你应该在 webpack 中有见过

console.log(pathOne, pathTwo, pathThree, __dirname, process.argv);
// pathOne  =>  /Users/lgq/Desktop/node
// pathTwo  =>  /Users/lgq/Desktop/node/rooot/a/c/e
// pathThree  =>  /Users/lgq/Desktop/node/build
// __dirname  =>  /Users/lgq/Desktop/node
