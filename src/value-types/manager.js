"use strict";

var defaultProps = require('./settings/default-props'),
    ModuleManager = require('../inc/ModuleManager'),
    valueTypeManager = new ModuleManager();

valueTypeManager.defaultProps = function (key) {
    return defaultProps[key] ? utils.copy(defaultProps[key]) : {};
};

module.exports = valueTypeManager;