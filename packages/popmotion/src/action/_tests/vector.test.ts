import { number } from 'style-value-types';
import action from '../';
import tween from '../../animations/tween';
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
          if (v === undefined) reject('undefined detected');
          (v.x === 1 && v.y === 2)
            ? resolve()
            : reject('composite output incorrect');
        });
    });
  });

  it('should return a parallel action if provided an object', () => {
    return new Promise((resolve, reject) => {
      va({ p: [0, 1, 2, 3, 4] })
        .start((v) => {
          (v[0] === 0 && v[1] === 1 && v[2] === 2 && v[3] === 3 && v[4] === 4)
            ? resolve()
            : reject('parallel output incorrect');
        });
    });
  });

  it('should return properly handle colors', () => {
    return new Promise((resolve, reject) => {
      let col = '';
      tween({
        from: '#ff0',
        to: 'rgba(0, 0, 0, 1)'
      }).start({
        update: (v) => col = v,
        complete: () => (col === 'rgba(0, 0, 0, 1)') ? resolve() : reject()
      });
    });
  });

  it('should return a composite action', () => {
    return new Promise((resolve, reject) => {
      let output = {};
      tween({
        from: {
          x: 0,
          background: '#ff0'
        },
        to: {
          x: 100,
          background: 'rgba(0, 0, 0, 1)'
        }
      }).start({
        update: (v) => output = v,
        complete: () => {
          if (output.background === 'rgba(0, 0, 0, 1)' && output.x === 100) {
            resolve();
          } else {
            reject(`${output.background}, ${output.x}`);
          }
        }
      });
    });

    it('should support hsla', () => {
      return new Promise((resolve, reject) => {
        let col = '';
        tween({
          from: 'hsla(0, 90, 10, 1)',
          to: 'hsla(100, 90, 10, 0.5)'
        }).start({
          update: (v) => col = v,
          complete: () => (col === 'hsla(100, 90, 10, 0.5)') ? resolve() : reject()
        });
      })
    });
  });
});
