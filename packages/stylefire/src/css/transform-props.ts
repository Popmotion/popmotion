type Dictionary = { [key: string]: boolean };

const axes = ['', 'X', 'Y', 'Z'];
const order = ['scale', 'rotate', 'skew', 'transformPerspective'];

export const transformProps = order.reduce(
  (acc, key) => {
    return axes.reduce((axesAcc, axesKey) => {
      axesAcc.push(key + axesKey);
      return axesAcc;
    }, acc);
  },
  ['x', 'y', 'z']
);

const transformPropDictionary: Dictionary = transformProps.reduce(
  (dict: Dictionary, key: string) => {
    dict[key] = true;
    return dict;
  },
  {}
);

export const isTransformProp = (key: string) =>
  transformPropDictionary[key] === true;
export const sortTransformProps = (a: string, b: string) =>
  transformProps.indexOf(a) - transformProps.indexOf(b);

export const isTransformOriginProp = (key: string) =>
  key === 'originX' || key === 'originY';
