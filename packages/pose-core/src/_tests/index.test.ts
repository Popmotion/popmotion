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
    value.i = -to;
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
  getTransitionProps: (value, to) => ({ to, from: value.i }),
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
    return multiply ? mockMultiplyAction(to, multiply) : mockAction(to);
  },
  addActionDelay: (delay, action) => action,
  defaultTransitions: new Map([['default', ({ to }) => mockActionInverse(to)]]),
  transformPose: pose => pose,
  readValueFromSource: () => 0,
  extendAPI: api => api,
  posePriority: ['drag', 'press', 'hover'],
  setValue: (raw, valueToSet) => (raw.i = valueToSet),
  setValueNative: (key, valueToSet, { onNativeSet }) =>
    onNativeSet && onNativeSet(key, valueToSet),
  getDefaultProps: ({ props: { forGetDefault } = {} }) => ({
    fromConfig: forGetDefault,
    defaultProp: 110
  })
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
  functionalMapFunctionalDefTransition: {
    x: 6,
    transition: () => ({
      x: () => ({ multiply: 11 })
    })
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
    transition: () => false
  },
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
  initialPose: ['open', 'left'],
  withStart: {
    applyAtStart: {
      x: 1000
    },
    y: 200
  },
  withStartOverwrite: {
    applyAtStart: {
      x: 2000
    },
    x: 200
  },
  withStartAndEnd: {
    applyAtStart: {
      y: 2000
    },
    applyAtEnd: {
      x: 3000
    },
    x: 300
  },
  withStartAsProp: {
    applyAtStart: {
      x: ({ xTo }) => xTo
    },
    x: true,
    transition: ({ from }) => mockMultiplyAction(from, 10)
  }
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

test('sets poses with default transition', () =>
  Promise.all([testPoser.set('closed'), testPoser.set('right')]).then(() => {
    const state = testPoser.get();
    expect(state.x).toBe(-100);
    expect(state.y).toBe(-100);
  }));

test('correctly sets and updates props', () =>
  testPoser
    .set('testProps')
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
    }));

test('propagates pose changes to children', () => {
  const parent = testPose({
    init: { x: 0 },
    a: { x: 100 }
  });

  const child = parent._addChild(
    {
      init: { x: 10 },
      a: { x: 50 }
    },
    testPose
  );

  return parent
    .set('a')
    .then(() => {
      expect(parent.get('x')).toBe(-100);
      expect(child.get('x')).toBe(-50);

      return parent.unset('a');
    })
    .then(() => {
      expect(parent.get('x')).toBe(-0);
      expect(child.get('x')).toBe(-10);
    });
});

test('resolves custom transitions correctly', () =>
  testPoser
    .set('functionalTransition')
    .then(() => {
      expect(testPoser.get().x).toBe(10 * 10);
      return testPoser.set('mapFunctionalTransition');
    })
    .then(() => {
      expect(testPoser.get().x).toBe(9 * 9);
      return testPoser.set('defTransition');
    })
    .then(() => {
      expect(testPoser.get().x).toBe(8 * 2);
      return testPoser.set('functionalDefTransition');
    })
    .then(() => {
      expect(testPoser.get().x).toBe(5 * 10);
      return testPoser.set('mapDefTransition');
    })
    .then(() => {
      expect(testPoser.get().x).toBe(7 * 3);
      return testPoser.set('mapFunctionalDefTransition');
    })
    .then(() => {
      expect(testPoser.get().x).toBe(6 * 5);
      return testPoser.set('functionalMapFunctionalDefTransition');
    })
    .then(() => {
      expect(testPoser.get().x).toBe(6 * 11);
      return testPoser.set('instantTransition');
    })
    .then(() => {
      expect(testPoser.get().x).toBe(11);
      return testPoser.set('instantTransitionMap');
    })
    .then(() => {
      expect(testPoser.get().x).toBe(12);
      return testPoser.set('instantTransitionFunc');
    })
    .then(() => {
      expect(testPoser.get().x).toBe(13);
      return testPoser.set('instantTransitionMapFunc');
    })
    .then(() => {
      expect(testPoser.get().x).toBe(14);
      return testPoser.set('defaultTransitionMap');
    })
    .then(() => {
      expect(testPoser.get().x).toBe(45);
    }));

