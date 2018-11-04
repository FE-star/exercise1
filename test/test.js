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

		
    function depth(e) {
      if (typeof e !== 'object') return -1;
      let maxDepth = 1;

      for (let property in e)	{
      if (!e.hasOwnProperty(property)) continue;
		if (typeof e[property] === 'object') {
		  let currentDepth = 1 + depth(e[property]);
		  maxDepth = Math.max(maxDepth, currentDepth);
		}
      }

      return maxDepth;
    }
   
    assert.equal(depth(a), depth(b))

    // 真实的意图是, emmmmmm
    assert.deepEqual(a, b);
  })

  it('可以捕获并验证函数fn的错误', function () {
    function fn() {
      xxx;
    }

    // 修改下面代码使得满足测试描述
    var err = new ReferenceError('xxx is not defined');

    // node version >= 9.9.0 之后也可以写成下面这样
    // assert.throws(fn, {
    //   name: 'ReferenceError',   
    //   message: 'xxx is not defined',
    // })

    assert.throws(fn, err)
  })
})
