"use strict";

var transformDictionary = require('./transform-dictionary'),
    transformProps = transformDictionary.props,

    TRANSLATE_Z = 'translateZ';

module.exports = function (output) {
    var css = {},
        key = '',
        transform = '',
        transformHasZ = false,
        rule = '';
        
    // Loop through output, check for transform properties
    for (key in output) {
        if (output.hasOwnProperty(key)) {
            rule = output[key];
            // If this is a transform property, add to transform string
            if (transformProps[key]) {
                transform += key + '(' + rule + ')';
                transformHasZ = (key === TRANSLATE_Z) ? true : transformHasZ;
            
            // Or just assign directly
            } else {
                css[key] = rule;
            }
        }
    }

    // If we have transform properties, add translateZ
    if (transform !== '') {
        if (!transformHasZ) {
            transform += ' ' + TRANSLATE_Z + '(0px)';
        }

        css.transform = transform;
    }

    return css;
};