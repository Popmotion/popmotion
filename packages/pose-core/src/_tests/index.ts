import poseFactory from '../index';

type Value = { i: number };
type Action = { start: () => Subscription };
type Subscription = { stop: () => void };
type PoserAPI = {};

const mockAction: Action = {
  start: (complete): Subscription => {
    return {
      stop: () => undefined
    };
  }
};

const testPose = poseFactory<Value, Action, Subscription, PoserAPI>({
  bindOnChange: (values, onChange) => key => undefined,
  readValue: ({ i }) => i,
  createValue: (init, key, props, valueProps) => ({ i: init }),
  getTransitionProps: (props, to) => ({ to }),
  resolveTarget: (props, to) => to,
  selectValueToRead: ({ i }) => i,
  startAction: (value, action, complete) => action.start(complete),
  stopAction: action => action.stop(),
  convertValue: raw => ({ i: raw }),
  getInstantTransition: () => mockAction,
  convertTransitionDefinition: () => mockAction,
  addActionDelay: () => mockAction,
  defaultTransitions: new Map(),
  transformPose: pose => pose,
  readValueFromSource: () => 0,
  extendAPI: api => api
});

const testPoser = testPose({
  open: { x: 0, y: 0 },
  close: { x: 100, y: 100 },
  initialPose: 'open'
});

test('correctly identifies poses', () => {
  expect(testPoser.has('open')).toBe(true);
  expect(testPoser.has('foo')).toBe(false);
});

test('sets poses', () => {});
