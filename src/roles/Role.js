"use strict";

var Role = function (props) {
        this.cache = {};
        this.map = {};
        this.typeMap = {};

        if (props.init) {
            props.init();
        }
    };

Role.prototype = {
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
        if (this.onFrame) {
            this.onFrame(values);
        }

        if (this.onUpdate && hasChanged) {
            this.onUpdate(values);
        }
    },

    get: function (key) {
        return this.getter(this.map[key] || key);
    },

    set: function (key, value) {
        var cachedValue = this.cache[key];

        if (cachedValue !== value) {
            this.setter(this.map[key] || key, value);
        }

        return this;
    }
};

module.exports = Role;