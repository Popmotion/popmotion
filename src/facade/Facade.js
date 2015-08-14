"use strict";

var utils = require('../inc/utils'),
    each = utils.each;

var Output = function (props) {
        var output = this;

        this._map = {};

        each(props, function (key, method) {
            output[key] = method;
        });
    };

ElementHandler.prototype = {
    actionStart: function (element, values) {
        if (this.onStart) {
            this.onStart(element, values);
        }
    },

    actionEnd: function (element, values) {
        if (this.onEnd) {
            this.onEnd(element, values);
        }
    },

    update: function (element, values, hasChanged) {
        if (this.onFrame) {
            this.onFrame(element, values);
        }

        if (this.onUpdate && hasChanged) {
            this.onUpdate(element, values);
        }
    },

    get: function (element, key) {
        if (this.getter) {
            return this.getter(element, this._map[key] || key);
        }
    },

    set: function (element, key, value) {
        if (this.setter) {
            this.setter(element, this._map[key] || key, value);
        }
    },

    map: function (props) {
        var newOutput = new Output(utils.copy(this));

        each(props, function (key, value) {
            newOutput._map[key] = value;
        });

        return newOutput;
    }
};

module.exports = Output;
