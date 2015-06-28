"use strict";

var transformDictionary = require('./transform-dictionary'),
    transformProps = transformDictionary.props,

    TRANSFORM = 'transform',
    TRANSLATE_Z = 'translateZ';

module.exports = function (output, cache) {
    var css = {},
        key = '',
        transform = '',
        transformHasZ = false,
        rule = '';

    // Loop through output, check for transform properties and cache
    for (key in output) {
        rule = output[key];
        // If this is a transform property, add to transform string
        if (transformProps[key]) {
            transform += key + '(' + rule + ')';
            transformHasZ = (key === TRANSLATE_Z) ? true : transformHasZ;
        
        // Or just assign directly if different from cache
        } else if (cache[key] !== rule) {
            cache[key] = css[key] = rule;
        }
    }

    // If we have transform properties, add translateZ
    if (transform != '' && transform != cache[TRANSFORM]) {
        if (!transformHasZ) {
            transform += ' ' + TRANSLATE_Z + '(0px)';
        }

        cache[key] = css[key] = transform; 
    }

    return css;
};