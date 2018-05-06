import { AnimatedPoser } from 'animated-pose/lib/types';

const defaultTransformOrder = [
  'x',
  'y',
  'z',
  'scale',
  'scaleX',
  'scaleY',
  'scaleZ',
  'rotate',
  'rotateX',
  'rotateY',
  'rotateZ',
  'skewX',
  'skewY',
  'skewZ',
  'perspective'
];

const aliasMap: { [key: string]: string } = {
  x: 'translateX',
  y: 'translateY',
  z: 'translateZ'
};

type TransformList = Array<{ [key: string]: any }>;

type StyleMap = {
  transform?: TransformList;
  [key: string]: any;
};

export const getStylesFromPoser = (poser: AnimatedPoser) => {
  const values = poser.get();
  let hasTransform = false;
  const styles = Object.keys(values).reduce(
    (acc, key) => {
      if (defaultTransformOrder.indexOf(key) === -1) {
        acc[key] = values[key];
      } else {
        hasTransform = true;
      }
      return acc;
    },
    {} as StyleMap
  );

  if (hasTransform) {
    styles.transform = defaultTransformOrder.reduce(
      (acc, key) => {
        if (values[key]) {
          acc.push({ [aliasMap[key] || key]: values[key] });
        }
        return acc;
      },
      [{ perspective: 1000 }] as TransformList
    );
  }

  return styles;
};
