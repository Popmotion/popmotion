import { splitCommaDelimited, getValueFromFunctionString } from '../../inc/utils';

export default function splitColorValues(terms) {
  const numTerms = terms.length;

  return function (v) {
    const values = {};
    const valuesArray = splitCommaDelimited(getValueFromFunctionString(v));

    for (let i = 0; i < numTerms; i++) {
      values[terms[i]] = (valuesArray[i] !== undefined) ? parseFloat(valuesArray[i]) : 1;
    }

    return values;
  }
}
