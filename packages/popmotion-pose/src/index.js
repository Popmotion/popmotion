import styler from 'stylefire';
import { createPoses, createValues, createPoseSetter, makeDraggable, Dimensions } from './factories';

const pose = (element, props = {}) => {
  const elementStyler = styler(element, { preparseOutput: false });
  const poses = createPoses(props);
  const values = createValues({ poses, styler: elementStyler, ...props });
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
    addChild: (childElement, childProps) => {
      const child = pose(childElement, {
        ...childProps,
        parentValues: values
      });
      children.add(child);
      return child;
    },
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

  return api;
};

export default pose;
export { transitionProps, transitionFrom } from './utils';
