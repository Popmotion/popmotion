'use strict';

var each = require('../inc/utils').each;

module.exports = {
    extend: function extend(types) {
        var _this = this;

        each(types, function (name, type) {
            _this[key] = type;
        });
    },

    defaultProps: function defaultProps(typeName, key) {
        var valueType = this[typeName],
            defaultProps = valueType.defaultProps ? valueType.defaultProps[key] || valueType.defaultProps : {};

        return defaultProps;
    },

    test: function test(value) {
        var type = false;

        each(this, function (key, valueType) {
            if (valueType.test && valueType.test(value)) {
                type = key;
                return false;
            }
        });

        return type;
    }
};