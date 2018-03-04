import spring from 'popmotion/animations/spring';
import value from 'popmotion/reactions/value';
import chain from 'popmotion/compositors/chain';
import delayAction from 'popmotion/compositors/delay';
import { degrees, percent, px } from 'style-value-types';
import { pointerX, pointerY, just } from './actions';
import { flipPose, isFlipPose } from './flip';
import { stagger } from '../../popmotion/lib';

const getPoses = ({ draggable, initialPose, ...poses }) => poses;
const getDisplayProps = ({ transition, measureOnEnd, measureOnStart, delayChildren, staggerChildren, ...props }) => props;

const defaultTransitions = new Map([
  ['default', spring],
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

  return Object.entries(poses).reduce(buildPoseMap, {});
};

const valueTypeTests = [degrees, percent, px];
const testValueType = v => type => type.test(v);
export const createValues = (poses, styler, initialPose) => Object.values(poses).reduce((valueMap, pose) => {
  Object.keys(getDisplayProps(pose)).forEach((key) => {
    if (valueMap.has(key)) return;

    let val = value(initialPose ? poses[initialPose][key] : styler.get(key));
    const type = valueTypeTests.find(testValueType(pose[key]));

    if (type) val = val.pipe(type.transform);

    val.subscribe(styler.set(key));

    valueMap.set(key, { value: val, type });
  });

  return valueMap;
}, new Map());

const childAnimations = (children, nextPoseKey, nextPose) => {
  let delay = 0;
  let stagger = 0;
  const props = { delay: 0 };

  if (nextPose) {
    delay = nextPose.delayChildren || delay;
    stagger = nextPose.staggerChildren || stagger;
  }

  return children.map((child, i) => {
    if (child.has(nextPoseKey)) {
      return child.set(nextPoseKey, {
        delay: delay + (stagger * i)
      });
    }
  }).filter(Boolean);
  
  children.forEach(child => child.has(nextPoseKey) && animations.push(child.set(nextPoseKey, props)));
};

export const createPoseSetter = (state) => (next, { delay = 0 } = {}) => {
  const { activeActions, children, element, poses, values } = state;
  const animations = [];
  let nextPose = poses[next];

  // Grab the animations for this poser
  if (nextPose) {
    if (isFlipPose(nextPose)) nextPose = flipPose(state, nextPose);

    const poserAnimations = Object.keys(getDisplayProps(nextPose)).map(
      key => new Promise(complete => {
        const { transition: getTransition } = nextPose;
        const { value: thisVal, type } = values.get(key);
        const from = thisVal.get();

        if (activeActions.has(key)) activeActions.get(key).stop();

        let transition = (getTransition !== false)
          ? getTransition({
            from: type ? type.parse(from) : from,
            velocity: thisVal.getVelocity(),
            to: nextPose[key],
            key,
            prevPoseKey: poses[key]
          })
          : just(nextPose[key]);

        if (delay) transition = chain(delayAction(delay), transition);

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

  const response = Promise.all(animations);

  return (nextPose && nextPose.measureOnEnd)
    ? response.then(() => state.dimensions = element.getBoundingClientRect())
    : response;
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
