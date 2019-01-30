import { alpha, color, scale, number, ValueType } from 'style-value-types';

const int = { ...number, transform: Math.round };

const valueTypes: { [key: string]: ValueType } = {
  fill: color,
  stroke: color,
  scale,
  scaleX: scale,
  scaleY: scale,
  opacity: alpha,
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};

export default (key: string) => valueTypes[key];
