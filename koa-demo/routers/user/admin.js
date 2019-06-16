const KoaRouter = require('koa-router');

let router = new KoaRouter();
router.get('/', async ctx => {
  ctx.body = '这是管理页';
});

module.exports = router.routes();
