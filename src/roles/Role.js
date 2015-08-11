"use strict";

var getterSetter = require('../inc/getter-setter'),
    generateGetterSetter = function (prop) {
        return function () {
            return getterSetter.call(this, arguments[0], arguments[1],
                // Getter
                function (key) {
                    return this[prop][key];
                },
                // Setter
                function (key, value) {
                    this[prop][key] = value;
                }
            );
        };
    },

    Role = function (props) {
        this._cache = {};
        this._map = {};
        this._typeMap = {};
    };

Role.prototype = {
    cache: generateGetterSetter('_cache'),
    map: generateGetterSetter('_map'),
    typeMap: generateGetterSetter('_typeMap'),

    get: function () {
        key = this.map(key)
    }
};

module.exports = Role;