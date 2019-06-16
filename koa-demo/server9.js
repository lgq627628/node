const Koa = require('koa');
const session = require('koa-session');

let server = new Koa();
server.listen(8888);

server.keys = [
  '111111',
  '222222',
  '333333'
]; //秘钥，增加破解难度，一般一次几千几万个
server.use(session({
  maxAge: 20 * 60 * 1000,
  renew: true // 自动续期，现在开始后的20分钟内
}, server));
server.use(async ctx => {
  if (ctx.session.n) {
    ctx.session.n++;
  } else {
    ctx.session.n = 1;
  }
  ctx.body = `欢迎你的第${ctx.session.n}次到访`;
});
