"use strict";

module.exports = {
    onChange: function (output, element) {
        for (var key in output) {
            element.attr(key, output[key]);
        }
    }
};