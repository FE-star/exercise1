var assert = require('assert')
var example = require('../examples');
/**
 * 测试套件
 * 套件里可以嵌套套件，套件里可以有一个或多个测试用例
 * @param [名称] Array
 * @param [实际执行函数] func
 */
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [ 1, 2, 3].indexOf(6), /* 填空题 */)
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
    assert.deepEqual(a, b)
  })

  it('可以捕获并验证函数fn的错误', function () {
    function fn() {
      xxx;
    }
    // 修改下面代码使得满足测试描述,断言函数会出错
    assert.throws(fn)
  })
})


describe('assert api', function () {
  // assert
  it('add(a, b) 返回的结果会等于3', function () {
    assert(example.add(1, 2) === 3, '预期1加2等于3')
  })

  // assert.equal() 
  it('3 + 3 = 6', function () {
    assert.equal(6, example.add(3, 3), '预期 3 + 3 等于 6')
  })

  // assert.deepEqual()
  it('预期两个数组应该有相同的属性且值相等', function () {
    let list1 = [1, 2, 3, 4, 5];
    let list2 = [1, 2, 3, 4, '5'];

    assert.deepEqual(list1, list2, '预期两个数组应该有相同的属性且值相等');
  })

  // assert.deepStrictEqual()
  it('预期两个数组应该有相同的属性且值相等，类型也要相等', function () {
    let list1 = [1, 2, 3, 4, 5];
    let list2 = [1, 2, 3, 4, 5];

    assert.deepStrictEqual(list1, list2, '预期两个数组应该有相同的属性且值相等，类型也要相等');
  })

  // assert.doseNotThrow()
  // it('预期该函数不会抛一个错误', function () {
  //   // assert.doesNotThrow( () => {
  //   //   throw new SyntaxError('错误信息')
  //   // }, SyntaxError, '抛出错误');
  //   // assert.doesNotThrow(
  //   //   () => {
  //   //     throw new TypeError('错误信息');
  //   //   },
  //   //   SyntaxError
  //   // );
  // })

  // assert.fail()
  it('抛出错误', function () {
    // assert.fail(1, 2);
  })

  // assert.ifError(value)

  it('是否是Flase', function () {
    // assert.ifError(0)
    example.sayHello('wolrd', function (error, value) {
      assert.ifError(error);
    })
  })
})