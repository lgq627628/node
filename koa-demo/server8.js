const Koa = require('koa');

let server = new Koa();
server.listen(8888);

server.keys = [
  '111111',
  '222222'
]; //秘钥，增加破解难度，一般一次几千几万个
server.use(async ctx => {
  // cookies 是 koa 自带模块，如果签名的话就 get 和 set 都要写上 signed: true
  // ctx.cookies.set('user', 'xr');
  ctx.cookies.set('user', 'xr', {
    maxAge: 14 * 86400 * 1000,
    signed: true
  });
  // ctx.cookies.set('user', 'xr', { domain, path, http });
  // ctx.cookies.get();
  // ctx.cookies.get('user', { signed: true });
})
