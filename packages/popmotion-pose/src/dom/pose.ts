import poseFactory from '../factories/pose';
import createDimensions from './dimensions';
import appendEventListeners from './events';
import { flipPose, isFlipPose } from './flip';
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
export { Action, Poser, ValueReaction, ColdSubscription };

const dragPoses = (draggable: Draggable): PoseMap => {
  const dragging: Pose = {
    preTransition: ({ dimensions }: TransitionProps) => dimensions.measure()
  };
  const dragEnd: Pose = {};

  if (draggable === true || draggable === 'x') dragging.x = dragEnd.x = 0;
  if (draggable === true || draggable === 'y') dragging.y = dragEnd.y = 0;

  return { dragging, dragEnd };
};

const createPoseConfig = (
  element: Element,
  {
    onDragStart,
    onDragEnd,
    draggable,
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
      element,
      elementStyler: styler(element, { preparseOutput: false }),
      dimensions: createDimensions(element)
    }
  };

  // Handle interaction poses
  if (draggable) {
    const { dragging, dragEnd } = dragPoses(draggable);
    poseConfig.dragging = { ...poseConfig.dragging, ...dragging };
    poseConfig.dragEnd = { ...poseConfig.dragEnd, ...dragEnd };
  }

  return poseConfig;
};

const domPose = poseFactory<DomPopmotionPoser>({
  transformPose: ({ flip, ...pose }, name, state) =>
    isFlipPose(flip, name, state) ? flipPose(state, pose) : pose,

  addListenerToValue: (key, elementStyler) => v => elementStyler.set(key, v),

  readValueFromSource: (key, { elementStyler }) => {
    const value = elementStyler.get(key);
    return isNaN(value) ? value : parseFloat(value);
  },

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

    appendEventListeners(props.element, activeActions, api.set, config);

    return poserApi;
  }
});

export default (
  element: Element,
  config: DomPopmotionConfig
): DomPopmotionPoser =>
  domPose(createPoseConfig(element, config)) as DomPopmotionPoser;
