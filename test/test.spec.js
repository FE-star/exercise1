var assert = require('assert')
const { createHash } = require('crypto')

describe('Array', function() {
  describe('#indexOf()', function() {
    test('当value不在数组中应当返回-1', function() {
      assert(-1, [1, 2, 3]/* 填空题 */)
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
    assert.deepStrictEqual(a, b)
  })

  test('可以捕获并验证函数fn的错误', function () {
    function fn() {
      try {
        xxx;
      } catch(err) {}
    }
    // 修改下面代码使得满足测试描述
    assert.doesNotThrow(fn, '[ReferenceError: xxx is not defined]')
  })
})