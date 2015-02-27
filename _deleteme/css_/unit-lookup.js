"use strict";

var COLOR = ['hex', 'rgba', 'rgb'],
    XYZ = ['xyz'],
    DIMENSIONS = ['dimensions'],
    SHADOW = ['shadow'],
    ARRAY = ['array'];

module.exports = {
    color: COLOR,
    backgroundColor: COLOR,
    borderColor: COLOR,
    borderTopColor: COLOR,
    borderRightColor: COLOR,
    borderBottomColor: COLOR,
    borderLeftColor: COLOR,
    outlineColor: COLOR,
    margin: DIMENSIONS,
    padding: DIMENSIONS,
    backgroundPosition: XYZ,
    perspectiveOrigin: XYZ,
    transformOrigin: XYZ,
    skew: XYZ,
    scale: XYZ,
    translate: XYZ,
    rotate: XYZ,
    matrix: ARRAY,
    matrix3d: ARRAY,
    textShadow: SHADOW,
    boxShadow: SHADOW
};