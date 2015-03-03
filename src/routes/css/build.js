"use strict";

var templates = require('./templates.js'),
    lookup = require('./lookup.js'),
    
    TRANSFORM = 'transform',
    
    /*
        Generate a CSS rule with the available template
    */
    generateRule = function (key, output) {
        var template = templates[lookup[key]],
            rule = template ? template(key, output) : output[key];
        
        return rule;
    };
    

module.exports = function (output, order, cache) {
    var css = {},
        numRules = order.length,
        i = 0,
        rule = '',
        key = '',
        transform = '';
    
    for (; i < numRules; i++) {
        key = order[i],
        rule = generateRule(key, output);
        
        if (isTransformRule) {
            transform += rule + ' ';

        } else if (cache[key] !== rule) {
            css[key] = rule;
            cache[key] = rule;
        }
    }
    
    if (transform != cache[TRANSFORM]) {
        css[TRANSFORM] = cache[TRANSFORM] = transform;
    }
    
    return css;
};