"use strict";

var createRole = require('../create-role'),
    each = require('../../inc/utils').each;

module.exports = createRole({
    onUpdate: function (output, element) {
        var set = this.set;

        each(output, function (key, value) {
            set(key, value, element);
        });
    },

    get: function (name, element) {
        return element.getAttribute(name);
    },

    set: function (name, value, element) {
        element.setAttribute(name, value);
    }
});