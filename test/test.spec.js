var assert = require('assert')

describe('Array', function () {
  describe('#indexOf()', function () {
    test('当value不在数组中应当返回-1', function () {
      assert.equal(-1, [1, 2, 3].indexOf(0)/* 填空题 */)
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
    function getDeepth(obj) {
      if (typeof obj !== 'object' || Array.isArray(obj)) {
        return 0;
      }
      let deep = 0;
      function _getDeepth(_obj) {
        if (typeof _obj !== 'object') {
          return 0;
        }
        let layerNodes = Object.keys(_obj);
        let nextLayerDeep = 0;
        for (let i = 0; i < layerNodes.length; ++i) {
          if (!_obj.hasOwnProperty(layerNodes[i])) {
            continue;
          }
          nextLayerDeep = Math.max(_getDeepth(_obj[layerNodes[i]]), nextLayerDeep);
        }
        deep = Math.max(deep, nextLayerDeep + 1);
        return nextLayerDeep + 1;
      }
      _getDeepth(obj);
      return deep;
    }
    // 修改下面代码使得满足测试描述
    assert.equal(getDeepth(a), getDeepth(b))
  })

  test('可以捕获并验证函数fn的错误', function () {
    function fn() {
      xxx;
    }
    // 修改下面代码使得满足测试描述
    try {
      fn();
    } catch (error) {
      console.log(error);
    }
  })
})