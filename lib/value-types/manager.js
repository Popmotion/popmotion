'use strict';

var each = require('../inc/utils').each,
    ValueTypeManager = function ValueTypeManager() {};

ValueTypeManager.prototype = {
    extend: function extend(name, mod) {
        var _this = this;

        var multiMods = typeof name == 'object',
            mods = multiMods ? name : {};

        // If we just have one module, coerce
        if (!multiMods) {
            mods[name] = mod;
        }

        each(mods, function (key, thisMod) {
            _this[key] = thisMod;
        });
    },

    defaultProps: function defaultProps(type, key) {
        var valueType = this[type],
            defaultProps = valueType.defaultProps ? valueType.defaultProps[key] || valueType.defaultProps : {};

        return defaultProps;
    },

    test: function test(value) {
        var type = false;

        each(this, function (key, mod) {
            if (mod.test && mod.test(value)) {
                type = key;
            }
        });

        return type;
    }
};

module.exports = new ValueTypeManager();