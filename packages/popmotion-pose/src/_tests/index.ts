import pose from '../';

const getDiv = () => document.createElement('div');

test('initialPose via init', () => {
  const poser = pose(getDiv(), {
    init: { backgroundColor: '#f77' }
  });

  expect(poser.get('backgroundColor').get()).toBe('#f77');
});

test('initialPose via prop', () => {
  const poser = pose(getDiv(), {
    foo: { x: 5 },
    bar: { x: 10 },
    initialPose: 'bar'
  });

  expect(poser.get('x').get()).toBe(10);
});

test('uses default transition', () => {
  const poser = pose(getDiv(), {
    init: { x: 0 },
    foo: { x: 50 }
  });

  return poser.set('foo').then(() => expect(poser.get('x').get()).toBe(50));
});

test('correctly rounds values', () => {
  let isRounded = true;
  const poser = pose(getDiv(), {
    init: {
      x: 0,
      transition: {
        duration: 50,
        round: false
      }
    },
    foo: {
      x: 50,
      transition: {
        duration: 50,
        round: true
      }
    },
    onChange: {
      x: v => (isRounded === true ? (isRounded = !(v % 1)) : false)
    }
  });

  return poser
    .set('foo')
    .then(() => {
      expect(isRounded).toBe(true);
      return poser.set('init');
    })
    .then(() => {
      expect(isRounded).toBe(false);
    });
});

test('correctly caps values', () => {
  let isActive = false;
  let largerThanTen = false;
  let smallerThanThree = false;

  const poser = pose(getDiv(), {
    init: { x: 0 },
    foo: {
      x: 12,
      transition: {
        duration: 50,
        min: 3,
        max: 10
      }
    },
    onChange: {
      x: v => {
        if (isActive) {
          largerThanTen = largerThanTen || v > 10;
          smallerThanThree = smallerThanThree || v < 3;
        }
      }
    }
  });

  isActive = true;
  return poser.set('foo').then(() => {
    expect(largerThanTen).toBe(false);
    expect(smallerThanThree).toBe(false);
  });
});

test('correctly delays animations', () => {
  let isDelayed = true;

  const poser = pose(getDiv(), {
    init: { x: 0 },
    foo: {
      x: 10,
      delay: 50,
      transition: { duration: 50 }
    },
    bar: {
      x: 20,
      transition: {
        delay: 50,
        duration: 50
      }
    }
  });

  setTimeout(() => {
    if (poser.get('x').get() > 0) isDelayed = false;
  }, 40);
  return poser
    .set('foo')
    .then(() => {
      expect(isDelayed).toBe(true);
      setTimeout(() => {
        if (poser.get('x').get() > 10) isDelayed = false;
      }, 40);
      return poser.set('bar');
    })
    .then(() => {
      expect(isDelayed).toBe(true);
    });
});

test('correctly animates children', () => {
  const poser = pose(getDiv(), {});
  const childPoser = poser.addChild(getDiv(), {
    init: { x: 0 },
    foo: { x: 100, transition: { duration: 50 } }
  });

  return poser.set('foo').then(() => {
    expect(childPoser.get('x').get()).toBe(100);
  });
});

test('passive values', () => {
  const poser = pose(getDiv(), {
    init: { x: 0 },
    foo: { x: 100, transition: { duration: 50 } },
    passive: {
      y: ['x', v => -v]
    }
  });

  return poser.set('foo').then(() => {
    expect(poser.get('y').get()).toBe(-100);
  });
});

// - transitions
// - flip
// - props
// - ui events
