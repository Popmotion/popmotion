"use strict";

var presetManager = require('../../actor/preset-manager'),
    utils = require('../../inc/utils');

module.exports = function (base, override) {
    var props = typeof base === 'string' ? presetManager.getDefined(base) : base;

    // Override properties with second arg if it's an object
    if (typeof override === 'object') {
        props = utils.merge(props, override);
    }

    return props;
};