"use strict";

var presetManager = require('../../element/preset-manager');

module.exports = function (base, override) {
    var props = (typeof base === 'string') ? presetManager.getDefined(base) : {};

    // Override properties with second arg if it's an object
    if (typeof override === 'object') {
        props = utils.merge(props, override);
    }
}