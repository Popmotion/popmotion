"use strict";

var createRole = require('../create-role');

module.exports = createRole({
    update: function (output, element, actor) {
        for (var key in output) {
            if (output.hasOwnProperty(key)) {
                this.set(key, output[key], element);
            }
        }
    },

    get: function (name, element) {
        return element.getAttribute(name);
    },

    set: function (name, value, element) {
        element.setAttribute(name, value);
    }
});