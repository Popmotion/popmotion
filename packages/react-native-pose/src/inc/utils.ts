import { AnimatedPoser } from 'animated-pose';

type TransformList = Array<{ [key: string]: any }>;

type StyleMap = {
  transform?: TransformList;
  [key: string]: any;
};

/**
 * Order in which to apply transforms via the `transform` property.
 * This is based off the CSS Transforms Level 2 proposal:
 * https://drafts.csswg.org/css-transforms-2/#individual-transforms
 *
 * This is to remove the manual order definition, though this can still
 * be achieved by defining an empty component `posed()(config)`, which will
 * (using the children-as-function pattern) pass the generated Animated.Values
 * for the user to consume arbitrarily.
 */
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

/**
 * Allow the use of x/y/z as shorthand for `translate` properties.
 */
const aliasMap: { [key: string]: string } = {
  x: 'translateX',
  y: 'translateY',
  z: 'translateZ'
};

/**
 * Accepts a poser, and returns an animated React Native style object.
 */
export const getStylesFromPoser = (poser: AnimatedPoser) => {
  const values = poser.get();
  let hasTransform = false;
  const styles = Object.keys(values).reduce(
    (acc, key) => {
      // If this isn't a transform property, add to the style map
      if (defaultTransformOrder.indexOf(key) === -1) {
        acc[key] = values[key];

        // If it is a transform property, flag so we can deal with it separately
      } else {
        hasTransform = true;
      }
      return acc;
    },
    {} as StyleMap
  );

  // If we have a transform value, we need to create a transform property.
  if (hasTransform) {
    styles.transform = defaultTransformOrder.reduce(
      (acc, key) => {
        if (values[key]) {
          acc.push({ [aliasMap[key] || key]: values[key] });
        }
        return acc;
      },
      [] as TransformList
    );
  }

  return styles;
};
