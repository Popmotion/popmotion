import createPosed from 'react-pose-core';
import { vrPose } from 'animated-pose';
import { Animated, View, Image, Text, VrButton } from 'react-360';

const createAnimatedComponent = Component =>
  Animated.createAnimatedComponent(Component);

const posedFactoryBaseConfig = {
  componentMap: {
    View: createAnimatedComponent(View),
    Image: createAnimatedComponent(Image),
    Text: createAnimatedComponent(Text),
    VrButton: createAnimatedComponent(VrButton)
  },
  poseFactory: vrPose,
  createAnimatedComponent,
  filterConfig: ({ respondCursor, respondClick, ...config }) => config,
  getProps: (poser, config, props) => {
    const newProps = {};

    if (config.respondCursor) {
      newProps.onEnter = e => {
        console.log(e);
        if (props.onEnter) props.onEnter(e);
        poser.set('cursorEnter');
      };
      newProps.onExit = e => {
        console.log(e);
        if (props.onExit) props.onExit(e);
        poser.set('cursorExit');
      };
    }

    if (config.respondClick) {
      newProps.onInput = e => {
        if (props.onInput) props.onInput(e);
        const { action } = e.nativeEvent.inputEvent;

        if (action === 'up') {
          poser.set('clickUp');
        } else if (action === 'down') {
          poser.set('clickDown');
        }
      };
    }

    return newProps;
  },
  transformConfig: () => {}
};

const defaultTransformOrder = [
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

const transformOrder = ['translateX', 'translateY', 'translateZ'];

const translateProps = new Set(['x', 'y', 'z']);

const getStylesFromPoser = createTranslateTransforms => poser => {
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
    styles.transform = defaultTransformOrder.reduce((acc, key) => {
      if (values[key]) {
        acc.push({ [key]: values[key] });
      }
      return acc;
    }, createTranslateTransforms(values));
  }

  return styles;
};

const posed = createPosed({
  ...posedFactoryBaseConfig,
  getStylesFromPoser: getStylesFromPoser(({ x, y, z }) => {
    return [x, y, z].reduce((acc, val, i) => {
      if (val) acc.push({ [transformOrder[i]]: val });
      return acc;
    }, []);
  })
});

const posed3d = createPosed({
  ...posedFactoryBaseConfig,
  getStylesFromPoser: getStylesFromPoser(({ x = 0, y = 0, z = 0 }) => [
    { transform: [x, y, z] }
  ])
});

export default posed;
export { posed3d };
