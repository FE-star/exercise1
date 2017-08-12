var assert = require('assert')

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      // 使用相等运算符测试actual参数与expected参数是否相等
      // assert.equal(actual, expected[, message])
      assert.equal(-1, [1, 2, 3].indexOf(0)/* 填空题 */)
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
    /*
      // former
      修改下面代码使得满足测试描述
      assert.equal(a, b)
    */
   
    // 测试 actual 参数与 expected 参数是否深度相等
    // assert.deepEqual(actual, expected[, message])
    assert.deepEqual(a, b)
    
  })

  it('可以捕获并验证函数fn的错误', function () {
    function fn() {
      xxx;
    }
    // 修改下面代码使得满足测试描述
    assert.throws(() => {
      throw new Error(fn())
    },
    /xxx is not defined/
    )
    
  })
})