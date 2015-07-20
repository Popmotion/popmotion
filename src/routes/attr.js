"use strict";

module.exports = {
    onChange: function (output, actor) {
        for (var key in output) {
            if (output.hasOwnProperty(key)) {
                actor.element.setAttribute(key, output[key]);
            }
        }
    }
};