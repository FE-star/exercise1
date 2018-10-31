var assert = require('assert')

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1, 2, 3].indexOf(0))
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
    // Only enumerable "own" properties are considered.
    // 与 deepStrictEqual 的区别 http://nodejs.cn/api/assert.html#assert_assert_deepstrictequal_actual_expected_message
    assert.deepEqual(a, b)
  })

  it('可以捕获并验证函数fn的错误', function () {
    function fn() {
      xxx;
    }
    // 修改下面代码使得满足测试描述
    // JavaScript Error Type https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
    try {
      fn()
    } catch (error) {
      assert.equal(error instanceof ReferenceError, true);
      assert.fail(error.message);
    }
  })
})