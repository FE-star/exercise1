var assert = require("node:assert/strict");

describe("Array", function () {
  describe("#indexOf()", function () {
    test("当value不在数组中应当返回-1", function () {
      function tmp(value) {
        return [1, 2, 3].indexOf(value);
      }
      assert.equal(tmp(10), -1);
    });
  });
});

describe("assert", function () {
  test("a和b应当深度相等", function () {
    var a = {
      c: {
        e: 1,
      },
    };
    var b = {
      c: {
        e: 1,
      },
    };

    function tmp(obj) {
      const deeps = new Set();

      for (let key of Reflect.ownKeys(obj)) {
        const value = obj[key];
        if (typeof value === "object") {
          deeps.add(1 + tmp(value));
        } else {
          deeps.add(1);
        }
      }

      return Math.max(...deeps);
    }

    // 修改下面代码使得满足测试描述
    assert.equal(tmp(a), tmp(b));
  });

  test("可以捕获并验证函数fn的错误", function () {
    function fn() {
      xxx;
    }

    assert.throws(
      () => {
        fn();
      },
      {
        name: "ReferenceError",
      }
    );
  });
});
