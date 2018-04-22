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

const aliasMap = {
  x: 'translateX',
  y: 'translateY',
  z: 'translateZ'
};

export const getStylesFromPoser = poser => {
  const values = poser.get();
  let hasTransform = false;
  const styles = Object.keys(values).reduce((acc, key) => {
    if (defaultTransformOrder.indexOf(key) === -1) {
      acc[key] = values[key];
    } else {
      hasTransform = true;
    }
    return acc;
  }, {});

  if (hasTransform) {
    styles.transform = defaultTransformOrder.reduce((acc, key) => {
      if (values[key]) {
        acc.push({ [aliasMap[key] || key]: values[key] });
      }
      return acc;
    }, []);
  }

  return styles;
};

export const getProps = ({
  registerAsChild,
  onUnmount,
  Component,
  pose,
  ...props
}) => props;
