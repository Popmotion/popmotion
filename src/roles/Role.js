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

        if (props.init) {
            props.init();
        }
    };

Role.prototype = {
    cache: generateGetterSetter('_cache'),
    map: generateGetterSetter('_map'),
    typeMap: generateGetterSetter('_typeMap'),

    actionStart: function (values) {
        if (this.onStart) {
            this.onStart(values);
        }
    },

    actionEnd: function (values) {
        if (this.onEnd) {
            this.onEnd(values);
        }
    },

    update: function (values, hasChanged) {
        getterSetter.call(this, values, undefined, this.get, undefined);

        if (this.onFrame) {
            this.onFrame(values);
        }

        if (this.onUpdate && hasChanged) {
            this.onUpdate(values);
        }
    },

    get: function (key) {
        return this.getter(this.map(key));
    },

    set: function (key, value) {
        this.setter(this.map(key), value);
        return this;
    }
};

module.exports = Role;