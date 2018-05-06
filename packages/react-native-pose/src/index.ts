import createPosed from 'react-pose-core';
import { getStylesFromPoser } from './inc/utils';
import pose from 'animated-pose';
import { Animated, PanResponder } from 'react-native';

const createAnimatedComponent = (Component: React.Component) =>
  Animated.createAnimatedComponent(Component);

const posed = createPosed({
  componentMap: {
    View: Animated.View,
    Image: Animated.Image,
    Text: Animated.Text,
    ScrollView: Animated.ScrollView
  },
  poseFactory: pose,
  createAnimatedComponent,
  filterConfig: ({ draggable, ...config }) => config,
  transformConfig: config => {
    const { draggable } = config;
    if (!draggable) return;

    // This is a bit of a hacky way to make the poser aware of the x and y axis
    config._drag = { x: 0, y: 0 };

    // We have to disable `useNativeDriver` because of limitations with
    // mixing native and JS animations on the same property
    config.props = {
      ...config.props,
      useNativeDriver: false
    };
  },
  getProps: (poser, { draggable }, { onDragStart, onDragEnd }) => {
    if (!draggable) return {};

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
  },
  getStylesFromPoser
});

export default posed;
