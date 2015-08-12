"use strict";

var Output = function (props) {
        this.map = {};
        this.typeMap = {};

        if (props.init) {
            props.init();
        }
    };

Output.prototype = {
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
        this.setter(this.map[key] || key, value);
        return this;
    }
};

module.exports = Output;