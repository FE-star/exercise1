
var example = {
    add: function add (a, b) {
        return a + b;
    },
    errorFunc: function () {
        throw new TypeError('错误信息')
    },
    sayHello: function (name, callback) {
        let error = false;
        let str = "Hello " + name;
        callback(error, str);
    }
};

module.exports = example;