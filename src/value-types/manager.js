"use strict";

var ModManager = require('../inc/ModManager'),
    valueTypeManager = new ModManager();

valueTypeManager.defaultProps = function (type, key) {
    var valueType = this[type],
        defaultProps = (valueType.defaultProps) ? valueType.defaultProps[key] || valueType.defaultProps : {};

    return defaultProps;
};

module.exports = valueTypeManager;