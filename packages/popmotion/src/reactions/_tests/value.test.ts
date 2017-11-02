import physics from '../../animations/physics';
import value from '../value';

describe('value', () => {
  it('should correctly report velocity', () => {
    return new Promise((resolve, reject) => {
      const num = value(0);
      physics({ velocity: 100 }).start(num);
      setTimeout(() => {
        num.getVelocity() >= 99 && num.getVelocity() <= 101 ? resolve() : reject()
      }, 200);
    });
  })
})
