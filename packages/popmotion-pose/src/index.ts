import styler from 'stylefire';
import { PoserFactory, ActivePoses, ActiveActions, ChildPoses } from './types';
import { getDragProps } from './inc/selectors';
import { transitionProps, transitionFromPrevPose } from './inc/transition-composers';
import createPoses from './factories/poses';
import createValuesAndTypes from './factories/values';
import createPoseSetter from './factories/pose-setter';
import createDimensions from './factories/dimensions';
import makeDraggable from './dom/draggable';

const pose: PoserFactory = (element, props) => {
  const { draggable, initialPose, passive, parentValues, onChange } = props;
  const dragProps = getDragProps(props);
  const activeActions: ActiveActions = new Map();
  const activePoses: ActivePoses = new Map();
  const children: ChildPoses = new Set();
  const dimensions = createDimensions(element);

  const elementStyler = styler(element, { preparseOutput: false });
  const poses = createPoses(props);
  const { values, types } = createValuesAndTypes({
    poses,
    styler: elementStyler,
    initialPose, passive, parentValues, onChange
  });

  const set = createPoseSetter({
    element,
    elementStyler,
    poses,
    values,
    types,
    children,
    activeActions,
    activePoses,
    dimensions,
    dragProps
  });

  if (draggable) makeDraggable(element, set, activeActions, dragProps);

  // export API
};

export default pose;
export { transitionProps, transitionFromPrevPose };
