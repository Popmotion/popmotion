"use strict";

var utils = require('../inc/utils'),
    ModuleManager = require('../inc/ModuleManager'),
    valueTypeManager = new ModuleManager();

valueTypeManager.defaultProps = function (type, key) {
    var valueType = this[type],
        defaultProps = (valueType.defaultProps) ? valueType.defaultProps[key] || valueType.defaultProps : {};

    return utils.copy(defaultProps);
};

module.exports = valueTypeManager;