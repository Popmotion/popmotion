import spring from 'popmotion/animations/spring';
import tween from 'popmotion/animations/tween'
import value from 'popmotion/reactions/value';
import chain from 'popmotion/compositors/chain';
import delayAction from 'popmotion/compositors/delay';
import listen from 'popmotion/input/listen';
import { pipe } from 'popmotion/transformers';
import { number, degrees, percent, px } from 'style-value-types';
import { pointerX, pointerY, just } from './actions';
import { transitionProps } from './utils';
import { flipPose, isFlipPose } from './flip';

const getPoses = ({ draggable, initialPose, passive, onChange, dragBounds, onDragEnd, onDragStart, parentValues, ...poses }) => poses;
const getDisplayProps = ({ transition, delay, delayChildren, staggerChildren, staggerDirection, ...props }) => props;

const defaultTransitions = new Map([
  ['default', transitionProps({
    x: spring,
    y: spring,
    z: spring,
    scaleX: spring,
    scaleY: spring,
    scale: spring,
    default: tween
  })],
  ['dragging', ({ key, from }) => key === 'y' ? pointerY(from) : pointerX(from)],
  ['dragEnd', ({ from }) => just(from)]
]);

const buildPoseMap = (poseMap, [key, pose]) => {
  poseMap[key] = {
    transition: defaultTransitions.has(key)
      ? defaultTransitions.get(key)
      : defaultTransitions.get('default'),
    ...pose
  };
  return poseMap;
};

export const createPoses = (props) => {
  let poses = getPoses(props);
  const { draggable } = props;

  if (draggable) {
    const dragging = {};
    const dragEnd = {};

    if (draggable === true || draggable === 'x') dragging.x = dragEnd.x = true;
    if (draggable === true || draggable === 'y') dragging.y = dragEnd.y = true;

    poses = {
      dragging,
      dragEnd,
      ...poses
    };
  }

  poses = {
    flip: {},
    ...poses
  };

  return Object.entries(poses).reduce(buildPoseMap, {});
};

const boundaryMap = {
  x: ['left', 'right'],
  y: ['top', 'bottom'],
  z: ['far', 'near']
};
const addBoundaries = (a, bounds, key) => {
  const enforceBounds = [];
  const [min, max] = boundaryMap[key];

  if (bounds[min] !== undefined) enforceBounds.push(v => Math.max(v, bounds[min]));
  if (bounds[max] !== undefined) enforceBounds.push(v => Math.min(v, bounds[max]));

  return enforceBounds.length ? a.pipe(...enforceBounds) : a;
}; 

const valueTypeTests = [number, degrees, percent, px];
const testValueType = v => type => type.test(v);
export const createValues = ({ poses, styler, initialPose, passive, parentValues, onChange }) => {
  const values = new Map();

  // Scrape values from poses
  Object.keys(poses).reduce((valueMap, poseKey) => {
    const pose = poses[poseKey];

    Object.keys(getDisplayProps(pose)).forEach((key) => {
      if (valueMap.has(key)) return;
  
      const type = valueTypeTests.find(testValueType(pose[key]));
  
      // If there's an initial pose defined, set the value to that, otherwise attempt to read from the element
      const unparsedInitialValue = (initialPose && poses[initialPose] && poses[initialPose][key] !== undefined)
        ? poses[initialPose][key]
        : styler.get(key);
      const initialValue = type ? type.parse(unparsedInitialValue) : unparsedInitialValue;
      let val = value(initialValue);
  
      // Convert to value type
      if (type) val = val.pipe(type.transform);
  
      // Bind styler setter to value updates
      val.subscribe(styler.set(key));
  
      valueMap.set(key, { value: val, type });
    });
  
    return valueMap;
  }, values);

  // Initiate passive values
  if (passive) {
    Object.keys(passive).forEach(key => {
      const [valueKey, transform, fromParent] = passive[key];
      const valueToBind = (fromParent && parentValues && parentValues.has(key))
        ? parentValues.get(key).value
        : (values.has(key))
          ? values.get(key).value
          : false;
  
      if (!valueToBind) return;

      // Maybe make a new value here
      const newValue = value(valueToBind.get(), pipe(transform, styler.set(key)));
      valueToBind.subscribe(newValue);
      values.set({ value: valueToBind });
    });
  }

  // Append onChange callbacks
  if (onChange) {
    Object.keys(onChange).forEach(key => {
      if (values.has(key)) values.get(key).value.subscribe(onChange[key]);
    });
  }

  return values;
};

