import { Animated } from 'react-native';
import poseFactory, { Poser, PoserConfig } from 'pose-core';
import { warning } from 'hey-listen';
import defaultTransitions from './inc/default-transitions';
import { getUnit } from './inc/unit-conversion';
import {
  Value,
  Action,
  CreateValueProps,
  AnimatedPoser,
  AnimatedPoseConfig,
  AnimatedFactoryConfig,
  AnimatedPoserFactory,
  Layout
} from './types';
import convertTransitionDefinition, {
  TransitionConfig
} from './inc/convert-transition-definition';

const FLIP_TO_ORIGIN = 'flipToOrigin';

const nonLayoutValues = new Set([
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
  'opacity'
]);

const isAction = (action: any): action is Action =>
  typeof action.start !== 'undefined';

export default ({
  convertUnitToPoints,
  unitConverters
}: AnimatedFactoryConfig): AnimatedPoserFactory => {
  const pose: AnimatedPoserFactory = poseFactory<
    Value,
    Action,
    Action,
    AnimatedPoser,
    TransitionConfig
  >({
    /**
     * Bind onChange callbacks
     */
    bindOnChange: (values, onChange) => key => {
      if (!values.has(key)) return;

      const { raw } = values.get(key);
      if (raw) raw.addListener(onChange[key]);
    },

    /**
     * Read value
     *
     * In Animated, `getValue` is a private function. We don't need to read it
     * either as we can simply create a new value using the `Value.interpolate` method.
     */
    readValue: () => 0,

    readValueFromSource: (key: string) => {
      if (key.includes('rotate')) return '0deg';
      if (key.includes('scale')) return 1;
      return 0;
    },

    /**
     * Convert value
     *
     * If we get a user-defined Animated.Value we can convert that to the
     * poser's `Value` type
     */
    convertValue: (raw, key) => ({
      raw,
      useNativeDriver: nonLayoutValues.has(key)
    }),

    /**
     * Create value
     *
     * If we've got `passive` props, we simply return an `interpolate` value.
     * If we're creating a new value, we check if its a string (therefore a
     * value with a unit) and create both a value and an interpolated value
     */
    createValue: (
      init,
      key,
      props,
      { passiveParent, passiveProps, passiveParentKey }: CreateValueProps = {}
    ) => {
      if (passiveParent) {
        if (!nonLayoutValues.has(key)) {
          passiveParent.useNativeDriver = props.useNativeDriver = false;
          warning(
            false,
            `useNativeDriver is invalidated on value "${passiveParentKey}", because interpolated value "${key}" can't be animated by the native driver.`
          );
        }
        return {
          interpolation: passiveParent.raw.interpolate(passiveProps)
        };
      } else {
        let needsInterpolation = false;
        let unit = '';
        let initValue = 0;

        if (typeof init === 'string') {
          unit = getUnit(init);
          initValue = parseFloat(init);

          if (unitConverters[unit]) {
            initValue = convertUnitToPoints(init);
          } else {
            needsInterpolation = true;
          }
        } else {
          initValue = init;
        }

        const value: Value = {
          raw: new Animated.Value(initValue),
          useNativeDriver: nonLayoutValues.has(key)
        };

        if (needsInterpolation) {
          value.interpolation = value.raw.interpolate({
            inputRange: [0, 1],
            outputRange: [`0${unit}`, `1${unit}`]
          });
        }

        return value;
      }
    },

    /**
     * Get props to pass to a pose's `transition` method and dynamic props
     */
    getTransitionProps: ({ raw, useNativeDriver }, toValue, props) => ({
      value: raw,
      useNativeDriver:
        props.useNativeDriver === false ? false : useNativeDriver,
      toValue
    }),

    /**
     * Convert transition definition
     *
     * If a transition has been defined as an object of props, convert this
     * into an Animated animation
     */
    convertTransitionDefinition: ({ raw, useNativeDriver }, def, { toValue }) =>
      isAction(def)
        ? def
        : convertTransitionDefinition(raw, {
            ...def,
            useNativeDriver,
            toValue
          }),

    /**
     * Resolve target as a number.
     */
    resolveTarget: ({ interpolation }, target) => {
      // If we're interpolating to another type of values, simply return as number
      if (interpolation) return parseFloat(target);

      // If this is just a harmless number, return
      if (typeof target === 'number') return target;

      // Or, if this is a string with no interpolation, handle unit conversion
      return convertUnitToPoints(target);
    },

    /**
     * Select, from our `Value` type, the value to pass when a user calls `poser.get(key)`
     * We pass the interpolated value (passive or output with unit) if it exists, otherwise
     * we return the raw Value
     */
    selectValueToRead: ({ raw, interpolation }) => interpolation || raw,

    /**
     * Start the Animated animation
     */
    startAction: (value, action, onComplete) => {
      action.start(onComplete as Animated.EndCallback);
      return action;
    },

    /**
     * Stop an Animated animation
     */
    stopAction: action => action.stop(),

    /**
     * Create a transition that instantly switches one value to another
     */
    getInstantTransition: ({ raw, useNativeDriver }, { toValue }) =>
      Animated.timing(raw, {
        toValue,
        duration: 0,
        useNativeDriver
      }),

    /**
     * Take an existing animation and return it composed with a delay
     */
    addActionDelay: (delay = 0, transition) =>
      Animated.sequence([Animated.delay(delay), transition]),

    /**
     * Map of default transitions keyed by pose name. Animated Pose currently
     * only supports animations (rather than dragging etc) so it only includes "default"
     */
    defaultTransitions,

    setValue: ({ raw }, val) => raw.setValue(val),

    // TODO: We could add a callback in props that fires setNativeProps
    setValueNative: () => undefined,

    transformPose: (enteringPose, name, { props }) => {
      if (name === FLIP_TO_ORIGIN) {
        const flipPose = { ...enteringPose };
        if (props.xDelta) flipPose.x = 0;
        if (props.yDelta) flipPose.y = 0;
      }

      return enteringPose;
    },

    /**
     * Return the Poser API returned by the factory function, with extra methods
     * specific to Animated Pose
     */
    extendAPI: (api, { values }) => ({
      ...api,
      addChild: (config: AnimatedPoseConfig) => api._addChild(config, pose),
      flip: ({ x: fromX, y: fromY }: Layout, { x: toX, y: toY }: Layout) => {
        const xDelta = fromX - toX;
        const yDelta = fromY - toY;
        const hasMoved = xDelta || yDelta;

        values.get('x').raw.setValue(xDelta);
        values.get('y').raw.setValue(yDelta);

        if (hasMoved) {
          api.setProps({ xDelta, yDelta });
          api.set(FLIP_TO_ORIGIN);
        }
      }
    })
  });

  const parseConfig = ({ flipEnabled, ...config }: PoserConfig<Value>) => {
    if (flipEnabled) {
      config[FLIP_TO_ORIGIN] = {
        ...config[FLIP_TO_ORIGIN],
        x: 0,
        y: 0
      };
    }

    return config;
  };

  return config => pose(parseConfig(config));
};

export { Poser, PoserConfig };
