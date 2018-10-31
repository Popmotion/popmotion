import poseFactory from '../factories/pose';
import createDimensions from './dimensions';
import appendEventListeners from './events';
import { flipPose, isFlipPose } from './flip';
import { getValueType } from '../inc/value-types';
import { styler, Action, ValueReaction, ColdSubscription } from 'popmotion';
import { Poser } from 'pose-core';
import {
  DomPopmotionPoser,
  DomPopmotionConfig,
  Draggable,
  Pose,
  PoseMap,
  TransitionProps
} from '../types';
import { isPositional, convertPositionalUnits } from './unit-conversion';
export { Action, Poser, ValueReaction, ColdSubscription };

const dragPoses = (draggable: Draggable): PoseMap => {
  const drag: Pose = {
    preTransition: ({ dimensions }: TransitionProps) => dimensions.measure()
  };
  const dragEnd: Pose = {};

  if (draggable === true || draggable === 'x') drag.x = dragEnd.x = 0;
  if (draggable === true || draggable === 'y') drag.y = dragEnd.y = 0;

  return { drag, dragEnd };
};

const createPoseConfig = (
  element: Element,
  {
    onDragStart,
    onDragEnd,
    onPressStart,
    onPressEnd,
    draggable,
    hoverable,
    focusable,
    pressable,
    dragBounds,
    ...config
  }: DomPopmotionConfig
) => {
  const poseConfig: DomPopmotionConfig = {
    flip: {},
    ...config,
    props: {
      ...config.props,
      onDragStart,
      onDragEnd,
      onPressStart,
      onPressEnd,
      dragBounds,
      draggable,
      hoverable,
      focusable,
      pressable,
      element,
      elementStyler: styler(element, { preparseOutput: false }),
      dimensions: createDimensions(element)
    }
  };

  // Handle interaction poses
  if (draggable) {
    const { drag, dragEnd } = dragPoses(draggable);

    poseConfig.drag = {
      ...poseConfig.drag,
      ...drag
    };
    poseConfig.dragEnd = { ...poseConfig.dragEnd, ...dragEnd };
  }

  return poseConfig;
};

const domPose = poseFactory<DomPopmotionPoser>({
  posePriority: ['drag', 'press', 'focus', 'hover'],

  // This unpacks the flip property and thus creating a copy of `pose`.
  // It allows `flipPose` & `convertPositionalUnits` to mutate it *shallowly*.
  transformPose: ({ flip, ...pose }, name, state) => {
    if (isFlipPose(flip, name, state)) {
      return flipPose(state, pose);
    } else if (isPositional(pose)) {
      return convertPositionalUnits(state, pose);
    }

    return pose;
  },

  addListenerToValue: (key, elementStyler) => v => elementStyler.set(key, v),

  readValueFromSource: (key, { elementStyler, dragBounds }) => {
    let value = elementStyler.get(key);

    // If this is a positional property, use `dragBounds` as a hint
    // of its value type
    if (dragBounds && (key === 'x' || key === 'y')) {
      const bound =
        key === 'x'
          ? dragBounds.left || dragBounds.right
          : dragBounds.top || dragBounds.bottom;

      if (bound) {
        const boundType = getValueType(bound);
        value = boundType.transform(value);
      }
    }

    return isNaN(value) ? value : parseFloat(value);
  },

  setValueNative: (key, to, { elementStyler }) => elementStyler.set(key, to),

  // This is shit and not inline with what I'm trying to accomplish
  // by using a functional approach
  extendAPI: (api, { props, activeActions }, config) => {
    const measure = props.dimensions.measure;
    const poserApi = {
      ...api,
      addChild: (
        element: Element,
        childConfig?: DomPopmotionConfig
      ): DomPopmotionPoser =>
        api._addChild(
          createPoseConfig(element, childConfig),
          domPose
        ) as DomPopmotionPoser,
      measure,
      flip: (op: Function) => {
        if (op) {
          measure();
          op();
        }

        return api.set('flip');
      }
    };

    // Apply all calculated values immediately rather than waiting for
    // framesync's next render step. This isn't ideal but it fixes
    // Safari's shitty rAF implementation https://github.com/Popmotion/popmotion/issues/459
    props.elementStyler.render();

    appendEventListeners(props.element, activeActions, poserApi, config);

    return poserApi;
  }
});

export default (
  element: Element,
  config: DomPopmotionConfig
): DomPopmotionPoser =>
  domPose(createPoseConfig(element, config)) as DomPopmotionPoser;
