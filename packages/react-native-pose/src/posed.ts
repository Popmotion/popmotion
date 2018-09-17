import createPosed from 'react-pose-core';
import { getStylesFromPoser } from './inc/utils';
import pose from 'animated-pose';
import { Animated, PanResponder } from 'react-native';
import { warning } from 'hey-listen';

type Layout = {
  x: number;
  y: number;
  height: number;
  width: number;
};

type LayoutChangeEvent = {
  nativeEvent: {
    layout: Layout;
  };
};

const posed = createPosed({
  /**
   * A map of prebuilt posed components that users can access using
   * `posed.ComponentName(config)`
   */
  componentMap: {
    View: Animated.View,
    Image: Animated.Image,
    Text: Animated.Text,
    ScrollView: Animated.ScrollView
  },

  /**
   * The pose factory function that React Pose Core will use to
   * create posers with.
   */
  poseFactory: pose,

  /**
   * Create React Native styles object from the poser's animated values.
   */
  getStylesFromPoser,

  /**
   * A function to convert components into Animated components.
   */
  createAnimatedComponent: (Component: React.Component) =>
    Animated.createAnimatedComponent(Component),

  /**
   * Removes specific props from the poser config before they're
   * passed to the pose factory. This allows React Native Pose to use
   * config options that Pose doesn't explicitly support.
   */
  filterConfig: ({ draggable, ...config }) => config,

  /**
   * Transforms the incoming poser config object.
   * If the user has defined `draggable` we force the definition
   * of x/y Animated.Values and disable `useNativeDriver` via props
   */
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

  /**
   * Based on the provided pose config and component props, we can
   * define more props to be passed to the underlying React component.
   */
  getProps: (
    poser,
    { draggable },
    { onDragStart, onDragEnd, flipMove, measureSelf },
    setLayout
  ) => {
    let props: { [key: string]: any } = {};

    if (draggable) {
      warning(
        false,
        'draggable: true disables useNativeDriver for this component.'
      );

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
          poser.set('dragEnd', { gestureState });
        }
      });

      props = {
        ...props,
        ...panResponder.panHandlers
      };
    }

    if (flipMove || measureSelf) {
      props.onLayout = ({ nativeEvent }: LayoutChangeEvent) =>
        setLayout(nativeEvent.layout);
    }

    return props;
  }
});

export default posed;
