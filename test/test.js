var assert = require('assert')
var {isExist, errorFun} = require('../preTest')
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, isExist(4, [1, 2, 3]))
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
    // 修改下面代码使得满足测试描述
    assert.throws(errorFun, ReferenceError, 'xxx is not defined')
  })
})