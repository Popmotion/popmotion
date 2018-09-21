import { alpha, color, scale, ValueType } from 'style-value-types';

const valueTypes: { [key: string]: ValueType } = {
  fill: color,
  stroke: color,
  scale: scale,
  scaleX: scale,
  scaleY: scale,
  opacity: alpha,
  fillOpacity: alpha,
  strokeOpacity: alpha
};

export default (key: string) => valueTypes[key];

