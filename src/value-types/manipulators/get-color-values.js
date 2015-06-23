var splitCommaDelimited = require('./split-comma-delimited'),
    functionBreak = require('./function-break');

module.exports = function (value) {
    return splitCommaDelimited(functionBreak(value));
};