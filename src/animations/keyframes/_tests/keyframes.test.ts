import keyframes from '../';

describe('keyframes', () => {
  it('should generate tweens through each value', () => {
    return new Promise((resolve, reject) => {
      let i = 0;
      keyframes({
        values: [0, 1, 2]
      }).start({
        complete: () => i === 2 ? resolve() : reject(),
        update: (v) => i = v
      });
    });
  });

  it('should generate tweens through each value', () => {
    return new Promise((resolve, reject) => {
      let i = 0;
      keyframes({
        duration: 400,
        values: [0, 1, 2],
        times: [0, .25, .5]
      }).start((v) => i = v);
      setTimeout(() => i === 2 ? resolve() : reject(), 150)
    });
  });
});
