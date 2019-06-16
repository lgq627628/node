## 数据库？
1.分类
  文件型：简单——access、(sqlite => app 内置数据库，对系统资源占用极少，localStorage其实也是拿它做的）（适合小型，比如手机端的通讯录，备份的话就是拷贝文件即可，适合单机存储少量数据）
  关系型：(MySQL开元免费应用广)、Oracle（功能强大，使用场景广）
  分布式：mongoDB（可以分布到多台服务器上）
  NoSQL：memcache、redis（删除了多余的复杂查询，一般用来做缓存，秒杀活动也用它）

2.安全性
  注入，就是sql语句

3.操作
  管理性：建库建表（通过工具实现）
  增删改查：增删改查（通过node实现）

--------------------

MySQL

--------------------

数据库管理工具
navicat
phpmyadmin

--------------------

库
表

类型：
数字
文本
  varchar-短
  text-2G

主键：
1.不重复
2.性能最高

--------------------

SQL——4大语句  是一种数据库查询语言
增 INSERT
  INSERT INTO <表> (字段, ...) VALUES(值, ...);
  INSERT INTO user_table (username, password) VALUES('lisi', '111111');

删 DELETE
  DELETE FROM <表> WHERE 条件;
  DELETE FROM user_table WHERE ID=2;

改 UPDATE
  UPDATE <表> SET 字段=新值,字段=新值,... WHERE 条件;
  UPDATE user_table SET password='654321', username='blue2' WHERE ID=1;

查 SELECT
  SELECT 字段列表 FROM <表> WHERE 条件 ORDER BY 字段 LIMIT 30,30;

--------------------

索引
1.性能
2.限制

主键=唯一+索引
唯一
索引-提高查询性能、降低其他操作性能（比如插入和删除，因为要对索引字典重新构建）、更占空间
全文索引-适合文本搜索

--------------------

Node操作数据库（通过网络，因为不在一台主机上）？一般web（对用户直接访问，风险高 || 机子多，分布多 || 缓存资源占用满）和数据库服务器是分开的
1.mysql模块
2.连接池
  createPool
3.异步
  co-mysql（封装成异步）

--------------------

await 数据
await fn()
await promise
await fn(){
  return promise
}
await async ()=>{}
