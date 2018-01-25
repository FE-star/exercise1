var assert = require('assert')

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      // assert.equal(-1, [1, 2, 3]/* 填空题 */)
      assert.equal(-1, [1, 2, 3].indexOf(4)/* 填空题 */) // 只要不是 1，2，3 中的值，都可以通过测试用例
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
    // assert.equal(a, b) // 需要使用 深度相等 deepEqual
    assert.deepEqual(a, b)
  })

  it('可以捕获并验证函数fn的错误', function () {
    function fn() {
      xxx;
    }
    // 修改下面代码使得满足测试描述
    // fn()
    assert.throws(fn, Error) // 抛出的错误符合某个构造函数
  })
})


