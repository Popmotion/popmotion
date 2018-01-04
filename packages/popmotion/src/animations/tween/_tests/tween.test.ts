import tween from '../';
import { currentFrameTime } from 'framesync';

describe('tween', () => {
  it('should return a default tween', () => {
    return new Promise((complete) => {
      tween().start({ complete });
    });
  });

  it('should tween to the correct given value', () => {
    return new Promise((resolve, reject) => {
      let i = 0;
      tween({ to: 300 }).start({
        complete: () => i === 300 ? resolve() : reject(),
        update: (v) => i = v
      });
    });
  });

  it('should return the correct elapsed count', () => {
    return new Promise((resolve, reject) => {
      const a = tween().start({
        complete: () => {
          (a.getElapsed() === 300) ? resolve() : reject();
        }
      });
    });
  });

  it('should pause, resume and correctly return isActive', () => {
    return new Promise((resolve, reject) => {
      const a = tween().start({
        complete: () => {
          clearTimeout(failTimeout);
          resolve();
        }
      });
      const failTimeout = setTimeout(() => reject('timed out ' + a.getElapsed()), 520);
      if (a.isActive() === false) reject('active false after start');

      setTimeout(() => {
        a.pause();
        if (a.isActive() === true) reject('active after pause');

        setTimeout(() => {
          a.resume();
          if (a.isActive() === false) reject();
        }, 150);
      }, 150);
    });
  });

  it('should return the correct progress', () => {
    return new Promise((resolve, reject) => {
      const a = tween().start({
        complete: () => {
          if (a.getProgress() !== 1) reject('Progress incorrect');
          resolve();
        }
      });

      if (a.getProgress() !== 0) reject();
    });
  });

  it('should seek correctly', () => {
    return new Promise((resolve, reject) => {
      const a = tween().start(() => {});
      a.seek(0.5).getElapsed() !== 150 ? reject() : resolve();
    });
  });

  // it('should reverse manually', () => {
  //   return new Promise((resolve, reject) => {
  //     const failTimeout = setTimeout(() => reject('timed out'), 210);
  //     let i = 0;
  //     const a = tween().start({
  //       complete: () => {
  //         clearTimeout(failTimeout);
  //         if (i !== 0 || a.getElapsed() !== 0) reject("Didn't reverse properly");
  //         resolve();
  //       },
  //       update: (v) => i = v
  //     });

  //     setTimeout(() => {
  //       a.reverse();
  //     }, 100);
  //   });
  // });

  it('it should loop on complete', () => {
    return new Promise((resolve, reject) => {
      const failTimeout = setTimeout(() => reject('timed out'), 1000);
      tween({ loop: 1 }).start({
        complete: () => {
          clearTimeout(failTimeout);
          resolve();
        }
      });
    });
  });

  it('shouldnt fire the same frame twice', () => {
    return new Promise((resolve, reject) => {
      let lastTimestamp = 0;

      tween({
        to: { x: 100, y: 100 },
      }).start({
        complete: () => resolve(),
        update: () => {
          if (currentFrameTime() === lastTimestamp) reject();
          lastTimestamp = currentFrameTime();
        }
      });
    });
  });
});
