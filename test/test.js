let assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(3), 2)
    })
  })
});

describe('assert', function () {
  it('a和b应当深度相等', function () {
    let a = {
      c: {
        e: 1
      }
    };
    let b = {
      c: {
        e: 1
      }
    };
    assert.deepEqual(a, b)
  });


  it('可以捕获并验证函数fn的错误', function () {
    function fn() {
      xxx;
    }
    fn();
    assert.throws(
      () => {
        throw new Error('Wrong value');
      },
      function(err) {
        if ((err instanceof Error) && /value/.test(err)) {
          return true;
        }
      },
      'unexpected error'
    );
  })
});