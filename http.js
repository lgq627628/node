const http = require('http');

http.createServer((req, res) => { // 开启一个服务
  console.log('请求来了'); // 如果你打开 http://localhost:8888 页面就会打印此消息
  // res.statusCode = 200; // 返回状态码，不写的话默认也是 200
  // res.setHeader('Content-Type', 'text/plain'); // 设置返回的请求头类型为普通文本
  // res.write('hello'); // 返回给页面的值，也就是页面会显示 hello
  // res.end(); // 必须有结束的标识，否则页面会一直处于加载状态
  // fs.createReadStream(filepath).pipe(res); 返回文件写这句就行了
  fs.createReadStream(filepath).pipe(res);
}).listen(8888); // 端口号
