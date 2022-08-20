var assert = require('assert');

const deepEqual = (x, y) => {
  if (x === y) return true;
  if (typeof x !== 'object' || typeof y !== 'object') return false;
  if (x.length !== y.length) return false;
  for (var i = 0; i < x.length; i++) {
    if (!deepEqual(x[i], y[i])) return false;
  }
  return true;
};

describe('Array', function () {
  describe('#indexOf()', function () {
    test('当value不在数组中应当返回-1', function () {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    });
  });
});

describe('assert', function () {
  test('a和b应当深度相等', function () {
    var a = {
      c: {
        e: 1,
      },
    };
    var b = {
      c: {
        e: 1,
      },
    };
    // 修改下面代码使得满足测试描述
    assert.deepEqual(a, b);
  });

  test('可以捕获并验证函数fn的错误', function () {
    function fn() {
      throw err;
    }
    // 修改下面代码使得满足测试描述
    assert.throws(fn);
  });
});
