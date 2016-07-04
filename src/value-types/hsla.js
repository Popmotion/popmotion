import isFirstChar from './utils/is-first-char';
import splitColorValues from './utils/split-color-values';
import alpha from './alpha';
import number from './number';
import percent from './percent';

const HUE = 'Hue';
const SATURATION = 'Saturation';
const LIGHTNESS = 'Lightness';
const ALPHA = 'Alpha';

const template = (colors) => `hsla(${colors[HUE]}, ${colors[SATURATION]}, ${colors[LIGHTNESS]}, ${colors[ALPHA]})`;

export default {
  childTypes: {
    [HUE]: number,
    [SATURATION]: percent,
    [LIGHTNESS]: percent,
    [ALPHA]: alpha
  },

  test: isFirstChar('hsl'),

  parse: splitColorValues([HUE, SATURATION, LIGHTNESS, ALPHA]),

  output: template
}