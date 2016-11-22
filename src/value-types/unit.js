import { isNum, findValueAndUnit } from '../inc/utils';

export default {
  test: function (unparsed) {
    const { value } = findValueAndUnit(unparsed);
    return (isNum(value) && !isNaN(value)) ? true : false;
  },

  parse: function (unparsed, parent) {
    const { value, unit } = findValueAndUnit(unparsed);

    if (unit && unit !== parent.unit) {
      parent.unit = unit;
    }

    return value;
  },

  serialize: (parsed, parent) => parsed + (parent.unit || '')
};
