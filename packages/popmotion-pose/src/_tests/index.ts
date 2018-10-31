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

test('hover events', () => {
  const div = getDiv();

  const poser = pose(div, {
    hoverable: true,
    init: { scale: 1, transition: { duration: 50 } },
    hover: { scale: 1.2, transition: { duration: 50 } }
  });

  div.dispatchEvent(new MouseEvent('mouseenter'));

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      poser.get('scale').get() === 1.2 ? resolve() : reject();
    }, 75);
  }).then(
    () =>
      new Promise((resolve, reject) => {
        div.dispatchEvent(new MouseEvent('mouseleave'));
        setTimeout(() => {
          poser.get('scale').get() === 1 ? resolve() : reject();
        }, 75);
      })
  );
});

test('focus events', () => {
  const input = document.createElement('input');

  const poser = pose(input, {
    focusable: true,
    init: { scale: 1, transition: { duration: 50 } },
    focus: { scale: 1.2, transition: { duration: 50 } }
  });

  input.dispatchEvent(new FocusEvent('focus'));

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      poser.get('scale').get() === 1.2 ? resolve() : reject();
    }, 75);
  }).then(
    () =>
      new Promise((resolve, reject) => {
        input.dispatchEvent(new FocusEvent('blur'));
        setTimeout(() => {
          poser.get('scale').get() === 1 ? resolve() : reject();
        }, 75);
      })
  );
});

// TODO: Figure out how to successfully emulate `mousedown` events
// test('pressable events: mouse', () => {
//   const div = getDiv();

//   const poser = pose(div, {
//     pressable: true,
//     init: { scale: 1, transition: { duration: 50 } },
//     press: { scale: 1.2, transition: { duration: 50 } }
//   });

//   div.dispatchEvent(new MouseEvent('mousedown'));

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       poser.get('scale').get() === 1.2
//         ? resolve()
//         : reject(poser.get('scale').get());
//     }, 75);
//   }).then(
//     () =>
//       new Promise((resolve, reject) => {
//         document.dispatchEvent(new MouseEvent('mouseup'));
//         setTimeout(() => {
//           poser.get('scale').get() === 1
//             ? resolve()
//             : reject(poser.get('scale').get());
//         }, 75);
//       })
//   );
// });

// JSDom doesn't have a layout engine, making it difficult to implement tests
// for FLIP operations
//test('flip', () => {});
//test('animate between values', () => {});

test('applyAtEnd for positional key when transitioning it from one unit type to another', () => {
  const poser = pose(getDiv(), {
    closed: { width: '0%' },
    opened: {
      width: '300px',
      applyAtEnd: {
        width: '400px',
      },
    },
  });

  return poser
    .set('closed')
    .then(() => poser.set('opened'))
    .then(() => {
      expect(poser.get('width').get()).toBe('400px')
    })
});

test("correct final values are applied when transitioning between unit types for posers with shared applyAtEnd", () => {
  // if this test fails with actual result of 300px it means that `transformPose` mutates shared `applyAtEnd`
  const applyAtEnd = {
    backgroundColor: 'blue',
  };

  const poserA = pose(getDiv(), {
    initialPose: 'closed',
    closed: {
      width: '0%',
    },
    opened: {
      width: '300px',
      applyAtEnd,
    },
  });

  const poserB = pose(getDiv(), {
    initialPose: 'closed',
    closed: {
      width: '0%',
    },
    opened: {
      width: '40vw',
      applyAtEnd,
    },
  });

  return poserA.set('opened')
    .then(() => poserB.set('opened'))
    .then(() => {
      expect(poserB.get('width').get()).toBe('40vw')
    })
});