const childAnimations = (children, nextPoseKey, nextPose) => {
  const animations = [];
  let delay = 0;
  let stagger = 0;
  let staggerDirection = 1;

  if (nextPose) {
    delay = nextPose.delayChildren || delay;
    stagger = nextPose.staggerChildren || stagger;
    staggerDirection = nextPose.staggerDirection || staggerDirection;
  }

  const maxStaggerDuration = children.length - 1 * stagger;
  const generateStaggerDuration = staggerDirection === 1
    ? i => i * stagger
    : i => maxStaggerDuration - (i * stagger);

  Array.from(children).forEach((child, i) => {
    if (child.has(nextPoseKey)) {
      animations.push(child.set(nextPoseKey, {
        delay: delay + generateStaggerDuration(i)
      }));
    }
  });

  return animations;
};

const dragPoses = new Set(['dragging', 'dragEnd']);
export const createPoseSetter = (state) => (next, { delay = 0 } = {}) => {
  const { activeActions, children, poses, values, dragProps } = state;
  const animations = [];
  let nextPose = poses[next];

  // Grab the animations for this poser
  if (nextPose) {
    if (isFlipPose(nextPose, next)) nextPose = flipPose(state, nextPose);

    const poserAnimations = nextPose && Object.keys(getDisplayProps(nextPose)).map(
      key => new Promise(complete => {
        const { transition: getTransition } = nextPose;
        const { value: thisVal, type } = values.get(key);
        const from = thisVal.get();

        if (activeActions.has(key)) activeActions.get(key).stop();

        let transition = (getTransition !== false)
          ? getTransition({
            from: type ? type.parse(from) : from,
            velocity: thisVal.getVelocity() || 0,
            to: type ? type.parse(nextPose[key]) : nextPose[key],
            key,
            prevPoseKey: poses[key]
          })
          : just(nextPose[key]);

        if (dragPoses.has(next) && dragProps.bounds && boundaryMap[key]) transition = addBoundaries(transition, dragProps.bounds, key);

        if (delay || nextPose.delay) transition = chain(
          delayAction(delay || nextPose.delay),
          transition
        );

        const transitionApi = transition.start({
          update: v => thisVal.update(v),
          complete
        });

        activeActions.set(key, transitionApi);
        poses[key] = next;
      })
    );

    animations.push(...poserAnimations);
  }

  // Children animations
  if (children.size) animations.push(...childAnimations(children, next, nextPose));

  return Promise.all(animations);
};

export const makeDraggable = (element, set, activeActions, { onDragStart, onDragEnd } = {}) => activeActions.set(
  'dragStartListener',
  listen(element, 'mousedown touchstart').start((e) => {
    e.preventDefault();
    set('dragging');
    if (onDragStart) onDragStart(e);

    activeActions.set(
      'dragEndListener',
      listen(document, 'mouseup touchend').start(() => {
        activeActions.get('dragEndListener').stop();
        set('dragEnd');
        if (onDragEnd) onDragEnd(e);
      })
    );
  })
);

export class Dimensions {
  constructor(element) {
    this.current = {};
    this.element = element;
  }
  
  get() {
    return this.current;
  }

  measure() {
    this.current = this.element.getBoundingClientRect();
  }

  has() {
    return this.current.width !== undefined;
  }
}
