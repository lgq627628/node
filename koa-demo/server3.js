const Koa = require('koa');
const KoaRouter = require('koa-router');

let server = new Koa();
server.listen(8888);

// 声明全局变量
server.context.a = 1;
server.context.db = mysql.createPool();

let router = new KoaRouter();
router.get('/user/:id', async ctx => {
  let {
    id
  } = ctx.params; // 获取路由参数
  console.log(ctx.params);
  ctx.body = `这是你要的信息${id}`;
});
router.get('/user/:id/:id2', async ctx => {
  let {
    id,
    id2
  } = ctx.params; // 必须要有两个参数
  // let { a, b} = ctx.query; ?后面的参数
  // query顺序、灵活可省略、不利seo
  // params有序、不可省略、利于seo因为是静态网址
  console.log(ctx.params);
  // console.log(ctx.a); // 自定义全局变量
  // console.log(ctx.db.query);
  // ctx.method
  // ctx.request
  // ctx.response
  // ctx.url
  // ctx.path
  // ctx.query
  // ctx.ip
  // ctx.headers 请求头
  // ctx.throw(code, msg)
  // ctx.assert(条件, code, msg) 对上面的封装
  // ctx.state
  // ctx.redirect
  // ctx.attachment 专门帮用户下载文件

  ctx.body = `这是你要的信息${id}-${id2}`;
});

server.use(router.routes());
