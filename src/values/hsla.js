import contains from './utils/contains';
import alpha from './alpha';
import degrees from './degrees';
import percent from './percent';

export default {
  childTypes: {
    Hue: degrees,
    Saturation: percent,
    Lightness: percent,
    Alpha: alpha
  },

  test: contains('hsl'),

  parse: ,

  template: ({ Hue, Saturation, Lightness, Alpha }) => `hsla(${Hue}, ${Saturation}, ${Lightness}, ${Alpha})`,

  output: 
}