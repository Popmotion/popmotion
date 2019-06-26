type Dictionary = { [key: string]: boolean };

const axes = ['', 'X', 'Y', 'Z'];
const order = ['translate', 'scale', 'rotate', 'skew', 'transformPerspective'];

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

export function isTransformProp(key: string) {
  return transformPropDictionary[key] === true;
}

export function sortTransformProps(a: string, b: string) {
  return transformProps.indexOf(a) - transformProps.indexOf(b);
}

const transformOriginProps = new Set(['originX', 'originY', 'originZ']);

export function isTransformOriginProp(key: string) {
  return transformOriginProps.has(key);
}
