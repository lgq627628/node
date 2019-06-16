const KoaRouter = require('koa-router');

let router = new KoaRouter();
router.get('/', async ctx => {
  ctx.body = '这是个人用户';
});

module.exports = router.routes();
