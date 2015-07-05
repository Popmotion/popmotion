"use strict";

module.exports = {
    onChange: function (output, element) {
        for (var key in output) {
            if (output.hasOwnProperty(key)) {
                element.attr(key, output[key]);
            }
        }
    }
};