const http = require('http');
const url = require('url');
const mysql = require('mysql');
// 一般通过工具建立库，用node操作数据

// 1、首先要把数据库连接到服务器
let db = mysql.createConnection({
  // 服务器跟数据库只有一个连接，多个用户请求，当中有一次卡住，就会阻塞
  // 默认端口3306，一次只能一个请求，多个用户会阻塞，所以有了连接池
  // 一次性跟服务器请求十条链接 createPool
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'user_table' // 一般在工具里面建库
});

// 哪种操作都是 query 表
// db.query('SELECT * FROM user', (err, data) => {
//   if (err) {
//     console.log('查询出错', err);
//   } else {
//     console.log(data);
//   }
// });
// db.query('INSERT INTO user (id, name, phoneNo) VALUES(5, "张三", "1342432")', (err, data) => {
//   if (err) {
//     console.log('插入出错', err);
//   } else {
//     console.log(data);
//   }
// });

// 2、配合 http
http.createServer((req, res) => {
  const {
    pathname,
    query
  } = url.parse(req.url, true);
  if (pathname === '/reg') {
    let {
      id,
      age
    } = query;
    console.log(id, age);
    if (!id || !age) {
      res.writeHeader(404);
      res.write('paramas wrong');
      res.end();
    }
    db.query(`SELECT id FROM user WHERE age=${age}`, (err, data) => {
      if (err) {
        res.write('database wrong');
        res.end();
      } else if (data.length) {
        res.write('has reg');
        res.end();
      } else {
        db.query(`INSERT INTO user (id, name, phoneNo, age) VALUES(${id}, 'zz', '3434367', ${age})`, (err, data) => {
          if (err) {
            res.write('insert wrong');
            res.end();
          } else {
            res.write('insert ok');
            res.end();
          }
        });
      }
    });
  } else if (pathname === '/login') {

  } else {
    res.writeHeader(404);
    res.write('not Found');
    res.end();
  }
}).listen(8888);
