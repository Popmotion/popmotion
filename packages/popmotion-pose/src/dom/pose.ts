import poseFactory from '../factories/pose';
import createDimensions from './dimensions';
import appendEventListeners from './events';
import { flipPose, isFlipPose } from './flip';
import styler from 'stylefire';
import { DomPoserConfig, Draggable } from '../types';

const dragPoses = (draggable: Draggable): PoseMap => {
  const dragging: Pose = {};
  const dragEnd: Pose = {};

  if (draggable === true || draggable === 'x') dragging.x = dragEnd.x = 0;
  if (draggable === true || draggable === 'y') dragging.y = dragEnd.y = 0;

  return { dragging, dragEnd };
};

const createPoseConfig = (element: Element, config: DomPoserConfig) => {
  const poseConfig = {
    flip: {},
    ...config,
    props: {
      ...config.props,
      element,
      elementStyler: styler(element, { preparseOutput: false }),
      dimensions: createDimensions(element)
    }
  };

  // Handle interaction poses
  if (poseConfig.draggable) {
    const { dragging, dragEnd } = dragPoses(poseConfig.dragging);
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

export default (element: Element, config: DomPoserConfig) =>
  domPose(createPoseConfig(element, config));
