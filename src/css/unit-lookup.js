"use strict";

var COLOR = ['hex', 'rgba', 'rgb'],
    XYZ = ['xyz'],
    DIMENSIONS = ['dimensions'],
    SHADOW = ['shadow'];

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
    textShadow: SHADOW,
    boxShadow: SHADOW
};