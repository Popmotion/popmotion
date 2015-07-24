module.exports = function (value) {
    return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
};