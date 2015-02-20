"use strict";

var ARRAY = 'array',
    COLOR = 'color',
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
    skew: POSITIONS,
    scale: POSITIONS,
    translate: POSITIONS,
    rotate: POSITIONS,

    // Arrays
    matrix: ARRAY,
    matrix3d: ARRAY,
    
    // Shadows
    textShadow: SHADOW,
    boxShadow: SHADOW
};