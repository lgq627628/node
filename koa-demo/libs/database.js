const mysql = require('mysql');
const co = require('co-mysql');
// koa-mysql适合1.0版本，因为太久没更新所以废了

let conn = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '12345678',
  database: 'user_table'
});
let db = co(conn);

module.exports = db;
