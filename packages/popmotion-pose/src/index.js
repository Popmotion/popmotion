import styler from 'stylefire';
import { createPoses, createValues, createPoseSetter, makeDraggable, createBindPassiveValues, Dimensions } from './factories';

const pose = (element, props = {}) => {
  const elementStyler = styler(element, { preparseOutput: false });
  const poses = createPoses(props);
  const values = createValues(poses, elementStyler, props.initialPose);
  const activeActions = new Map();
  const children = new Set();
  const dimensions = new Dimensions(element);
  const dragProps = props.draggable ? {
    bounds: props.dragBounds,
    onDragStart: props.onDragStart,
    onDragEnd: props.onDragEnd
  } : {};

  const set = createPoseSetter({
    element,
    elementStyler,
    poses,
    values,
    children,
    activeActions,
    dimensions,
    dragProps
  });

  if (props.draggable) makeDraggable(element, set, activeActions, dragProps);

  const api = {
    set,
    has: name => poses[name],

    // FLIP methods
    measure: () => dimensions.measure(element),
    flip: op => {
      if (op) {
        api.measure();
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

  return api;
};

export default pose;
export { transitionProps, transitionFrom } from './utils';
