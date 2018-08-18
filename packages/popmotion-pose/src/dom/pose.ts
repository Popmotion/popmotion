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
import { warning } from 'hey-listen';
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
    draggable,
    onHoverStart,
    onHoverEnd,
    hoverable,
    dragBounds,
    ...config
  }: DomPopmotionConfig
) => {
  const poseConfig: DomPopmotionConfig = {
    flip: {},
    ...config,
    props: {
      ...config.props,
      draggable,
      onDragStart,
      onDragEnd,
      dragBounds,
      onHoverStart,
      onHoverEnd,
      hoverable,
      element,
      elementStyler: styler(element, { preparseOutput: false }),
      dimensions: createDimensions(element)
    }
  };

  // Handle interaction poses
  if (draggable) {
    const { drag, dragEnd } = dragPoses(draggable);
    warning(
      poseConfig.dragging !== undefined,
      'The `dragging` pose is deprecated. Use `drag`.'
    );
    poseConfig.drag = {
      ...poseConfig.drag,
      ...poseConfig.dragging,
      ...drag
    };
    poseConfig.dragEnd = { ...poseConfig.dragEnd, ...dragEnd };
  }

  return poseConfig;
};

const domPose = poseFactory<DomPopmotionPoser>({
  // Drag always takes higher priority than hover
  posePriority: ['drag', 'hover'],

  transformPose: ({ flip, ...pose }, name, state) =>
    isFlipPose(flip, name, state) ? flipPose(state, pose) : pose,

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

    appendEventListeners(props.element, activeActions, poserApi, config);

    return poserApi;
  }
});

export default (
  element: Element,
  config: DomPopmotionConfig
): DomPopmotionPoser =>
  domPose(createPoseConfig(element, config)) as DomPopmotionPoser;
