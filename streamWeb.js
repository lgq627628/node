const http = require('http');
const zlib = require('zlib');
const url = require('url');
const fs = require('fs');
const path = require('path');

let root = path.resolve(process.argv[2] || '.'); // 获取服务器根目录

http.createServer((req, res) => { // req 和 res 本质也是个流
  let {
    pathname
  } = url.parse(req.url, true);
  let filepath = path.join(root, pathname); // 要请求的文件路径
  // let rs = fs.createReadStream(filepath);
  // rs.pipe(res);

  fs.stat(pathname, (err, stat) => {
    console.log(err);
    if (err) {
      //res.setHeader('content-encoding', 'deflate'); // deflate 指的是普通文件（buffer 文件）不需要压缩处理的意思，没设置的话就是普通字符串
      res.writeHeader(404); // 不仅设置还发送
      res.write('not found'); // res.write(Buffer.from('not found'));
      res.end();
    } else {
      let rs = fs.createReadStream(filepath);
      rs.on('error', err => {}); // 读取过程中失败
      res.setHeader('content-encoding', 'gzip'); // 需要告知浏览器怎么处理
      let gz = zlib.createGzip();
      rs.pipe(gz).pipe(res);
    }
  });
}).listen(8888);
