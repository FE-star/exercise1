var assert = require('assert')

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1)
    })
  })
})

describe('assert', function () {
  it('a should deep equal to b', function () {
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
    assert.deepStrictEqual(a, b)
  })

  it('should catch and validate Error', function () {
    assert.throws( 
        () => {
        	throw new Error('Error');
		},
		Error,
		'Error'
	);
  })
})