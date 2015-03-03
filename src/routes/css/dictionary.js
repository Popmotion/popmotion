"use strict";

var lookup = require('./lookup.js'),
    terms = {
        colors: ['Red', 'Green', 'Blue', 'Alpha'],
        positions: ['X', 'Y', 'Z'],
        dimensions: ['Top', 'Right', 'Bottom', 'Left'],
        shadow: ['X', 'Y', 'Radius', 'Spread', 'Color'],
        transform: ['translate', 'scale', 'rotate', 'skew', 'transformPerspective'],
        valueProps: ['current', 'to', 'start', 'min', 'max']
    };

// Create transform terms
var transformFuncs = terms.transform,
    numTransform = transformFuncs.length,
    transformProps = {},
    thisLookup;
    
terms.transformProps = transformProps;

for (var i = 0; i < numTransform; i++) {
    
    thisLookup = lookup[transformFuncs[i]];
    theseTerms = terms[thisLookup];
    
    if (theseTerms) {
        for (var j = 0; i < theseTerms; j++) {
            transformProps[transformFuncs[i] + theseTerms[i]] = true;
        }
    }
    
}

module.exports = terms;