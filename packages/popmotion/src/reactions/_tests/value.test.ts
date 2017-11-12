import physics from '../../animations/physics';
import value from '../value';

describe('value', () => {
  it('should correctly report velocity', () => {
    return new Promise((resolve, reject) => {
      const num = value(0);
      physics({ velocity: 100 }).start(num);
      setTimeout(() => {
        num.getVelocity() >= 99 && num.getVelocity() <= 101 ? resolve() : reject();
      }, 200);
    });
  })

  it('should correctly report object velocity', () => {
    return new Promise((resolve, reject) => {
      const num = value({ x: 0, y: 0 });
      physics({ velocity: { x: 100, y: 200 } }).start(num);
      setTimeout(() => {
        const velocity = num.getVelocity();

        velocity.x >= 99 && velocity.x <= 101 && velocity.y >= 199 && velocity.y <= 201
          ? resolve() : reject(`${velocity.x}, ${velocity.y}`);
      }, 200);
    });
  })

  it('should correctly report array velocity', () => {
    return new Promise((resolve, reject) => {
      const num = value([0, 0]);
      physics({ velocity: [100, 200] }).start(num);
      setTimeout(() => {
        const velocity = num.getVelocity();

        velocity[0] >= 99 && velocity[0] <= 101 && velocity[1] >= 199 && velocity[1] <= 201
          ? resolve() : reject(velocity);
      }, 200);
    });
  })
})
