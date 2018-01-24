var assert = require('assert')

/**
 * 测试套件
 * 套件里可以嵌套套件，套件里可以有一个或多个测试用例
 * @param [名称] Array
 * @param [实际执行函数] func
 */
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [ 1, 2, 3].indexOf(6), /* 填空题 */)
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
    assert.deepEqual(a, b)
  })

  it('可以捕获并验证函数fn的错误', function () {
    function fn() {
      xxx;
    }
    // 修改下面代码使得满足测试描述,断言函数会出错
    assert.throws(fn)
  })
})