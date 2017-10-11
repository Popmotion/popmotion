import tween from '../';

describe('tween', () => {
  it('should return a default tween', () => {
    return new Promise((complete) => {
      tween().start({ complete });
    });
  });
})
