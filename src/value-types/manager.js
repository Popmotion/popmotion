"use strict";

var ModuleManager = require('../inc/ModuleManager'),
    valueTypeManager = new ModuleManager();

valueTypeManager.defaultProps = function (type, key) {
    var valueType = this[type],
        defaultProps = (valueType.defaultProps) ? valueType.defaultProps[key] || valueType.defaultProps : {};

    return defaultProps;
};

module.exports = valueTypeManager;