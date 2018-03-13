import { getPoses } from '../inc/selectors';
import defaultTransitions from '../inc/default-transitions';
import { PropsAndPoses, Pose, PoseMap, Draggable } from 'types';

const generateTransition = (pose: Pose, key: string): Pose => ({
  ...pose,
  transition: defaultTransitions.has(key)
    ? defaultTransitions.get(key)
    : defaultTransitions.get('default')
});

const dragPoses = (draggable: Draggable): PoseMap => {
  const dragging: Pose = {};
  const dragEnd: Pose = {};

  if (draggable === true || draggable === 'x') dragging.x = dragEnd.x = true;
  if (draggable === true || draggable === 'y') dragging.y = dragEnd.y = true;

  return { dragging, dragEnd };
};

export default (props: PropsAndPoses): PoseMap => {
  let poses: PoseMap = { flip: {}, ...getPoses(props) };
  const { draggable } = props;

  if (draggable) poses = { ...dragPoses(draggable), ...poses };

  Object.keys(poses).forEach((key) => {
    const pose = poses[key];
    poses[key] = pose.transition ? pose : generateTransition(pose, key)
  });

  return poses;
};
