const Koa = require('koa');
const KoaRouter = require('koa-router');
const static = require('koa-static');

let server = new Koa();
server.listen(8888);

// let router = new KoaRouter();
// router.get('/a', async ctx => {
//   ctx.body = '哈哈哈';
// });
// server.use(router.routes());

// server.use(static('./static', {
//   maxage: 86400 * 1000,
//   index: 'a.html' // 访问根路径的时候默认访问a页面
// }));

let staticRouter = new KoaRouter();
staticRouter.all(/\.(jpg|png|gif)$/i, static('./static', {
  maxage: 60 * 86400 * 1000
}));
staticRouter.all(/\.(jpg|png|gif)$/i, static('./static', {
  maxage: 30 * 86400 * 1000
}));
staticRouter.all('', static('./static', {
  maxage: 10 * 86400 * 1000 // 其余文件
}));
server.use(staticRouter.routes());
