const fs = require('fs');
const zlib = require('zlib');

// 流式操作，一直读取，是连续的，如果一边快一边慢，它会自动处理，不用我们自己去调整误差
// 读取流：fs.createReadStream();
// 写入流：fs.createWriteStream();

let rs = fs.createReadStream('a.txt');
let ws = fs.createWriteStream('a2.txt');

rs.pipe(ws);
rs.on('error', err => {
  console.log(err);
});
ws.on('finish', () => {
  console.log('成功');
})
