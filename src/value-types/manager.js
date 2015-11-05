const each = require('../inc/utils').each;

module.exports = {
    extend: function (types) {
        each(types, (name, type) => {
            this[name] = type;
        });
    },

    defaultProps: function (typeName, key) {
        var valueType = this[typeName],
            defaultProps = (valueType.defaultProps) ? valueType.defaultProps[key] || valueType.defaultProps : {};

        return defaultProps;
    },

    test: function (value) {
        var type = false;

        each(this, (key, valueType) => {
            if (valueType.test && valueType.test(value)) {
                type = key;
                return false;
            }
        });

        return type;
    }
};
