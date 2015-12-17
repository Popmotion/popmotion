var COLOR = 'color',
    POSITIONS = 'positions',
    DIMENSIONS = 'dimensions',
    SCALE = 'scale',
    SHADOW = 'shadow',
    ANGLE = 'angle',
    ALPHA = 'alpha',
    PX = 'px';

module.exports = {
    // Color properties
    color: COLOR,
    backgroundColor: COLOR,
    outlineColor: COLOR,
    fill: COLOR,
    stroke: COLOR,
    // Border
    borderColor: COLOR,
    borderTopColor: COLOR,
    borderRightColor: COLOR,
    borderBottomColor: COLOR,
    borderLeftColor: COLOR,
    borderRadius: PX,
    // Dimensions
    margin: DIMENSIONS,
    padding: DIMENSIONS,
    width: PX,
    height: PX,    
    // Positions
    backgroundPosition: POSITIONS,
    perspectiveOrigin: POSITIONS,
    transformOrigin: POSITIONS,
    // Shadows
    textShadow: SHADOW,
    boxShadow: SHADOW,    
    // Transform properties
    rotate: ANGLE,
    rotateX: ANGLE,
    rotateY: ANGLE,
    rotateZ: ANGLE,
    scale: SCALE,
    scaleX: SCALE,
    scaleY: SCALE,
    scaleZ: SCALE,
    skewX: ANGLE,
    skewY: ANGLE,
    distance: PX,
    translateX: PX,
    translateY: PX,
    translateZ: PX,
    perspective: PX,
    opacity: ALPHA
};