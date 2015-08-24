"use strict";

var Role = require('../Role');
var each = require('../../inc/utils').each;

var AttrRole = new Role({
    name: 'attr',

    update: function (state) {
        var actor = this;

        each(state, function (key, value) {
            AttrRole.set.call(actor, key, value);
        });
    },

    get: function (key) {
        return this.element.getAttribute(key);
    },

    set: function (key, value) {
        this.element.setAttribute(key, value);
    }
});

module.exports = AttrRole;

