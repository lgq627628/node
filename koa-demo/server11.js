const Koa = require('koa');
const KoaRouter = require('koa-router');

let server = new Koa();
server.listen(8888);


let router = new KoaRouter();
router.all('*', async (ctx, next) => {
  try {
    await next();
  } catch (e) {
    console.log(e);
    ctx.body = 'something wrong';
  }
});

router.get('/a', async ctx => {
  ctx.body = 'aaaa';
})
server.use(router.routes());
