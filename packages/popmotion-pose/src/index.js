import styler from 'stylefire';
import { createPoses, createValues, createPoseSetter, makeDraggable } from './factories';

export default (element, props = {}) => {
  const elementStyler = styler(element);
  const poses = createPoses(props);
  const values = createValues(poses, elementStyler, props.initialPose);
  const activeActions = new Map();
  const children = new Set();

  const set = createPoseSetter({ element, elementStyler, poses, values, children, activeActions });

  if (props.draggable) makeDraggable(element, set, activeActions);

  return {
    set,
    has: (poseName) => poses.has(poseName),

    // Children
    addChild: child => children.add(child),
    removeChild: child => children.remove(child),
    clearChildren: () => {
      children.forEach(c => c.destroy());
      children.clear();
    },

    // Lifecycle
    destroy: () => {
      activeActions.forEach(a => a.stop());
      children.forEach(c => c.destroy());
    }
  };
};
