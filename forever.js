// 启动器，服务器如果挂了就重启，大同小异（pm2 差不多）

// npm i forever - g

// forever start xxx.js
// forever list
// forever restart xxx.js
// forever stop xxx.js
// forever stopall // 关闭所有慎用

// forever start xxx.js -l /Users/lgq/Desktop/node/a.log 打印日志
// -o 普通输出到哪
// -e /Users/lgq/Desktop/node/err.log
// -a 追加日志不清除之前的日志
