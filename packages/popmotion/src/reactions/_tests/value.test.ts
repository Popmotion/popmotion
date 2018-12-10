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

  it('should correctly report object velocity', () => {
    return new Promise((resolve, reject) => {
      const num = value({ x: 0, y: 0 });
      physics({ velocity: { x: 100, y: 200 } }).start(num);
      setTimeout(() => {
        const velocity = num.getVelocity();

        velocity.x >= 95 &&
        velocity.x <= 105 &&
        velocity.y >= 195 &&
        velocity.y <= 205
          ? resolve()
          : reject(`${velocity.x}, ${velocity.y}`);
      }, 200);
    });
  });

  it('should correctly report array velocity', () => {
    return new Promise((resolve, reject) => {
      const num = value([0, 0]);
      physics({ velocity: [100, 200] }).start(num);
      setTimeout(() => {
        const velocity = num.getVelocity();

        velocity[0] >= 99 &&
        velocity[0] <= 101 &&
        velocity[1] >= 199 &&
        velocity[1] <= 201
          ? resolve()
          : reject(velocity);
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
