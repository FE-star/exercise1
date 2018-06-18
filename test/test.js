// mocha ./test/test.js 运行测试js代码
var assert = require('assert')

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      // assert.equal(-1, [1, 2, 3])
      assert.equal(-1, [1, 2, 3].indexOf(4));
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
    // assert.equal(a, b)
    assert.deepEqual(a, b);
  })

  it('可以捕获并验证函数fn的错误', function () {
    function fn() {
      xxx;
    }
    // 修改下面代码使得满足测试描述
    // fn()
    assert.throws(fn, /ReferenceError/, '没有抛出期望的信息' );   // 正则表达式
  })
})