test('applies correct initial values', () => {
  const testDefaultsPoser = testPose({
    init: { x: 100 },
    a: { x: 50 }
  });

  expect(testDefaultsPoser.get('x')).toBe(100);

  const testDefaultsOverridePoser = testPose({
    init: { x: 100 },
    a: { x: 50 },
    initialPose: 'a'
  });

  expect(testDefaultsOverridePoser.get('x')).toBe(50);
});

test('correctly falls back to previous pose', () => {
  const fallback = testPose({
    init: { x: 0, y: 1 },
    hover: { x: 1 },
    drag: { x: 2, y: 2 }
  });

  expect(fallback.get('x')).toBe(0);
  return fallback
    .set('hover')
    .then(() => {
      expect(fallback.get('x')).toBe(-1);
      return fallback.set('drag');
    })
    .then(() => {
      expect(fallback.get('x')).toBe(-2);
      return fallback.unset('drag');
    })
    .then(() => {
      expect(fallback.get('x')).toBe(-1);
    });
});

test('setting a pose that is already set actually does reset it', () => {
  const reset = testPose({
    init: { x: 0 },
    test: { x: ({ a }) => a }
  });

  expect(reset.get('x')).toBe(0);
  reset.setProps({ a: 10 });
  return reset
    .set('test')
    .then(() => {
      expect(reset.get('x')).toBe(-10);
      reset.setProps({ a: 20 });
      return reset.set('test');
    })
    .then(() => {
      expect(reset.get('x')).toBe(-20);
    });
});

test('correctly falls back to previous pose with mismatched initialPose', () => {
  const fallback = testPose({
    init: { x: 30, y: 1 },
    hover: { x: 1 },
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
    initialPose: 'visible'
  });

  expect(fallback.get('x')).toBe(30);
  expect(fallback.get('opacity')).toBe(1);

  return fallback
    .set('hover')
    .then(() => {
      expect(fallback.get('x')).toBe(-1);
      expect(fallback.get('opacity')).toBe(1);
      return fallback.unset('hover');
    })
    .then(() => {
      expect(fallback.get('x')).toBe(-30);
      expect(fallback.get('opacity')).toBe(1);
    });
});

test('children fall back correctly multiple times', () => {
  const parent = testPose({
    init: { scale: 1 },
    drag: { scale: 2 },
    dragEnd: { scale: 3 }
  });
  const child = parent._addChild(
    {
      init: { scale: 10 },
      drag: { scale: 20 }
    },
    testPose
  );

  return parent
    .set('drag')
    .then(() => {
      expect(child.get('scale')).toBe(-20);
      parent.set('dragEnd');
      return parent.unset('drag');
    })
    .then(() => {
      expect(child.get('scale')).toBe(-10);
      return parent.set('drag');
    })
    .then(() => {
      expect(child.get('scale')).toBe(-20);
      parent.set('dragEnd');
      return parent.unset('drag');
    })
    .then(() => {
      expect(child.get('scale')).toBe(-10);
    });
});

test('correctly applies poses in priority order', () => {
  const fallback = testPose({
    init: { x: 0 },
    drag: { x: 10 },
    hover: { x: 20 }
  });
  expect(fallback.get('x')).toBe(0);
  return fallback
    .set('hover')
    .then(() => {
      expect(fallback.get('x')).toBe(-20);
      return fallback.set('drag');
    })
    .then(() => {
      expect(fallback.get('x')).toBe(-10);
      return fallback.unset('hover');
    })
    .then(() => {
      expect(fallback.get('x')).toBe(-10);
      return fallback.set('hover');
    })
    .then(() => {
      expect(fallback.get('x')).toBe(-10);
      return fallback.unset('drag');
    })
    .then(() => {
      expect(fallback.get('x')).toBe(-20);
    });
});

