/*
    DOM Attr route
    ==============================================
*/
"use strict";

module.exports = {
    onChange: function (output) {
        for (var key in output) {
            if (output.hasOwnProperty(key)) {
                this.element.setAttribute(key, output[key]);
            }
        }
    },

    get: function (key) {
        return this.element.getAttribute(key);
    },

    set: function (key, value) {
        this.element.setAttribute(key, value);
    }
};