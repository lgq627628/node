const KoaRouter = require('koa-router');
const admin = require('./admin');
const person = require('./person');

let router = new KoaRouter();
router.use('/admin', admin);
router.use('/person', person);

module.exports = router.routes();
