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
  const dragX = draggable === true || draggable === 'x';
  const dragY = draggable === true || draggable === 'y';

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: Animated.event([null, { dx: values.x, dy: values.y }]),
    onPanResponderGrant: (e, gestureState) => {
      poser.set('dragging');
      if (onDragStart) onDragStart(e, gestureState);

      if (dragX) {
        values.x.setOffset(values.x._value);
        values.x.setValue(0);
      }

      if (dragY) {
        values.y.setOffset(values.y._value);
        values.y.setValue(0);
      }
    },
    onPanResponderRelease: (e, gestureState) => {
      poser.set('dragEnd', { gestureState });
      if (onDragEnd) onDragEnd(e, gestureState);
      if (dragX) values.x.flattenOffset();
      if (dragY) values.y.flattenOffset();
    }
  });

  return panResponder.panHandlers;
};
