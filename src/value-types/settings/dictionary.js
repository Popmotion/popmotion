"use strict";

var X = 'X',
    Y = 'Y',
    TRANSFORM_PERSPECTIVE = 'transformPerspective',
    SCALE = 'scale',
    ROTATE = 'rotate',
    ALPHA = 'Alpha',

    terms = {
        colors: ['Red', 'Green', 'Blue', ALPHA],
        positions: [X, Y, 'Z'],
        dimensions: ['Top', 'Right', 'Bottom', 'Left'],
        shadow: [X, Y, 'Radius', 'Spread', 'Color'],
        hsl: ['Hue', 'Saturation', 'Lightness', ALPHA],
        valueProps: ['current', 'to', 'start', 'min', 'max'],
        transformFuncs: ['translate', SCALE, ROTATE, 'skew', TRANSFORM_PERSPECTIVE],
        transformProps: {} // objects are faster at direct lookups
    };

// Create transform terms
(function () {
    var transformFuncs = terms.transformFuncs,
        transformProps = terms.transformProps,
        numOfTransformFuncs = transformFuncs.length,
        i = 0,

        createProps = function (funcName) {
            var typeTerms = terms.positions,
                j = 0;

            if (typeTerms) {
                for (; j < typeTerms.length; j++) {
                    transformProps[funcName + typeTerms[j]] = true;
                }
            }
        };
    
    // Manually add skew and transform perspective  
    transformProps[ROTATE] = transformProps[SCALE] = transformProps[TRANSFORM_PERSPECTIVE] = true;
    
    // Loop over each function name and create function/property terms
    for (; i < numOfTransformFuncs; i++) {
        createProps(transformFuncs[i]);
    }
})();

module.exports = terms;