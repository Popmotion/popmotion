"use strict";

var Role = require('../Role');
var each = require('../../inc/utils').each;

var attrRole = new Role({
    update: function update(state) {
        var actor = this;

        each(state, function (key, value) {
            attrRole.set(actor.element, key, value);
        });
    },

    get: function get(element, key) {
        return element.getAttribute(key);
    },

    set: function set(element, key, value) {
        element.setAttribute(key, value);
    }
});

module.exports = attrRole;