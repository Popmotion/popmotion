/*
    DOM Attr route
    ==============================================
*/
"use strict";

module.exports = {
    onChange: function onChange(output) {
        for (var key in output) {
            if (output.hasOwnProperty(key)) {
                this.element.setAttribute(key, output[key]);
            }
        }
    },

    get: function get(key) {
        return this.element.getAttribute(key);
    },

    set: function set(key, value) {
        this.element.setAttribute(key, value);
    }
};