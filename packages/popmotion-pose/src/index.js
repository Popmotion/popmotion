import { listen, styler, pointer, action, spring, value } from '@drivetribe/popmotion';

const preventDefault = (e) => {
  e.preventDefault;
  return e;
};

const singleAxisPointer = (axis) => (from) => pointer({ [axis]: from }).pipe(v => v[axis]);
const pointerX = singleAxisPointer('x');
const pointerY = singleAxisPointer('y');

const just = (from) => action(({ update, complete }) => {
  update(from);
  complete();
});

const defaultAnimationFactoryMap = {
  default: (next, { mass, stiffness, damping }) => spring({ ...next, mass, stiffness, damping }),
  dragging: ({ from }, pose, key) => key === 'y' ? pointerY(from) : pointerX(from),
  dragEnd: ({ from }) => just(from)
};

const onlyDisplayProps = ({ getTransitionFactory, measureOnEnd, measureOnStart, stiffness, damping,     ...pose }) => pose;

const applyPoseMapDefaults = (poseMap, draggable) => {
  if (draggable) {
    const dragging = {};
    const dragEnd = {};

    if (draggable === true || draggable === 'x') dragging.x = dragEnd.x = true;
    if (draggable === true || draggable === 'y') dragging.y = dragEnd.y = true;

    poseMap = {
      dragging,
      dragEnd,
      ...poseMap
    };
  }
  
  return Object.entries(poseMap)
    .reduce((acc, [key, pose]) => {
      const { transitions = {}, ...props } = pose;
      const defaultAnimationFactory = defaultAnimationFactoryMap[key]
        ? defaultAnimationFactoryMap[key]
        : defaultAnimationFactoryMap.default;

      acc[key] = {
        ...props,
        getTransitionFactory: (fromPoseName) => (transitions[fromPoseName])
          ? transitions[fromPoseName]
          : (transitions.default)
            ? transitions.default
            : defaultAnimationFactory
      };
      return acc;
    }, {});
};

const valuesFromPoses = (poseMap, elementStyler) => Object.values(poseMap).reduce((acc, pose) => {
  Object.keys(onlyDisplayProps(pose)).forEach((key) => {
    if (!acc.has(key)) acc.set(key, value(elementStyler.get(key), elementStyler.set(key)));
  });
  return acc;
}, new Map());


const flipProp = (calcOffset, eq) => ({ calcOffset, eq });
const flipScale = (prop) => flipProp((prev, next) => prev[prop] / next[prop], 1);
const flipTranslate = (prop) => flipProp((prev, next) => prev[prop] - next[prop], 0);
const flipMoveMethods = {
  x: flipTranslate('left'),
  y: flipTranslate('top')
};
const flipScaleMethods = {
  scaleX: flipScale('width'),
  scaleY: flipScale('height')
};
const measureFlipDelta = (prev, next, methods, values, elementStyler) => {
  const flipPose = Object.entries(methods).reduce((acc, [key, { calcOffset, eq }]) => {
    const offset = calcOffset(prev, next);
    if (offset !== eq) {
      values.has(key)
        ? values.get(key).update(offset)
        : values.set(key, value(offset, v => elementStyler.set(key, v)));

      acc[key] = eq;
    }
    return acc;
  }, {});

  return flipPose;
};
const positionalProps = new Set(['width', 'height', 'top', 'left', 'bottom', 'right']);
const getFlippedPose = (nextPose, { element, elementStyler, dimensions, values }) => {
  if (!dimensions) return nextPose;
  
  if (Object.keys(nextPose).some(key => positionalProps.has(key))) {
    const { width, height, top, left, bottom, right, ...remainingPose } = nextPose;
    nextPose = remainingPose;

    elementStyler
      .set({ width, height, top, left, bottom, right })
      .render();
  }

  const scalePose = measureFlipDelta(dimensions, element.getBoundingClientRect(), flipScaleMethods, values, elementStyler);
  elementStyler.render();
  const movePose = measureFlipDelta(dimensions, element.getBoundingClientRect(), flipMoveMethods, values, elementStyler);

  return {
    ...nextPose,
    ...movePose,
    ...scalePose
  };
};

const poseSetter = (poseMap, state) => (name) => {
  const { poses, actions, values } = state;
  let nextPose = poseMap[name];

  if (nextPose) {
    if (nextPose.measureOnStart) {
      nextPose = getFlippedPose(nextPose, state);
    }

    const animations = Object.keys(onlyDisplayProps(nextPose)).map((key) => new Promise((complete) => {
      const prevPose = poses.get(key);
      const transitionFactory = nextPose.getTransitionFactory(prevPose);
      const thisVal = values.get(key);

      const transition = (transitionFactory !== false)
        ? transitionFactory({
          from: thisVal.get(),
          velocity: thisVal.getVelocity(),
          to: nextPose[key]
        }, nextPose, key)
        : just(nextPose[key]);

      const transitionApi = transition.start({
        update: v => thisVal.update(v),
        complete
      });

      if (actions.has(key)) actions.get(key).stop();
      actions.set(key, transitionApi);
      poses.set(key, name);
    }));

    if (state.children.size) {
      state.children.forEach((child) => child.has(name) && animations.push(child.set(name)));
    }

    const response = Promise.all(animations);

    return (nextPose.measureOnEnd)
      ? response.then(() => state.dimensions = state.element.getBoundingClientRect())
      : response;
  } else {
    return Promise.reject(`Pose '${name}' not defined`);
  }
};

const appendDragListeners = (element, set, actions) => {
  let dragEndListener;
  const dragStartListener = listen(element, 'mousedown touchstart')
    .pipe(preventDefault)
    .start(() => {
      set('dragging');

      dragEndListener = listen(document, 'mouseup touchend')
        .start(() => {
          dragEndListener.stop();
          set('dragEnd');
        });

      actions.set('dragEndListener', dragEndListener);
    });

  actions.set('dragStartListener', dragStartListener);
};

const pose = ({ draggable, ...poseMap }) => {
  poseMap = applyPoseMapDefaults(poseMap, draggable);

  return (element) => {
    const elementStyler = styler(element);
    const state = {
      element,
      elementStyler,
      values: valuesFromPoses(poseMap, elementStyler),
      poses: new Map(),
      actions: new Map(),
      children: new Set()
    };

    const set = poseSetter(poseMap, state);

    if (draggable) appendDragListeners(element, set, state.actions);

    return {
      set,
      has: (name) => state.poses.has(name),
      destroy: () => state.actions.forEach(a => a.stop()),
      addChild: (child) => state.children.add(child),
      removeChild: (child) => state.children.delete(child),
      clearChildren: () => state.children.clear(),
    };
  };
};

export default pose;
