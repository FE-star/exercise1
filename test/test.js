var assert = require('assert')

describe('Array', function() {
  describe('#indexOf()', function() {//describe 可以任意嵌套，这是一个 BDD 风格的测试
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1, 2, 3].indexOf(4));
    })
  })
})

describe('assert', function () { 
  it('a和b应当深度相等', function () {//一个it表示一个测试，it 就是 unit test
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

  it('可以捕获并验证函数fn的错误', function () {
    function fn() {
      xxx;
    }
    // 修改下面代码使得满足测试描述
    // fn()
    assert.throws(fn, /ReferenceError/, '不是期望的错误');
  })
})

//运行测试的方式： 1，运行 mocha 命令；2，运行 npm test 命令，因为在 npm 中配置了 test: mocha；3，在vscode的launch中配置