var assert = require('assert')

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
     assert.equal(-1, [1, 2, 3].indexOf(4) /* 填空题 */);//不存在时直接返回-1
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
    //equal 相当于是js当中的==
    //deepEqual相当于是js当中的===
    assert.deepEqual(a, b)
  })

  it('可以捕获并验证函数fn的错误', function () {
    function fn() {
      xxx;
    }
    // 修改下面代码使得满足测试描述
    //使用assert里面的throws方法进行错误断言
    assert.throws(
                fn,
                error => {
              if (error instanceof Error && /xxx is not defined/.test(error))
                    return true;
            },
            "不是预期的错误"
          );
  })
})
