# Readme

### 步骤

* 全局安装 mocha

```
npm install mocha -g
```

* Fork 代码仓库并拉到本地
* 启动测试

```
mocha
```

* 打开 `./test/test.js` 修改代码跑通测试用例 

### 参考

* [NodeJS Assert API](http://nodejs.cn/api/assert.html)

### API

assert 模块是Node的内置模块，主要用于断言。如果表达式不符合预期，就抛出一个错误。assert模块一共提供11个方法。

#### assert(value[, message])

**参数**
* value <any> bool
* message <any> string

`assert.ok()`的别名。

assert方法接受两个参数，当第一个参数对应的布尔值为true时，不会有任何提示，返回undefined。当第一个参数对应的布尔值为false时，会抛出一个错误，该错误的提示信息就是第二个参数设定的字符串。

**栗子**

```
var assert = require('assert');

function add (a, b) {
    return a + b;
}

var expect = add(1, 2);
assert(expect === 3, '预期1加2等于3')；
```

#### assert.equal(actual, expected[, message])

**参数**
* actual <any>      实际值
* expected <any>    预期值
* message <any>     错误提示信息

使用`相等运算符(==)`测试`actual`参数与`expected`参数是否相等。

**举栗**

```
// 再次使用上面的栗子

assert.equal(6, add(3, 3), '预期 3 + 3 等于 6')
```

#### assert.deepEqual(actual, expected[, message])

**参数**
* actual <any>     实际 
* expected <any>   预期
* message <any> 错误提示信息

deepEqual方法用来测试 actual 参数与 expected 参数是否深度相等。 原始值使用相等运算符（==）比较。只要它们的属性一一对应，且值都相等，就认为两个对象相等，否则抛出一个错误。

**举🌰**

```
// 格式
assert.deepEqual(actual, expected[, message])

// 栗子

var assert = require('assert');

let list1 = [1, 2, 3, 4, 5];
let list2 = [1, 2, 3, 4, '5'];

assert.deepEqual(list1, list2, '预期两个数组应该有相同的属性');

let person1 = { "name":"john", "age":"21" };
let person2 = { "name":"john", "age":"21" };

assert.deepEqual(person1, person2, '预期两个对象应该有相同的属性');

```

deepEqual()只测试可枚举的自身属性，**不测试对象的原型、连接符、或不可枚举的属性（这些情况使用 `assert.deepStrictEqual()`）**。 例如，下面的例子不会抛出 AssertionError，因为 RegExp 对象的属性不是可枚举的：

```
// 不会抛出 AssertionError。
assert.deepEqual(/a/gi, new Date());
```

`Map` 和 `Set` 包含的子项也会被测试。

子对象中可枚举的自身属性也会被测试：

```
const assert = require('assert');

let obj1 = { a: { b: 1 } };
let obj2 = { a: { b: 1 } };

assert.deepEqual(obj1, obj1);

```

#### assert.deepStrictEqual(actual, expected[, message])

**参数**
* actual <any>     实际 
* expected <any>   预期
* message <any> 错误提示信息

严格要求上的深度比较，专属指定了某一类；与 assert.deepEqual() 大致相同，但有一些区别：

1. 原始值使用全等运算符（===）比较。Set 的值与 Map 的键使用 SameValueZero 比较。
2. 对象的原型也使用全等运算符比较。
3. 对象的类型标签要求相同。
4. 比较[对象包装器][]时，其对象和里面的值要求相同。

**举🌰**

```
// 继续上一个栗子
let list1 = [1, 2, 3, 4, 5];
let list2 = [1, 2, 3, 4, '5'];

assert.deepEqual(list1, list2, '预期两个数组应该有相同的属性');
// 测试通过，因为 5 == '5'； 原始值的比较还是 使用相等运算符

assert.deepStrictEqual(list1, list2, '预期两个数组应该有相同的属性且值相等，类型也要相等');

```

#### assert.doesNotThrow(block[, error][, message])

**参数**
* block <Function>  执行函数
* error <RegExp> | <Function> 指定错误类型参数
* message <any>     错误提示信息

doesNotThrow方法与throws方法正好相反，预期某个代码块不抛出错误。

- 断言 block 函数不会抛出错误。
- 当 assert.doesNotThrow() 被调用时，它会立即调用 block 函数。
- 如果抛出错误且错误类型与 error 参数指定的相同，则抛出 AssertionError。 如果错误类型不相同，或 error 参数为 undefined，则抛出错误。

**举🌰**

```
// 以下例子会抛出 TypeError，因为在断言中没有匹配的错误类型：

assert.doesNotThrow(
  () => {
    throw new TypeError('错误信息');
  },
  SyntaxError
);


// 如果抛出了 AssertionError 且有给 message 参数传值，则 message 参数的值会被附加到 AssertionError 的信息中：
assert.doesNotThrow(
  () => {
    throw new TypeError('错误信息');
  },
  TypeError,
  '抛出错误'
);
// 抛出 AssertionError: Got unwanted exception (TypeError). 抛出错误

```

#### assert.fail(message)
#### assert.fail(actual, expected[, message[, operator[, stackStartFunction]]])

**参数**

* actual <any>              实际值
* expected <any>            预期值
* message <any>             错误提示信息
* operator <string> 默认为 '!='。       操作符
* stackStartFunction <function> 默认为 assert.fail。   用于拦截异常栈信息

fail方法用于抛出一个错误。但是不管参数是什么值，它总是抛出一个错误.

抛出 AssertionError。 如果 message 参数为空，则错误信息为 actual 参数 + operator 参数 + expected 参数。 如果只提供了 actual 参数与 expected 参数，则 operator 参数默认为 '!='。 如果提供了 message 参数，则它会作为错误信息，其他参数会保存在错误对象的属性中。 如果提供了 stackStartFunction 参数，则该函数上的栈帧都会从栈信息中移除（详见 Error.captureStackTrace）。

**举🌰**

```
const assert = require('assert');

assert.fail(1, 2, undefined, '>');
// 抛出 AssertionError [ERR_ASSERTION]: 1 > 2

assert.fail(1, 2, '错误信息');
// 抛出 AssertionError [ERR_ASSERTION]: 错误信息

assert.fail(1, 2, '错误信息', '>');
// 抛出 AssertionError [ERR_ASSERTION]: 错误信息
// 上面两个例子的 `actual` 参数、`expected` 参数与 `operator` 参数不影响错误消息。

assert.fail();
// 抛出 AssertionError [ERR_ASSERTION]: Failed

assert.fail('错误信息');
// 抛出 AssertionError [ERR_ASSERTION]: 错误信息

assert.fail('a', 'b');
// 抛出 AssertionError [ERR_ASSERTION]: 'a' != 'b'
```

例子，使用 `stackStartFunction` 参数拦截异常的栈信息：

```
function suppressFrame() {
  assert.fail('a', 'b', undefined, '!==', suppressFrame);
}
suppressFrame();
// AssertionError [ERR_ASSERTION]: 'a' !== 'b'
//     at repl:1:1
//     at ContextifyScript.Script.runInThisContext (vm.js:44:33)
//     ...
```

#### assert.ifError(value)

**参数**

* value <any>

如果 value 为真，则抛出 value。 可用于测试回调函数的 error 参数。
ifError方法断言某个表达式是否false，如果该表达式对应的布尔值等于true，就抛出一个错误。它对于验证回调函数的第一个参数十分有用，如果该参数为true，就表示有错误。

**举🌰**

```
// 格式
assert.ifError(value)

// 用法
function sayHello(name, callback) {
  var error = false;
  var str   = "Hello "+name;
  callback(error, str);
}

// use the function
sayHello('World', function(err, value){
  assert.ifError(err);
  // ...
})
```

#### assert.notDeepEqual(actual, expected[, message])

**参数**

* actual <any>     实际 
* expected <any>   预期
* message <any> 错误提示信息

测试 actual 参数与 expected 参数是否不深度相等。 与 assert.deepEqual() 相反。

**举🌰**

```
// 格式
assert.notDeepEqual(actual, expected, [message])

// 例子
var assert = require('assert');

var list1 = [1, 2, ,3, 4, 5];
var list2 = [1, 2, 3, 4, 5];

assert.notDeepEqual(list1, list2, '预期两个对象不相等');

var person1 = { "name":"john", "age":"21" };
var person2 = { "name":"jane", "age":"19" };

// deepEqual checks the elements in the objects are identical
assert.notDeepEqual(person1, person2, '预期两个对象不相等');

let obj1 = { a: { b: 1 } };
let obj2 = { a: { b: 1 } };

assert.notDeepEqual(obj1, obj1);
// 抛出 AssertionError: { a: { b: 1 } } notDeepEqual { a: { b: 1 } }
```

如果两个值深度相等，则抛出一个带有 message 属性的 AssertionError，其中 message 属性的值等于传入的 message 参数的值。 如果 message 参数为 undefined，则赋予默认的错误信息。

#### assert.notDeepStrictEqual(actual, expected[, message])

**参数**

* actual <any>     实际 
* expected <any>   预期
* message <any> 错误提示信息

测试 actual 参数与 expected 参数是否不深度全等。 与 assert.deepStrictEqual() 相反。

**举🌰**

```
const assert = require('assert');

assert.notDeepEqual({ a: 1 }, { a: '1' });
// 抛出 AssertionError: { a: 1 } notDeepEqual { a: '1' }

assert.notDeepStrictEqual({ a: 1 }, { a: '1' });
// 测试通过。
```

如果两个值深度全等，则抛出一个带有 message 属性的 AssertionError，其中 message 属性的值等于传入的 message 参数的值。 如果 message 参数为 undefined，则赋予默认的错误信息。

#### assert.notEqual(actual, expected[, message])

**参数**

* actual <any>     实际 
* expected <any>   预期
* message <any> 错误提示信息

使用不等运算符（!=）测试 actual 参数与 expected 参数是否不相等。

**举🌰**

```
const assert = require('assert');

assert.notEqual(1, 2);
// 测试通过。

assert.notEqual(1, 1);
// 抛出 AssertionError: 1 != 1

assert.notEqual(1, '1');
// 抛出 AssertionError: 1 != '1'
```

如果两个值相等，则抛出一个带有 message 属性的 AssertionError，其中 message 属性的值等于传入的 message 参数的值。 如果 message 参数为 undefined，则赋予默认的错误信息。

#### assert.notStrictEqual(actual, expected[, message])

**参数**

* actual <any>     实际 
* expected <any>   预期
* message <any> 错误提示信息

使用不全等运算符（!==）测试 actual 参数与 expected 参数是否不全等。

**举🌰**

```
const assert = require('assert');

assert.notStrictEqual(1, 2);
// 测试通过。

assert.notStrictEqual(1, 1);
// 抛出 AssertionError: 1 !== 1

assert.notStrictEqual(1, '1');
// 测试通过。
```
如果两个值全等，则抛出一个带有 message 属性的 AssertionError，其中 message 属性的值等于传入的 message 参数的值。 如果 message 参数为 undefined，则赋予默认的错误信息。


#### assert.ok(value[, message])

* value <any>     
* message <any> 错误提示信息

测试 value 是否为真值。 相当于 assert.equal(!!value, true, message)。

如果 value 不为真值，则抛出一个带有 message 属性的 AssertionError，其中 message 属性的值等于传入的 message 参数的值。 如果 message 参数为 undefined，则赋予默认的错误信息。

```
const assert = require('assert');

assert.ok(true);
// 测试通过。
assert.ok(1);
// 测试通过。
assert.ok(false);
// 抛出 "AssertionError: false == true"
assert.ok(0);
// 抛出 "AssertionError: 0 == true"
assert.ok(false, '不是真值');
// 抛出 "AssertionError: 不是真值"
```

#### assert.strictEqual(actual, expected[, message])

**参数**

* actual <any>     实际 
* expected <any>   预期
* message <any> 错误提示信息

使用全等运算符（===）测试 actual 参数与 expected 参数是否全等。

**举🌰**

```
const assert = require('assert');

assert.strictEqual(1, 2);
// 抛出 AssertionError: 1 === 2

assert.strictEqual(1, 1);
// 测试通过。

assert.strictEqual(1, '1');
// 抛出 AssertionError: 1 === '1'
```

如果两个值不全等，则抛出一个带有 message 属性的 AssertionError，其中 message 属性的值等于传入的 message 参数的值。 如果 message 参数为 undefined，则赋予默认的错误信息。

#### assert.throws(block[, error][, message])

**参数**
* block <Function>  执行函数
* error <RegExp> | <Function> 指定错误类型参数
* message <any>     错误提示信息

断言 block 函数会抛出错误。

error 参数可以是构造函数、正则表达式、或自定义函数。

如果指定了 message 参数，则当 block 函数不抛出错误时，message 参数会作为 AssertionError 的错误信息。

throws方法预期某个代码块会抛出一个错误，且抛出的错误符合指定的条件。

**举🌰**

例子，error 参数为构造函数：

```
assert.throws(
  () => {
    throw new Error('错误信息');
  },
  Error
);
```

例子，error 参数为正则表达式：

```
assert.throws(
  () => {
    throw new Error('错误信息');
  },
  /错误/
);
```

例子，error 参数为自定义函数：

```
assert.throws(
  () => {
    throw new Error('错误信息');
  },
  function(err) {
    if ((err instanceof Error) && /错误/.test(err)) {
      return true;
    }
  },
  '不是期望的错误'
);
```
error 参数不能是字符串。 如果第二个参数是字符串，则视为省略 error 参数，传入的字符串会被用于 message 参数。 例如：

```
// 这是错误的！不要这么做！
assert.throws(myFunction, '错误信息', '没有抛出期望的信息');

// 应该这么做。
assert.throws(myFunction, /错误信息/, '没有抛出期望的信息');
```

## 注意事项

对于 SameValueZero 比较，建议使用 ES2015 的 Object.is()。

```
const a = 0;
const b = -a;
assert.notStrictEqual(a, b);
// 抛出 AssertionError: 0 !== -0
// 因为全等运算符不区分 -0 与 +0。
assert(!Object.is(a, b));
// 但 Object.is() 可以区分。

const str1 = 'foo';
const str2 = 'foo';
assert.strictEqual(str1 / 1, str2 / 1);
// 抛出 AssertionError: NaN === NaN
// 因为全等运算符不能用于测试 NaN。
assert(Object.is(str1 / 1, str2 / 1));
// 但 Object.is() 可以测试。

```

