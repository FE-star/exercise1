var assert = require('assert');

// mocha 基本方法
// describe(moduleName，function) 可嵌套，描述测试用例是否正确
// it(info,function) info描述性说明,一个it 对应一个单元测试
// assert.equal(exp1,exp2) mocha断言语句，判断exp1是否等于exp2
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

        function compare(x,y) {
            let p;
            for (p in y) {
                if(!x.hasOwnProperty(p)) {
                    return false
                }
            }
            for (p in x) {
                if (!y.hasOwnProperty(p)) {
                    return false
                }
                if(typeof x[p]!==typeof y[p]){
                    return false
                }
                // 递归查看子属性
                if(!compare(x[p],y[p])) {
                    return false
                }
            }
            return true
        }

        // 修改下面代码使得满足测试描述
        // assert.equal(true, compare(a,b))
        assert.deepEqual(a,b)
    })

    it('可以捕获并验证函数fn的错误', function (done) {
        function fn(done) {
            xxx;
        }
        // 修改下面代码使得满足测试描述
        assert.throws(fn)
    })
})
