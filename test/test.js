var assert = require('assert')

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
    assert.deepEqual(a, b)
  })

  it('可以捕获并验证函数fn的错误', function () {
    function fn() {
      xxx;
    }

    assert.throws(
      fn,
      (err) => {
        if (err instanceof Error && /xxx is not defined/.test(err)) {
          return true;
        }
      },
      '不是期望的错误'
    );
  })
})
