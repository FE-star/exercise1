var assert = require('assert')

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1, 2, 3].indexOf(5))
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
       xxxxx
    }
    // 修改下面代码使得满足测试描述
    assert.throws(fn,function(err){
        if((err instanceof Error) && /xxxxx is not defined/.test(err)){
           return true;
        }
    },
     '不是期望的错误'
    );
  })
})


//如果不加 g的话 就只处理首次匹配到的一部分
describe("reg",function(){
    it('去除空格',function(){
         assert.equal("abc", "   abc ".replace(/^\s+|\s+$/g,'')) 
    })  
})


// replace
describe("replace",function(){
    it('替换字符',function(){
         let str = "@@哈哈@@";
         let reg = str.replace(/@@(.+)@@/g,'<blink>$1</blink>')
         //. 代表所有的字符 
         //再次验证 贪婪和非贪婪是在 整个表达式匹配成功的前提下进行的
         assert.equal('<blink>哈哈</blink>', str.replace(/@@(.+)@@/,'<blink>$1</blink>'))  
         //assert.equal("<blink></blink>", "<a href=>   abc ".replace(/^\s+|\s+$/,'')) 
    })  
})


