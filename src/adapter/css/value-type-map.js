import angle from '../../value-types/angle';
import alpha from '../../value-types/alpha';
import color from '../../value-types/color';
import scale from '../../value-types/scale';
import shadow from '../../value-types/shadow';
import px from '../../value-types/px';

export default {
    // Color props
    color: color,
    backgroundColor: color,
    outlineColor: color,
    fill: color,
    stroke: color,

    // Border props
    borderColor: color,
    borderTopColor: color,
    borderRightColor: color,
    borderBottomColor: color,
    borderLeftColor: color,
    borderRadius: px,

    // Positioning
    width: px,
    height: px,

    // Shadows
    textShadow: shadow,
    boxShadow: shadow,   

    // Transform properties
    rotate: angle,
    rotateX: angle,
    rotateY: angle,
    rotateZ: angle,
    scale: scale,
    scaleX: scale,
    scaleY: scale,
    scaleZ: scale,
    skewX: angle,
    skewY: angle,
    distance: px,
    translateX: px,
    translateY: px,
    translateZ: px,
    perspective: px,
    opacity: alpha
};