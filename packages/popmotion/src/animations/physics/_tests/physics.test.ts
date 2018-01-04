import physics from '../';

describe('physics', () => {
  it('should run at a constant velocity', () => {
    return new Promise((resolve, reject) => {
      let i = 0;
      const a = physics({
        velocity: 100
      }).start((v) => i = v);
      setTimeout(() => {
        a.stop();
        (i >= 95 && i <= 105) ? resolve() : reject(i);
      }, 1000);
    });
  });

  it('should automatically stop', () => {
    return new Promise((resolve) => {
      physics().start({
        complete: resolve
      });
    });
  });
});
