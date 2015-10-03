"use strict";

var each = require('../../inc/utils').each,
    transformDictionary = require('./transform-dictionary'),
    transformProps = transformDictionary.props,

    TRANSLATE_Z = 'translateZ';

module.exports = function (output, cache) {
    var css = {},
        transform = '',
        transformHasZ = false;
        
    // Loop through output, check for transform properties
    each(output, function (key, rule) {
        // If this is a transform property, add to transform string
        if (transformProps[key]) {
            transform += key + '(' + rule + ')';
            transformHasZ = (key === TRANSLATE_Z) ? true : transformHasZ;
        
        // Or just assign directly
        } else {
            if (rule !== cache[key]) {
                cache[key] = css[key] = rule;
            }
        }
    });

    // If we have transform properties, add translateZ
    if (transform !== '') {
        if (!transformHasZ) {
            transform += ' ' + TRANSLATE_Z + '(0px)';
        }

        if (transform !== cache.transform) {
            css.transform = transform;
        }
        
        cache.transform = transform;
    }

    return css;
};