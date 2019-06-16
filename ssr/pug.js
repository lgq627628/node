// 这是侵入式的
const pug = require('pug');

pug.renderFile('./template/1.pug', {
  pretty: true,
  title: '这是传过来的标题'
}, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})
