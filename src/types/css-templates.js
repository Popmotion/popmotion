"use strict";

var methods = ['translate', 'scale', 'skew', 'rotate', 'matrix'],
    dimensions = ['', '3d', 'X', 'Y', 'Z'],
    templates = {
        color: function (r, g, b, a) {
            return 'rgba(' + r + ','+ g + ',' + b + ',' + a + ')';
        }
        extend: function (key, method) {
            this[key] = method;
        }
    };
    
(function () {
    var methodsLength = methods.length,
        dimensionsLength = dimensions.length,
        key = '';
        
    for (var i = 0; i < methodsLength; i++) {
        for (var j = 0; j < dimensionsLength; j++) {
            key = methods[i] + dimensions[j];
            templates.extend(key, function () {
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
            });
        }
    }
})();
    
module.exports = templates;