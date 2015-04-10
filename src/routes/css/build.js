"use strict";

var dictionary = require('./dictionary.js'),
    templates = require('./templates.js'),
    lookup = require('./lookup.js'),
    
    TRANSFORM = 'transform',
    TRANSLATE_Z = 'translateZ',
    
    /*
        Generate a CSS rule with the available template
    */
    generateRule = function (key, output, transformProp) {
        var templateKey = transformProp ? TRANSFORM : lookup[key],
            template = templates[templateKey];

        return template ? template(key, output) : output[key];
    };
    

module.exports = function (output, order, cache) {
    var css = {},
        numRules = order.length,
        hasZ = false,
        transformProp = dictionary.transformProps,
        i = 0,
        rule = '',
        key = '',
        transform = '';
    
    for (; i < numRules; i++) {
        key = order[i],
        rule = generateRule(key, output, transformProp[key]);

        if (transformProp[key]) {
            transform += rule + ' ';
            hasZ = (key === TRANSLATE_Z) ? true : hasZ;

        } else if (cache[key] !== rule) {
            css[key] = rule;
            cache[key] = rule;
        }
    }
    
    // check for filters and remove z
    
    if (transform != '' && transform != cache[TRANSFORM]) {
        if (!hasZ) {
            transform += ' ' + TRANSLATE_Z + '(0px)';
        }
        
        css[TRANSFORM] = cache[TRANSFORM] = transform;
    }

    return css;
};