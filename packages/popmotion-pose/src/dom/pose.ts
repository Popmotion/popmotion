import poseFactory from '../factories/pose';
import createDimensions from './dimensions';
import appendEventListeners from './events';
import { flipPose, isFlipPose } from './flip';
import styler from 'stylefire';
import { Poser } from 'pose-core';
import { Action } from 'popmotion/action';
import { ValueReaction } from 'popmotion/reactions/value';
import { ColdSubscription } from 'popmotion/action/types';
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
  transformPose: (pose, name, state) =>
    isFlipPose(pose, name, state) ? flipPose(state, pose) : pose,

  addListenerToValue: (key, elementStyler) => (v: any) =>
    elementStyler.set(key, v),

  extendAPI: (api, { props, activeActions }, config) => {
    const measure = props.dimensions.measure;
    const poserApi = {
      ...api,
      addChild: (element: Element, config: DomPoserConfig) =>
        api._addChild(createPoseConfig(element, config), domPose),
      measure,
      flip: op => {
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

export default (element: Element, config: DomPopmotionConfig) =>
  domPose(createPoseConfig(element, config));
