"use strict";

var ARRAY = 'array',
    COLOR = 'colors',
    POSITIONS = 'positions',
    DIMENSIONS = 'dimensions',
    SHADOW = 'shadow';

module.exports = {
    // Color properties
    color: COLOR,
    backgroundColor: COLOR,
    borderColor: COLOR,
    borderTopColor: COLOR,
    borderRightColor: COLOR,
    borderBottomColor: COLOR,
    borderLeftColor: COLOR,
    outlineColor: COLOR,

    // Dimensions
    margin: DIMENSIONS,
    padding: DIMENSIONS,

    // Positions
    backgroundPosition: POSITIONS,
    perspectiveOrigin: POSITIONS,
    transformOrigin: POSITIONS,
    
    // Transform functions
    transformPerspective: 'perspective',
    
    // Shadows
    textShadow: SHADOW,
    boxShadow: SHADOW
};