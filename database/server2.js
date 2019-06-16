const http = require('http');
const url = require('url');
const mysql = require('mysql');
const co = require('co-mysql'); // 最早是给co框架用的，所以这样起名。它不能单独使用，本身只是一个包装器，方便异步操作的

// 1、首先要把数据库连接到服务器
let conn = mysql.createPool({
  connectionLimit: 10, // 默认是10，一般10个足够，太多浪费开销
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'user_table' // 一般在工具里面建库
});
let db = co(conn); // 用co包装起来，让我们能够用await来异步操作同步化

// 2、配合 http
http.createServer(async (req, res) => {
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

    try { // 捕获异步
      let data = await db.query(`SELECT id FROM user WHERE age=${age}`);
      if (data.length) {
        res.write('has reg');
      } else {
        await db.query(`INSERT INTO user (id, name, phoneNo, age) VALUES(${id}, 'zz', '3434367', ${age})`);
        res.write('insert ok');
      }
    } catch (error) {
      res.write('databse wrong');
    }
    res.end();
  } else if (pathname === '/login') {

  } else {
    res.writeHeader(404);
    res.write('not Found');
    res.end();
  }
}).listen(8888);
