"use strict";

module.exports = {

    onChange: function (output, action, values) {
        var dom = action.dom;

        if (dom) {
            for (var key in output) {
                dom.setAttribute(key, output[key]);
            }
        }
    }
};