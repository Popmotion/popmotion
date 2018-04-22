import { Animated, PanResponder, GestureResponderHandlers } from 'react-native';

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
    styles.transform = defaultTransformOrder.reduce(
      (acc, key) => {
        if (values[key]) {
          acc.push({ [aliasMap[key] || key]: values[key] });
        }
        return acc;
      },
      [{ perspective: 1000 }]
    );
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

export const makeDraggable = (
  poser,
  { draggable, onDragStart, onDragEnd }
): GestureResponderHandlers => {
  const values = poser.get();
  let initialX = 0;
  let initialY = 0;

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: Animated.event([null, { dx: values.x, dy: values.y }]),
    onPanResponderGrant: (e, gestureState) => {
      poser.set('dragging');
      if (onDragStart) onDragStart(e, gestureState);
    },
    onPanResponderEnd: (e, gestureState) => {
      poser.set('dragEnd', { gestureState });
      if (onDragEnd) onDragEnd(e, gestureState);
    }
  });

  return panResponder.panHandlers;
};
