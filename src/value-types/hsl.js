import { percent, opacity } from './settings/default-props';
import { hsl as hslTerms } from './settings/dictionary';
import { createDelimited, createFunctionString, getColorValues } from '../inc/utils';

export default {
  defaultProps: {
    Hue: {
      min: 0,
      max: 360
    },
    Saturation: percent,
    Lightness: percent,
    Alpha: opacity
  },

  test: (value) => (value && value.indexOf('hsl') > -1),

  split: (value) => getColorValues(value, hslTerms),

  combine: (values) => createFunctionString(createDelimited(values, hslTerms, ', ', 2), 'hsla')
};
