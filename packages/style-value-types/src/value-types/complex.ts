import { ValueType } from '../types';

type TokenMap = { [key: string]: number };
const FLOAT_REGEX = /(-)?(\d[\d\.]*)/g;

const generateToken = (token: string) => '${' + token + '}';

const complex: ValueType = {
  test: v => {
    const matches = v.match && v.match(FLOAT_REGEX);
    return (
      matches !== undefined &&
      matches.constructor === Array &&
      matches.length > 1
    );
  },
  parse: v => {
    const parsedValue: TokenMap = {};
    v.match(FLOAT_REGEX).forEach(
      (value: string, i: number) => (parsedValue[i] = parseFloat(value))
    );
    return parsedValue;
  },
  createTransformer: (prop: string) => {
    let counter = 0;
    const template = prop.replace(FLOAT_REGEX, () =>
      generateToken(`${counter++}`)
    );

    return (v: TokenMap) => {
      let output = template;

      for (const key in v) {
        if (v.hasOwnProperty(key)) {
          output = output.replace(generateToken(key), v[key].toString());
        }
      }

      return output;
    };
  }
};

export default complex;
