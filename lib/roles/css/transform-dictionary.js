"use strict";

var positionTerms = require('../../value-types/settings/dictionary').positions,
    numPositionTerms = positionTerms.length,
    TRANSFORM_PERSPECTIVE = 'transformPerspective',
    SCALE = 'scale',
    ROTATE = 'rotate',
    terms = {
    funcs: ['translate', SCALE, ROTATE, 'skew', TRANSFORM_PERSPECTIVE],
    props: {} // objects are faster at direct lookups
};

// Create transform terms
(function () {
    var funcs = terms.funcs,
        props = terms.props,
        numFuncs = funcs.length,
        i = 0,
        createProps = function createProps(funcName) {
        var j = 0;

        for (; j < numPositionTerms; j++) {
            props[funcName + positionTerms[j]] = true;
        }
    };

    // Manually add skew and transform perspective 
    props[ROTATE] = props[SCALE] = props[TRANSFORM_PERSPECTIVE] = true;

    // Loop over each function name and create function/property terms
    for (; i < numFuncs; i++) {
        createProps(funcs[i]);
    }
})();

module.exports = terms;