import { number } from 'style-value-types';
import action from '../';
import vector from '../vector';

describe('vector', () => {
  const va = vector(({ p }) => action(({ update }) => update(p)), { p: number.test });

  it('should work as usual if only default types passed', () => {
    va({ p: 1 }).start((v) => expect(v).toBe(1));
  });

  it('should return a composite action if provided an object', () => {
    return new Promise((resolve, reject) => {
      va({ p: { x: 1, y: 2 } })
        .start((v) => {
          console.log(v);
          (v.x === 1 && v.y === 2)
            ? resolve()
            : reject('composite output incorrect');
        });
    });
  });

  it('should return a parallel action if provided an object', () => {
    return new Promise((resolve, reject) => {
      va({ p: [0, 1] })
        .start((v) => {
          console.log(v);
          (v[0] === 0 && v[1] === 1)
            ? resolve()
            : reject('parallel output incorrect');
        });
    });
  });
});
