"use strict";

var dictionary = require('./dictionary.js'),
    templates = require('./templates.js'),
    lookup = require('./lookup.js'),
    
    TRANSFORM = 'transform',
    
    /*
        Generate a CSS rule with the available template
    */
    generateRule = function (key, output) {
        var template = templates[lookup[key]];

        return template ? template(key, output) : output[key];
    };
    

module.exports = function (output, order, cache) {
    var css = {},
        numRules = order.length,
        transformProp = dictionary.transformProps,
        i = 0,
        rule = '',
        key = '',
        transform = '';
    
    for (; i < numRules; i++) {
        key = order[i],
        rule = generateRule(key, output);

            console.log(transformProp);
        if (transformProp[key]) {
            transform += key + '(' + rule + ') ';

        } else if (cache[key] !== rule) {
            css[key] = rule;
            cache[key] = rule;
        }
    }
    
    if (transform != cache[TRANSFORM]) {
        css[TRANSFORM] = cache[TRANSFORM] = transform;
    }
    
    console.log(transform);
    
    return css;
};