import isFirstChar from './utils/is-first-char';
import alpha from './alpha';
import rgbColor from './rgb-color';

export default {
  childTypes: {
    Red: rgbColor,
    Green: rgbColor,
    Blue: rgbColor,
    Alpha: alpha
  },

  test: isFirstChar('rgb'),

  parse: () => {},

  template: ({ Red, Green, Blue, Alpha }) => `rgba(${Red}, ${Green}, ${Blue}, ${Alpha})`,

  output: () => combineObject()
}