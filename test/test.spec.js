var assert = require('assert')

describe('Array', function() {
  describe('#indexOf()', function() {
    test('当value不在数组中应当返回-1', function() {
      // 第二个值要与第一个相等
      assert.equal(-1, [1, 2, 3].indexOf(4))
    })
  })
})

describe('assert', function () {
  test('a和b应当深度相等', function () {
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
    assert.deepEqual(a, b)
  })

  test('可以捕获并验证函数fn的错误', function () {
    function fn() {
      xxx;
    }
    // 修改下面代码使得满足测试描述
    // assert.throws(fn())
    assert.throws(
      () => { fn() },
      Error
    );
  })
})