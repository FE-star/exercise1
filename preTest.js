/**
 * 检查类型
 * @param {*} data 
 * @param {*} type 
 */
const is = (data, type) => Object.prototype.toString.call(data) === (`[object ${type}]`)

const isExist = (data, scopeData) => {
    const fail = -1
    if (is(scopeData) !== 'Array' || data === undefined) return fail
    return scopeData.indexOf(data)
}
const errorFun = () => xxx

module.exports = {
    isExist,
    errorFun
}