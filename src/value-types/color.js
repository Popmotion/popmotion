var utils = require('../inc/utils'),
    rgb = require('./rgb'),
    hsl = require('./hsl'),
    hex = require('./hex'),
    supported = [rgb, hsl, hex],
    numSupported = 3,

    runSupported = function (method, value) {
        for (var i = 0; i < numSupported; i++) {
            if (supported[i].test(value)) {
                return supported[i][method](value);
            }
        }
    };

module.exports = {
    defaultProps: utils.merge(rgb.defaultProps, hsl.defaultProps),

    test: value => rgb.test(value) || hex.test(value) || hsl.test(value),

    split: value => runSupported('split', value),

    combine: values => (values.Red !== undefined) ? rgb.combine(values) : hsl.combine(values)
};