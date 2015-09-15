"use strict";

var ModManager = require('../inc/ModManager'),
    valueTypeManager = new ModManager();

valueTypeManager.defaultProps = function (type, key) {
    var valueType = this[type],
        defaultProps = valueType.defaultProps ? valueType.defaultProps[key] || valueType.defaultProps : {};

    return defaultProps;
};

valueTypeManager.test = function (value) {
    var type = false;

    this.each(function (key, mod) {
        if (mod.test && mod.test(value)) {
            type = key;
        }
    });

    return type;
};

module.exports = valueTypeManager;