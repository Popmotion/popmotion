import {
  alpha,
  color,
  degrees,
  scale,
  px,
  percent,
  ValueType
} from 'style-value-types';

const valueTypes: { [key: string]: ValueType } = {
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
  maxWidth: px,
  height: px,
  maxHeight: px,
  top: px,
  left: px,
  bottom: px,
  right: px,

  // Transform properties
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale: scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  perspective: px,
  opacity: alpha,
  transformOriginX: percent,
  transformOriginY: percent,
  transformOriginZ: px
};

export default (key: string) => valueTypes[key];
