var assert = require('assert')

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            /*
             1 、equal:比较预期值和实际值是否相等（==）值类型比较值，引用类型比较应用
            */
            assert.equal(-1, [1, 2, 3].indexOf(0))

        })
    })
})

describe('assert', function () {
    /*
    1、【true】时通过断言测试，否则抛出 【AssertionError】
    */
    it('第一个值为false时以我为错误信息抛出', function () {
        assert(1 == 1);
    })
    /*
    2、比较预期值和实际值是否相等（==），值类型比较值，引用类型比较对象的属性值是否相等
    注意：比较的时候【忽略】对象的原型（prototype）
    */
    it('a和b应当相等deepEqual(==)', function () {
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
        assert.deepEqual(a, b)
    })
    /*
    3、比较预期值和实际值是否相等（==），值类型比较值，引用类型比较对象的属性值是否相等
       注意：比较的时候【包括】对象的原型（prototype）
    */
    it('a和b深度相等(===)', function () {
        const obj1 = { name: "foo", gender: "men" },
            obj2 = { name: "bar", gender: "men" }
        const son1 = Object.create(obj1),
            son2 = Object.create(obj2);
        son1.name = "Summer";
        son2.name = "Summer";
        assert.deepEqual(son1, son2)
    })
    /*
    4、类似equal
    */
    it('strictEqual (===)', function () {
        assert.strictEqual(1, 1);
        // 测试通过。
        //assert.strictEqual(1, '1');
        // 抛出 AssertionError: 1 === '1'
    })
    it('可以捕获并验证函数fn的错误', function () {
        function fn() {
            xxx;
        }
        // 修改下面代码使得满足测试描述
        assert.throws(fn, '错误信息', 'xxx未定义');
    })
})