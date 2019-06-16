const Koa = require('koa');
// const KoaRouter = require('koa-router');
const body = require('koa-better-body');

let server = new Koa();
server.listen(8888);

// let router = new KoaRouter();
// router.get('/a', async ctx => {
//   ctx.body = '哈哈哈';
// });
// server.use(router.routes());
server.use(body({
  uploadDir: './upload'
}));
server.use(async ctx => {
  // 文件和普通数据都在这
  console.log(ctx.request.fields);
})
