import pose from '../';

const div = document.createElement('div');
const poser = pose(div, {
  foo: { backgroundColor: '#fff' },
  bar: { backgroundColor: '#000' },
  instantTransition: {
    backgroundColor: '#0f0',
    transition: false
  },
  customTransitionDef: {
    backgroundColor: '#f00',
    transition: { type: 'tween' }
  },
  customNamedTransitionDef: {
    backgroundColor: '#00f',
    transition: {
      backgroundColor: { type: 'spring', to: '#000' }
    }
  },
  failTransition: {
    backgroundColor: true,
    transition: {
      backgroundColor: { type: 'face' }
    }
  },
  initialPose: 'foo',
  delayedTransition: {
    backgroundColor: '#eee',
    transition: {
      delay: 100,
      duration: 0
    }
  }
});

test('initial pose', () => {
  expect(poser.get('backgroundColor').get()).toBe('#fff');
});

test('default animation', () =>
  poser.set('bar').then(() => {
    expect(poser.get('backgroundColor').get()).toBe('rgba(0, 0, 0, 1)');
  }));

test('instant transition', () =>
  poser.set('instantTransition').then(() => {
    expect(poser.get('backgroundColor').get()).toBe('#0f0');
  }));

test('transition definition', () =>
  poser.set('customTransitionDef').then(() => {
    expect(poser.get('backgroundColor').get()).toBe('rgba(255, 0, 0, 1)');
  }));

test('named transition definition with custom to', () =>
  poser.set('customNamedTransitionDef').then(() => {
    expect(poser.get('backgroundColor').get()).toBe('rgba(0, 0, 0, 1)');
  }));

// test('fail transition', () => {
//   try {
//     poser.set('failTransition');
//     expect(true).toBe(false);
//   } catch (e) {
//     expect(true).toBe(true);
//   }
// });

test('delay transition', done => {
  setTimeout(() => {
    // Is animating to rgba(238, 238, 238, 1)
    expect(poser.get('backgroundColor').get()).toBe('rgba(0, 0, 0, 1)');
    done();
  }, 50);

  poser.set('delayedTransition');
});
