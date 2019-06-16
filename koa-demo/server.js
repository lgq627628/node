const Koa = require('koa');
const KoaRouter = require('koa-router');

let server = new Koa();
server.listen(8888);

let router = new KoaRouter(); // 和 Express 不同，它不自带路由。独立出来为了方便嵌套，为了支撑大型应用

let aRouter = new KoaRouter();

let abRouter = new KoaRouter();
abRouter.get('/a', async ctx => {
  ctx.body = 'aaaab';
});
let acRouter = new KoaRouter();
acRouter.get('/a', async ctx => {
  ctx.body = 'aaaac';
});

aRouter.use('/ab', abRouter.routes());
aRouter.use('/ac', acRouter.routes());

router.use('/user', aRouter.routes());

server.use(router.routes());
