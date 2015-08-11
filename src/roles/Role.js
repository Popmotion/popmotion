"use strict";

var each = require('../inc/utils').each,

    Role = function (props) {
        
    };

Role.prototype = {
    map: function (opts) {
        var map = this._map;

        each(opts, function (key, value) {
            map[key] = value;
        });
    }
};

module.exports = Role;