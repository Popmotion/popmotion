"use strict";

var rgb = require('./rgb');

module.exports = {

    defaultProps: rgb.defaultProps,

    test: function (value) {
        return (value && value.indexOf('#') > -1);
    },
    
    split: function (value) {
        var r, g, b;

        // If we have 6 characters, ie #FF0000
        if (value.length > 4) {
            r = value.substr(1, 2);
            g = value.substr(3, 2);
            b = value.substr(5, 2);

        // Or we have 3 characters, ie #F00
        } else {
            r = value.substr(1, 1);
            g = value.substr(2, 1);
            b = value.substr(3, 1);
            r += r;
            g += g;
            b += b;
        }

        return {
            Red: parseInt(r, 16),
            Green: parseInt(g, 16),
            Blue: parseInt(b, 16),
            Alpha: 1
        };
    },

    combine: function (values) {
        return rgb.combine(values);
    }
};