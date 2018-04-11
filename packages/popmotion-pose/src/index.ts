import styler from 'stylefire';
import {
  Poser,
  PoserProps,
  PoserFactory,
  PoseSetterProps,
  ActivePoses,
  ActiveActions,
  ChildPoses,
  StateMap
} from './types';
import { getDragProps } from './inc/selectors';
import { eachValue, fromPose } from './inc/transition-composers';
import createPoses from './factories/poses';
import createValuesAndTypes from './factories/values';
import createPoseSetter from './factories/pose-setter';
import createDimensions from './factories/dimensions';
import { addDragListeners, addHoverListeners } from './dom/draggable';
import { ColdSubscription } from 'popmotion/action/types';

const pose: PoserFactory = (element, props) => {
  const {
    draggable,
    hover,
    initialPose,
    passive,
    values: userSetValues,
    label,
    parentValues,
    ancestorValues = [],
    onChange
  } = props;
  const dragProps = getDragProps(props);
  const activeActions: ActiveActions = new Map();
  const activePoses: ActivePoses = new Map();
  const children: ChildPoses = new Set();
  const dimensions = createDimensions(element);
  let transitionProps: PoseSetterProps = props.transitionProps || {};

  const elementStyler = styler(element, { preparseOutput: false });
  const poses = createPoses(props);
  const getTransitionProps = () => transitionProps;

  if (parentValues) ancestorValues.unshift({ values: parentValues });

  const { values, types } = createValuesAndTypes({
    poses,
    styler: elementStyler,
    initialPose,
    passive,
    userSetValues,
    ancestorValues,
    onChange,
    getTransitionProps
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
    dragProps,
    getTransitionProps,
    flipEnabled: element instanceof HTMLElement
  });

  if (draggable) addDragListeners(element, set, activeActions, dragProps);
  if (hover) addHoverListeners(element, set, activeActions); 

  const api: Poser = {
    set,
    setTransitionProps: nextProps =>
      (transitionProps = {
        ...transitionProps,
        ...nextProps
      }),
    has: name => !!poses[name],
    get: () => {
      const output: StateMap = {};
      values.forEach((value: any, key: string) => (output[key] = value.get()));
      return output;
    },

    // FLIP methods
    measure: dimensions.measure,
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
        ancestorValues: [{ label, values }, ...ancestorValues]
      });
      children.add(child);
      return child;
    },
    removeChild: child => children.delete(child),
    clearChildren: () => {
      children.forEach((c: Poser) => c.destroy());
      children.clear();
    },

    // Lifecycle methods
    subscribe: (key, callback) =>
      values.has(key) ? values.get(key).subscribe(callback) : false,
    destroy: () => {
      activeActions.forEach((a: ColdSubscription) => a.stop());
      children.forEach((c: Poser) => c.destroy());
    }
  };

  return api;
};

export default pose;
export { eachValue, fromPose, Poser, PoserProps };
