const Koa = require('koa');
const KoaRouter = require('koa-router');
const db = require('./libs/database');

let server = new Koa();
server.listen(8888);

server.context.db = db; // 这样写可以在ctx里面找到它，其他文件也可以，主要为了方便

// server.use(async (ctx, next) => { // 在头部统一处理
//   try { // 捕获到所有错误
//     await next();
//   } catch (e) {
//     console.log(e);
//     ctx.body = 'something wrong';
//   }
// })

server.use(async ctx => {
  try {
    let data = await ctx.db.query('SELECT * FROM user');
    ctx.body = data;
  } catch (e) {
    ctx.throw(500, 'network wrong');
  }
})
