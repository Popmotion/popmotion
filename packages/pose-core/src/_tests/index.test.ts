import poseFactory from '../index';

type Value = { i: number };
type Action = { start: (value: Value, complete: Function) => Subscription };
type Subscription = { stop: () => void };
type PoserAPI = {};

const mockAction = (to): Action => ({
  start: (value, complete): Subscription => {
    value.i = to;
    complete();
    return {
      stop: () => undefined
    };
  }
});

const mockMultiplyAction = (to, multiply): Action => ({
  start: (value, complete): Subscription => {
    value.i = to * multiply;
    complete();
    return {
      stop: () => undefined
    };
  }
});

const mockActionInverse = (to): Action => ({
  start: (value, complete): Subscription => {
    value.i = - to;
    complete();
    return {
      stop: () => undefined
    };
  }
});

const testPose = poseFactory<Value, Action, Subscription, PoserAPI>({
  bindOnChange: (values, onChange) => key => undefined,
  readValue: ({ i }) => i,
  createValue: (init, key, props, valueProps) => ({ i: init }),
  getTransitionProps: (props, to) => ({ to }),
  resolveTarget: (props, to) => to,
  selectValueToRead: ({ i }) => i,
  startAction: (value, action, complete) => {
    return action.start(value, complete);
  },
  stopAction: action => action.stop(),
  convertValue: raw => ({ i: raw }),
  getInstantTransition: (v, { to }) => mockAction(to),
  convertTransitionDefinition: (v, transitionDef, { to }) => {
    if (transitionDef.hasOwnProperty('start')) {
      return transitionDef as Action;
    }

    const { multiply } = transitionDef;
    return multiply
      ? mockMultiplyAction(to, multiply)
      : mockAction(to);
  },
  addActionDelay: (delay, action) => action,
  defaultTransitions: new Map([['default', ({ to }) => mockActionInverse(to)]]),
  transformPose: pose => pose,
  readValueFromSource: () => 0,
  extendAPI: api => api
});

const testPoser = testPose({
  open: { x: 0 },
  closed: { x: 100 },
  right: { y: 100 },
  left: { y: 50 },
  functionalTransition: {
    x: 10,
    transition: ({ to }) => mockMultiplyAction(to, 10)
  },
  mapFunctionalTransition: {
    x: 9,
    transition: {
      x: ({ to }) => mockMultiplyAction(to, 9)
    }
  },
  defTransition: {
    x: 8,
    transition: { multiply: 2 }
  },
  functionalDefTransition: {
    x: 5,
    transition: () => ({ multiply: 10 })
  },
  mapDefTransition: {
    x: 7,
    transition: {
      x: { multiply: 3 }
    }
  },
  mapFunctionalDefTransition: {
    x: 6,
    transition: {
      x: () => ({ multiply: 5 })
    }
  },
  instantTransition: {
    x: 11,
    transition: false
  },
  instantTransitionMap: {
    x: 12,
    transition: { x: false }
  },
  instantTransitionFunc: {
    x: 13,
    transition: () => false },
  instantTransitionMapFunc: {
    x: 14,
    transition: {
      x: () => false
    }
  },
  defaultTransitionMap: {
    x: 15,
    y: 15,
    transition: {
      default: { multiply: 3 }
    }
  },
  testProps: {
    x: ({ x }) => x
  },
  props: {
    x: 50
  },
  initialPose: ['open', 'left']
});

test('sets initial poses', () => {
  const state = testPoser.get();
  expect(state.x).toBe(0);
  expect(state.y).toBe(50);
});

test('correctly identifies poses', () => {
  expect(testPoser.has('open')).toBe(true);
  expect(testPoser.has('foo')).toBe(false);
});

test('sets poses with default transition', () => Promise.all([
  testPoser.set('closed'),
  testPoser.set('right')
]).then(() => {
  const state = testPoser.get();
  expect(state.x).toBe(-100)
  expect(state.y).toBe(-100)
});

test('correctly sets and updates props', () => testPoser.set('testProps')
  .then(() => {
    expect(testPoser.get().x).toBe(-50);
    testPoser.setProps({ x: 51 });
    return testPoser.set('testProps');
  })
  .then(() => {
    expect(testPoser.get().x).toBe(-51);
    return testPoser.set('testProps', { x: 52 });
  })
  .then(() => {
    expect(testPoser.get().x).toBe(-52);
  })
);

test('resolves custom transitions correctly', () =>
  testPoser.set('functionalTransition')
    .then(() => {
      expect(testPoser.get().x).toBe(10 * 10)
      return testPoser.set('mapFunctionalTransition')
    })
    .then(() => {
      expect(testPoser.get().x).toBe(9 * 9)
      return testPoser.set('defTransition')
    })
    .then(() => {
      expect(testPoser.get().x).toBe(8 * 2)
      return testPoser.set('functionalDefTransition')
    })
    .then(() => {
      expect(testPoser.get().x).toBe(5 * 10)
      return testPoser.set('mapDefTransition')
    })
    .then(() => {
      expect(testPoser.get().x).toBe(7 * 3)
      return testPoser.set('mapFunctionalDefTransition')
    })
    .then(() => {
      expect(testPoser.get().x).toBe(6 * 5)
      return testPoser.set('instantTransition');
    })
    .then(() => {
      expect(testPoser.get().x).toBe(11)
      return testPoser.set('instantTransitionMap');
    })
    .then(() => {
      expect(testPoser.get().x).toBe(12)
      return testPoser.set('instantTransitionFunc');
    })
    .then(() => {
      expect(testPoser.get().x).toBe(13)
      return testPoser.set('instantTransitionMapFunc');
    })
    .then(() => {
      expect(testPoser.get().x).toBe(14)
      return testPoser.set('defaultTransitionMap')
    })
    .then(() => {
      expect(testPoser.get().x).toBe(45)
    })
);
