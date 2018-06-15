import pose from '../';

const poser = pose({
  test: { x: 0 },
  initialPose: 'test'
});

test('initial pose', () => {
  console.log(poser.get('x'));
});
