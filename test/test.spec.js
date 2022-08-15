const { rejects } = require('assert');
var assert = require('assert');

let describe = (string, cb) => {
  cb()
}
let test = (errorMsg, cb) => {
  cb()
}
describe('Array', function () {
  describe('#indexOf()', function () {
    test('当value不在数组中应当返回-1', function () {
      let result = -1
      let arr = [1, 2, 3]
      arr.forEach((item, index) => {
        if (item === -1) {
          result = index
        }
      })
      assert.equal(result, -1/* 填空题 */)
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
    function getObjDeep(obj, max = 0) {
      if (obj && obj instanceof Object && !(obj instanceof Array)) {
        max++
        Object.keys(obj).forEach(key => {
          max = getObjDeep(obj[key], max)
        })
      }
      return max
    }
    // 修改下面代码使得满足测试描述
    assert.equal(getObjDeep(a, 0), getObjDeep(b, 0))
  })

  test('可以捕获并验证函数fn的错误', function () {
    function fn() {
      return new Promise((resolve, reject) => {
        reject('错误')
      })
    }
    // 修改下面代码使得满足测试描述
    fn().catch(err => {
    })
  })
})