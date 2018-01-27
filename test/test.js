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
    var getDepth = function(head) {
      var allPath = [];
      var path = [];
      var digDepth = function(node, path) {
            path.push(node);
        if(typeof node !== 'object') {
          allPath.push(path);
          path = [head];
        }
        for(var p in node) {
          if(node.hasOwnProperty(p)) {
            digDepth(node[p], path);
          }
        }
      }
      digDepth(head, path);
      return allPath.map(v => v.length).sort().reverse()[0];
    }
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
    assert.equal(getDepth(a), getDepth(b));
  })

  it('可以捕获并验证函数fn的错误', function () {
    function fn() {
      xxx;
    }
    // 修改下面代码使得满足测试描述
    assert.throws(function() {fn()});
  })
})