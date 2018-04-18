import { getPoses } from '../inc/selectors';
import defaultTransitions from '../inc/default-transitions';
import { PoserProps, Pose, PoseMap, Draggable } from 'types';

const generateTransition = (pose: Pose, key: string): Pose => ({
  ...pose,
  transition: defaultTransitions.has(key)
    ? defaultTransitions.get(key)
    : defaultTransitions.get('default')
});

const dragPoses = (draggable: Draggable): PoseMap => {
  const dragging: Pose = {};
  const dragEnd: Pose = {};

  if (draggable === true || draggable === 'x') dragging.x = dragEnd.x = 0;
  if (draggable === true || draggable === 'y') dragging.y = dragEnd.y = 0;

  return { dragging, dragEnd };
};

export default (props: PoserProps): PoseMap => {
  let poses: PoseMap = { flip: {}, ...getPoses(props) };
  const { draggable } = props;

  if (draggable) {
    let { dragging, dragEnd } = dragPoses(draggable);
    dragging = { ...poses.dragging, ...dragging };
    dragEnd = { ...poses.dragEnd, ...dragging };
    poses = {
      ...poses,
      dragging,
      dragEnd
    };
  }

  Object.keys(poses).forEach(key => {
    const pose = poses[key];
    poses[key] = pose.transition ? pose : generateTransition(pose, key);
  });

  return poses;
};
