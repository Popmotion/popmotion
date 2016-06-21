import colorType from '../value-types/color';
import complexType from '../value-types/complex';
import unitType from '../value-types/unit';
import { isString } from '../inc/utils';
import NUMERICAL_VALUES from '../inc/numerical-values';

const NUM_NUMERICAL_VALUES = NUMERICAL_VALUES.length;

export default (value) => {
  for (let i = 0; i < NUM_NUMERICAL_VALUES; i++) {
    const valueProp = value[NUMERICAL_VALUES[i]];
    if (isString(valueProp)) {
      if (colorType.test(valueProp)) {
        return colorType;
      } else if (complexType.test(valueProp)) {
        return complexType;
      } else if (unitType.test(valueProp)) {
        return unitType;
      }
    }
  }
};