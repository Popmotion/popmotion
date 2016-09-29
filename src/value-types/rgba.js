import isFirstChar from './utils/is-first-char';
import splitColorValues from './utils/split-color-values';
import alpha from './alpha';
import rgbColor from './rgb-color';

const RED = 'red';
const GREEN = 'green';
const BLUE = 'blue';
const ALPHA = 'alpha';

const template = (colors) => `rgba(${colors[RED]}, ${colors[GREEN]}, ${colors[BLUE]}, ${colors[ALPHA]})`;

export default {
  childTypes: {
    [RED]: rgbColor,
    [GREEN]: rgbColor,
    [BLUE]: rgbColor,
    [ALPHA]: alpha
  },

  test: isFirstChar('rgb'),

  parse: splitColorValues([RED, GREEN, BLUE, ALPHA]),

  output: template
};
