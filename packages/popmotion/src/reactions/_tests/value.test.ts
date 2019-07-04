import physics from '../../animations/physics';
import value from '../value';

describe('value', () => {
  it('should correctly report velocity', () => {
    return new Promise((resolve, reject) => {
      const num = value(0);
      physics({ velocity: 100 }).start(num);
      setTimeout(() => {
        num.getVelocity() >= 95 && num.getVelocity() <= 105
          ? resolve()
          : reject();
      }, 200);
    });
  });

  it('should fire new subscriptions', () => {
    return new Promise((resolve, reject) => {
      let total = 0;
      const num = value(1);

      num.subscribe(v => (total = total + v));
      num.subscribe(v => (total = total + v));

      total === 2 ? resolve() : reject(total);
    });
  });
});
