import css from 'stylefire/css';
import { createPoses, createValues, createPoseSetter, makeDraggable } from './factories';

export default (element, props = {}) => {
  const elementStyler = css(element, { preparseOutput: false });
  const poses = createPoses(props);
  const values = createValues(poses, elementStyler, props.initialPose);
  const activeActions = new Map();
  const children = new Set();

  const set = createPoseSetter({ element, elementStyler, poses, values, children, activeActions });

  if (props.draggable) makeDraggable(element, set, activeActions);

  return {
    set,
    has: (poseName) => poses[poseName],

    // Children methods
    addChild: child => children.add(child),
    removeChild: child => children.remove(child),
    clearChildren: () => {
      children.forEach(c => c.destroy());
      children.clear();
    },

    // Lifecycle methods
    destroy: () => {
      activeActions.forEach(a => a.stop());
      children.forEach(c => c.destroy());
    }
  };
};

export { transitionProps, transitionFrom } from './utils';
