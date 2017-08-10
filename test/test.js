/**
 * mocha 简单可扩展、支持浏览器和Node、支持同步和异步、支持连续用例测试
 * describe(sting, function) 封装测试集
 * it(string, function) 封装测试用例
 * assert 断言 返回 true 或 false
 * mocha 在完成异步测试用例时通过done()来标记
 */
var assert = require('assert')
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      // assert.equal(actual, expected[, message])
      // 使用 == 测试 actual 参数与 expected 参数是否相等
      // 如果两个值不相等，则抛出一个带有 message 属性的 AssertionError 其中 message 属性的值等于传入的 message 参数的值
      // 如果 message 参数为 undefined，则赋予默认的错误信息
      assert.equal(-1, [1, 2, 3].indexOf(5)/* 填空题 */)
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
    // assert.deepEqual(actual, expected[, message])
    // 测试 actual 参数与 expected 参数是否深度相等 原始值使用 相等运算符 == 比较
    // 只比较可枚举的自身属性  不比较对象的 原型、连接符、或不可枚举的属性
    assert.deepEqual(a, b)
  })

  it('可以捕获并验证函数fn的错误', function () {
    function fn() {
      xxx;
    }
    // 修改下面代码使得满足测试描述
    // assert.throws(block[, error][, message])
    // block <Function>
    // error <RegExp> | <Function>  如果第二个参数是一个字符串，则视为省略 error 参数
    assert.throws(fn, /xxx is not defined/)
  })
})