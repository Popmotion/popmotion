import { Animated, PanResponder, GestureResponderHandlers } from 'react-native';
import { PoseComponentProps } from '../types';
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

export const filterProps = ({
  registerAsChild,
  onUnmount,
  Component,
  pose,
  poseKey,
  draggable,
  onDragStart,
  onDragEnd,
  ...props
}: PoseComponentProps): PoseComponentProps => props;

export const makeDraggable = (
  poser: AnimatedPoser,
  { draggable, onDragStart, onDragEnd }: PoseComponentProps
): GestureResponderHandlers => {
  const values = poser.get();
  const dragX = draggable === true || draggable === 'x';
  const dragY = draggable === true || draggable === 'y';

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: dragX ? values.x : null,
        dy: dragY ? values.y : null
      }
    ]),
    onPanResponderGrant: (e, gestureState) => {
      if (dragX) {
        values.x.setOffset(values.x._value);
        values.x.setValue(0);
      }

      if (dragY) {
        values.y.setOffset(values.y._value);
        values.y.setValue(0);
      }

      if (onDragStart) onDragStart(e, gestureState);
      poser.set('dragging', { gestureState });
    },
    onPanResponderRelease: (e, gestureState) => {
      if (onDragEnd) onDragEnd(e, gestureState);
      if (dragX) values.x.flattenOffset();
      if (dragY) values.y.flattenOffset();
      if (onDragEnd) onDragEnd(e, gestureState);
      poser.set('dragEnd', { gestureState });
    }
  });

  return panResponder.panHandlers;
};
