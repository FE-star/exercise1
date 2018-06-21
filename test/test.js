var assert = require('assert').strict;

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1, 2, 3].indexOf(4))
    })
  })
})

describe('assert', function () {
  it('a和b应当深度相等', function () {
    var a = {
      c: {
        e: 1
      }
    }
    var b = {
      c: {
        e: 1
      }
    }
    // 修改下面代码使得满足测试描述
    assert.deepStrictEqual(a, b)
  })

  it('可以捕获并验证函数fn的错误', function () {
    function fn() {
      xxx;
    }
    // fn()
    assert.throws(fn, '报错啦');
  })

  it('可以捕获并验证函数fn的错误2', function () {
    function fn(x) {
      return x + a;
    }
    assert.throws(() => fn(), ReferenceError, 'a is not defined');
  })
})