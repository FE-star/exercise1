var assert = require('assert')

// describe块称为"测试套件"（test suite），表示一组相关的测试。
describe('Array', function() {
  describe('#indexOf()', function() {
    // it块称为"测试用例"（test case），表示一个单独的测试，是测试的最小单位。
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1, 2, 3].indexOf(5))
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
    // deepEqual 深度相等
    assert.deepEqual(a, b)
  })

  it('可以捕获并验证函数fn的错误', function () {
    function fn() {
      xxx;
    }
    // 修改下面代码使得满足测试描述
    assert.throws(fn)
  })
})