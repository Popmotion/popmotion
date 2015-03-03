"use strict";

var templates = require('./templates.js'),
    lookup = require('./lookup.js'),
    
    buildTransform = function (css) {
        console.log(css);
        return css;
    },
    
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
        key = '';
    
    for (; i < numRules; i++) {
        key = order[i],
        rule = generateRule(key, output);
        
        if (cache[key] !== rule) {
            css[key] = rule;
        }

        cache[key] = rule;
    }
    
    css = buildTransform(css);
    
    return css;
};