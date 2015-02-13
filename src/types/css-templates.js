"use strict";

var templates = {
        color: function (r, g, b, a) {
            return 'rgba(' + r + ','+ g + ',' + b + ',' + a + ')';
        },
        extend: function (key, method) {
            this[key] = method;
        }
    },

    /*
        Generate generic multi-argument setter
        
        Will loop through provided arguments and generate a string
        like key(arg1, arg2, ...)
        
        @param [string]: Function name
        @return [function]: Custom function to set that name
    */
    generateMultiArgSetter = function (key) {
        return function () {
            var prop = key + '(',
                argsLength = arguments.length,
                lastKey = argsLength - 1;

            for (var i = 0; i < argsLength; i++) {
                prop += arguments[i];
                if (i !== lastKey) {
                    prop += ',';
                }
            }

            return prop + ')';
        }
    };

/*
    Generate transform setters
    
    Each transform method is generated five setter functions based
    on each dimension and grouped setters.
    
    The downside to this is generating nonsensical setters, like matrixZ,
    but the upside is a smaller filesize.
*/
(function () {
    var methods = ['translate', 'scale', 'skew', 'rotate', 'matrix'],
        dimensions = ['', '3d', 'X', 'Y', 'Z'],
        methodsLength = methods.length,
        dimensionsLength = dimensions.length,
        key = '';
        
    for (var i = 0; i < methodsLength; i++) {
        for (var j = 0; j < dimensionsLength; j++) {
            key = methods[i] + dimensions[j];

            templates.extend(key, generateMultiArgSetter(key));
        }
    }
})();
    
module.exports = templates;