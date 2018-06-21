const add = require('./add');
const assert = require('assert').strict;

describe('add的测试', function() {
  it ('1 + 1 应该等于2', function() {
    assert.strictEqual(add(1, 1), 2);
  });

  it ('2 + 2 应该等于4', function() {
    assert.strictEqual(add(2, 2), 6);
  })
});