test('correctly applies values at start and end', () => {
  return testPoser
    .set('withStart')
    .then(() => {
      expect(testPoser.get('x')).toBe(1000);
      expect(testPoser.get('y')).toBe(-200);
      return testPoser.set('withStartOverwrite');
    })
    .then(() => {
      expect(testPoser.get('x')).toBe(-200);
      return testPoser.set('withStartAndEnd');
    })
    .then(() => {
      expect(testPoser.get('y')).toBe(2000);
      expect(testPoser.get('x')).toBe(3000);
      testPoser.setProps({ xTo: 600 });
      return testPoser.set('withStartAsProp');
    })
    .then(() => {
      expect(testPoser.get('x')).toBe(6000);
    });
});

test('correctly applies start/end values on initialisation', () => {
  const native = {
    foo: 0,
    cat: 0
  };

  const applyPoser = testPose({
    init: {
      applyAtStart: {
        foo: 1,
        bar: 1,
        cat: 1
      },
      bar: 2,
      applyAtEnd: {
        foo: 3,
        bar: 3
      }
    },
    props: { onNativeSet: (key, v) => (native[key] = v) }
  });

  expect(native.foo).toBe(3);
  expect(native.cat).toBe(1);
  expect(applyPoser.get('bar')).toBe(3);
});

test('applyAtStart/applyAtEnd defined on child gets applied to correct element', () => {
  const parentNative = {}
  const childNative = {}

  const parent = testPose({
    initialPose: 'closed',
    closed: { x: 0 },
    opened: { x: 100 }
    props: { onNativeSet: (key, v) => parentNative[key] = v }
  });

  const child = parent._addChild({
    closed: {
      applyAtEnd: { display: 'none' }
    },
    opened: {
      applyAtStart: { display: 'block' }
    },
    props: { onNativeSet: (key, v) => childNative[key] = v }
  }, testPose);

  return parent.set('opened').then(() => {
    expect(parentNative.display).toBe(undefined)
    expect(childNative.display).toBe('block')

    return parent.set('closed')
  }).then(() => {
    expect(parentNative.display).toBe(undefined)
    expect(childNative.display).toBe('none')
  })
})

test('parent & child uses their own props correctly', () => {
  const parent = testPose({
    init: { x: 0 },
    a: { x: ({ x }) => x },
    props: { x: 100 },
  });

  const child = parent._addChild({
    init: { x: 10 },
    a: { x: ({ x }) => x },
    props: { x: 50 }
  }, testPose);

  return parent.set('a').then(() => {
    expect(parent.get('x')).toBe(-100)
    expect(child.get('x')).toBe(-50)
  })
})

test('getDefaultProps adds default props', () => {
  const poser = testPose({
    init: {
      x: 0
    },
    opened: {
      x: ({ defaultProp }) => defaultProp
    }
  });

  return poser.set('opened').then(() => {
    expect(poser.get('x')).toBe(-110);
  });
});

test('getDefaultProps is able to read from config', () => {
  const poser = testPose({
    init: {
      x: 0
    },
    opened: {
      x: ({ fromConfig }) => fromConfig
    },
    props: {
      forGetDefault: 10
    }
  });

  return poser.set('opened').then(() => {
    expect(poser.get('x')).toBe(-10);
  });
});

test("getDefaultProps doesn't override own props", () => {
  const poser = testPose({
    init: {
      x: 0
    },
    opened: {
      x: ({ fromConfig }) => fromConfig
    },
    props: {
      forGetDefault: 10,
      fromConfig: 200
    }
  });

  return poser.set('opened').then(() => {
    expect(poser.get('x')).toBe(-200);
  });
});
