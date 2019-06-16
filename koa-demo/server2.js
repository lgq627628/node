const Koa = require('koa');
const KoaRouter = require('koa-router');
const userRouter = require('./routers/user/index');

let server = new Koa();
let router = new KoaRouter();

server.listen(8888);
router.use('/user', userRouter);
server.use(router.routes());
