const assert = require('assert');

// assert(条件，错误消息) 条件这部分会返回一个布尔值
// 通常用来对代码进行校验， 若条件返回值为 false 则阻止程序运行， 并抛出一个错误
// 一般用于函数中间和参数判断
// assert(2 < 1, '断言失败');

const obj1 = {
  a: {
    b: 1
  }
};
const obj2 = {
  a: {
    b: 1
  }
};
const obj3 = {
  a: {
    b: '1'
  }
};

// assert.deepEqual(变量，预期值，错误信息)   ==
// assert.deepStrictEqual(变量，预期值，错误信息)   ===
// 其实还有好多种equal，这里就举例两种
assert.deepEqual(obj1, obj2, '不等哦');
assert.deepEqual(obj1, obj3, '不等哦');
assert.deepStrictEqual(obj1, obj2, '不等哦');
assert.deepStrictEqual(obj1, obj3, '不等哦');
