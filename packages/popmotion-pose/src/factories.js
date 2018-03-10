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

const getPoses = ({ draggable, initialPose, passiveValues, ...poses }) => poses;
const getDisplayProps = ({ transition, delay, delayChildren, staggerChildren, ...props }) => props;

const defaultTransitions = new Map([
  ['default', transitionProps({
    x: spring,
    y: spring,
    z: spring,
    scaleX: spring,
    scaleY: spring,
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

const valueTypeTests = [number, degrees, percent, px];
const testValueType = v => type => type.test(v);
export const createValues = (poses, styler, initialPose) => Object.values(poses).reduce((valueMap, pose) => {
  Object.keys(getDisplayProps(pose)).forEach((key) => {
    if (valueMap.has(key)) return;

    const type = valueTypeTests.find(testValueType(pose[key]));
    const unparsedInitialValue = (initialPose && poses[initialPose] && poses[initialPose][key] !== undefined)
      ? poses[initialPose][key]
      : styler.get(key);
    const initialValue = type ? type.parse(unparsedInitialValue) : unparsedInitialValue;
    let val = value(initialValue);
    if (type) val = val.pipe(type.transform);

    val.subscribe(styler.set(key));

    valueMap.set(key, { value: val, type });
  });

  return valueMap;
}, new Map());

const childAnimations = (children, nextPoseKey, nextPose) => {
  const animations = [];
  let delay = 0;
  let stagger = 0;

  if (nextPose) {
    delay = nextPose.delayChildren || delay;
    stagger = nextPose.staggerChildren || stagger;
  }

  Array.from(children).forEach((child, i) => {
    if (child.has(nextPoseKey)) {
      animations.push(child.set(nextPoseKey, {
        delay: delay + (stagger * i)
      }));
    }
  });

  return animations;
};

export const createPoseSetter = (state) => (next, { delay = 0 } = {}) => {
  const { activeActions, children, poses, values } = state;
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

export const makeDraggable = (element, set, activeActions) => activeActions.set(
  'dragStartListener',
  listen(element, 'mousedown touchstart').start((e) => {
    e.preventDefault();
    set('dragging');

    activeActions.set(
      'dragEndListener',
      listen(document, 'mouseup touchend').start(() => {
        activeActions.get('dragEndListener').stop();
        set('dragEnd');
      })
    );
  })
);

const bindToParentValues = (parent, passive, styler) => Object.keys(passive).forEach(key => {
  const [parentKey, output] = passive[key];
  if (!parent.has(parentKey)) return;
  const { value: parentValue, type } = parent.get(parentKey);
  parentValue.subscribe(pipe(output, styler.set(key)));
});

export const createBindPassiveValues = ({ passiveValues }, styler) => (parentValues) => {
  if (passiveValues) bindToParentValues(parentValues, passiveValues, styler);
};

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
