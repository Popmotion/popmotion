import styler from 'stylefire';
import { createPoses, createValues, createPoseSetter, makeDraggable, createBindPassiveValues, Dimensions } from './factories';

export default (element, props = {}) => {
  const elementStyler = styler(element, { preparseOutput: false });
  const poses = createPoses(props);
  const values = createValues(poses, elementStyler, props.initialPose);
  const activeActions = new Map();
  const children = new Set();
  const dimensions = new Dimensions(element);

  const set = createPoseSetter({ element, elementStyler, poses, values, children, activeActions, dimensions });

  if (props.draggable) makeDraggable(element, set, activeActions);

  return {
    set,
    has: name => poses[name],

    // FLIP methods
    measure: () => dimensions.measure(element),
    flip: op => {
      if (op) {
        dimensions.measure(element);
        op();
      }
      return set('flip');
    },

    // Children methods
    addChild: child => {
      child.bindPassiveValues(values);
      children.add(child);
    },
    removeChild: child => children.remove(child),
    clearChildren: () => {
      children.forEach(c => c.destroy());
      children.clear();
    },

    // Lifecycle methods
    bindPassiveValues: createBindPassiveValues(props, elementStyler),
    destroy: () => {
      activeActions.forEach(a => a.stop());
      children.forEach(c => c.destroy());
    }
  };
};

export { transitionProps, transitionFrom } from './utils';
