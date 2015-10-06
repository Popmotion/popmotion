var each = require('../inc/utils').each,

    ValueTypeManager = function () {};

ValueTypeManager.prototype = {
    extend: function (name, mod) {
        var multiMods = (typeof name == 'object'),
            mods = multiMods ? name : {};

        // If we just have one module, coerce
        if (!multiMods) {
            mods[name] = mod;
        }

        each(mods, (key, thisMod) => {
            this[key] = thisMod;
        });
    },

    defaultProps: function (type, key) {
        var valueType = this[type],
            defaultProps = (valueType.defaultProps) ? valueType.defaultProps[key] || valueType.defaultProps : {};

        return defaultProps;
    },

    test: function (value) {
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
