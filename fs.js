const fs = require('fs');

// 写入文件：fs.writeFile(path, data, cb);
fs.writeFile('./text.txt', 'hello xr!', err => {
  if (err) {
    console.log('写入失败', err);
  } else {
    console.log('写入成功');
  }
});

// 读取文件：fs.readFile(path, cb);
fs.readFile('./text.txt', (err, fileData) => {
  if (err) {
    console.log('读取失败', err);
  } else {
    console.log('读取成功', fileData.toString()); // fileData 是二进制文件，非媒体文件可以转换一下
  }
});

// 复制文件：fs.copyFile(form, to, cb);
fs.copyFile('./a.txt', './a2.txt', () => {});

// 追加数据：fs.appendFile(path, data, cb); 这个会在原来的文件最后继续添加内容
fs.appendFile('./a.txt', '这是追加的数据', () => {});

fs.stat('./a.txt', (err, fileInfo) => console.log(fileInfo));
// 和流的区别
// fs 是先把整个文件读到服务器的内存里面，然后在一次发出去。
// 所以去缺点是过于占用内存
// 资源使用不均匀（先读取后发送两个独立步骤）
// 所以更好的做法是边读边发，也就是流
