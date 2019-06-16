// 假如 http 请求的是文件
const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

let root = path.resolve(process.argv[2] || '.'); // 获取服务器根目录
console.log(root);

http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname;
  let filepath = path.join(root, pathname); // 要请求的文件路径
  fs.stat(filepath, function (err, stats) { // 这个接口能提供文件的相关信息
    if (!err && stats.isFile()) {
      // 没有出错并且文件存在:
      console.log('200 ' + req.url);
      // 发送200响应:
      res.writeHead(200);
      // 将文件流导向res:
      fs.createReadStream(filepath).pipe(res);
    } else {
      // 出错了或者文件不存在:
      console.log('404 ' + req.url);
      // 发送404响应:
      res.writeHead(404);
      res.end('404 Not Found');
    }
  });
}).listen(8888);
