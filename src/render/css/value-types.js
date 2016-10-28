import { angle, alpha, color, scale, shadow, px } from '../../value/types'; 
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
  x: px,
  y: px,
  z: px,
  perspective: px,
  opacity: alpha
};
