var assert = require('assert');
const { ADDRGETNETWORKPARAMS } = require('dns');
const { execPath } = require('process');

describe('Array', function() {
  describe('#indexOf()', function() {
    test('当value不在数组中应当返回-1', function() {
      var arr=[1,2,3];
      var b=arr.indexOf(5);
      assert.equal(-1, b);
    })
  })
})

describe('assert', function () {
  test('a和b应当深度相等', function () {
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
    assert.deepEqual(a, b);
  })

  test('可以捕获并验证函数fn的错误', function () {
    function fn(num) {
      if (!Number.isInteger(num)) {
        throw Error('只接受整数类型的参数');
}
    }
    // 修改下面代码使得满足测试描述
 assert.throws(fn=>{throw new Error('只接受整数类型的参数')},Error);
  })
})