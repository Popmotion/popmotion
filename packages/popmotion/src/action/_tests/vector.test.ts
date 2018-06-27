import { number } from 'style-value-types';
import action from '../';
import tween from '../../animations/tween';
import vector from '../vector';

describe('vector', () => {
  const va = vector(({ from }) => action(({ update }) => update(from)), {
    from: number.test,
    to: number.test
  });

  it('should work as usual if only default types passed', () => {
    va({ from: 1 }).start(v => expect(v).toBe(1));
  });

  it('should return a composite action if provided an object', () => {
    return new Promise((resolve, reject) => {
      va({ from: { x: 1, y: 2 }, to: { x: 1, y: 2 } }).start(v => {
        if (v === undefined) reject('undefined detected');
        v.x === 1 && v.y === 2
          ? resolve()
          : reject('composite output incorrect');
      });
    });
  });

  it('should return a parallel action if provided an array', () => {
    return new Promise((resolve, reject) => {
      va({ from: [0, 1, '2px', 3, 4], to: [0, 1, '2px', 3, 4] }).start(v => {
        v[0] === 0 && v[1] === 1 && v[2] === '2px' && v[3] === 3 && v[4] === 4
          ? resolve()
          : reject('parallel output incorrect');
      });
    });
  });

  it('should handle px units', () => {
    return new Promise((resolve, reject) => {
      let output = '';
      tween({
        ease: v => v,
        from: 0,
        to: '10px',
        duration: 1
      }).start({
        update: v => (output = v),
        complete: () => (output === '10px' ? resolve() : reject())
      });
    });
  });

  it('should handle % units', () => {
    return new Promise((resolve, reject) => {
      let output = '';
      tween({
        from: '10%',
        to: '10%',
        duration: 1
      }).start({
        update: v => (output = v),
        complete: () => (output === '10%' ? resolve() : reject())
      });
    });
  });

  it('should handle vh units', () => {
    return new Promise((resolve, reject) => {
      let output = '';
      tween({
        from: 0,
        to: '10vh',
        duration: 1
      }).start({
        update: v => (output = v),
        complete: () => (output === '10vh' ? resolve() : reject())
      });
    });
  });

  it('should handle vw units', () => {
    return new Promise((resolve, reject) => {
      let output = '';
      tween({
        from: 0,
        to: '10vw',
        duration: 1
      }).start({
        update: v => (output = v),
        complete: () => (output === '10vw' ? resolve() : reject())
      });
    });
  });

  it('should handle degree units', () => {
    return new Promise((resolve, reject) => {
      let output = '';
      tween({
        from: 0,
        to: '10deg',
        duration: 1
      }).start({
        update: v => (output = v),
        complete: () => (output === '10deg' ? resolve() : reject())
      });
    });
  });

  it('should handle complex units', () => {
    return new Promise((resolve, reject) => {
      let output = '';
      tween({
        from: '0px 0px inset 10.5vh',
        to: '10px 10px inset 20vh',
        duration: 1
      }).start({
        update: v => (output = v),
        complete: () =>
          output === '10px 10px inset 20vh' ? resolve() : reject(output)
      });
    });
  });

  it('should handle gradients', () => {
    return new Promise((resolve, reject) => {
      let output = '';
      tween({
        from: 'linear-gradient(top left, #f00, #666)',
        to: 'linear-gradient(top left, #666, #fff)',
        duration: 1
      }).start({
        update: v => (output = v),
        complete: () =>
          output === 'linear-gradient(top left, rgba(102, 102, 102, 1), rgba(255, 255, 255, 1))' ? resolve() : reject(output)
      });
    });
  });

  it('should handle complex units with color', () => {
    return new Promise((resolve, reject) => {
      let output = '';
      tween({
        from: '0px 0px inset 10.5vh #fff',
        to: '10px 10px inset 20vh #f00',
        duration: 1
      }).start({
        update: v => (output = v),
        complete: () =>
          output === '10px 10px inset 20vh rgba(255, 0, 0, 1)' ? resolve() : reject(output)
      });
    });
  });

  it('should handle complex units with commas', () => {
    return new Promise((resolve, reject) => {
      let output = '';
      tween({
        from: '0px 0px inset 10.5vh #fff, 0px 0px inset 10.5vh #fff',
        to: '10px 10px inset 20vh #f00, 20px 20px inset 40vh #0f0',
        duration: 1
      }).start({
        update: v => (output = v),
        complete: () =>
          output === '10px 10px inset 20vh rgba(255, 0, 0, 1), 20px 20px inset 40vh rgba(0, 255, 0, 1)' ? resolve() : reject(output)
      });
    });
  });

  it('should handle composite complex units with color', () => {
    return new Promise((resolve, reject) => {
      let output = {v: 0, boxShadow: ''};
      tween({
        from: {
          v: 0,
          boxShadow: '10px 10px inset 20vh #000'
        },
        to: {
          v: 1,
          boxShadow: '10px 10px inset 20vh #f00'
        },
        duration: 1
      }).start({
        update: v => (output = v),
        complete: () => 
          (output.v === 1) && output.boxShadow === '10px 10px inset 20vh rgba(255, 0, 0, 1)'
            ? resolve() : reject(output);
      });
    });
  });

  it('should return properly handle colors', () => {
    return new Promise((resolve, reject) => {
      let col = '';
      tween({
        from: '#ff0',
        to: 'rgba(0, 0, 0, 1)',
        duration: 1
      }).start({
        update: v => (col = v),
        complete: () => (col === 'rgba(0, 0, 0, 1)' ? resolve() : reject())
      });
    });
  });

  it('should return a parallel action', () => {
    return new Promise((resolve, reject) => {
      let output = [];
      tween({
        from: [0, '0px', '#000', '0px 0vh inset #000'],
        to: [10, '10px', '#fff', '10px 10vh inset #f00'],
        duration: 1
      }).start({
        update: (v) => output = v,
        complete: () => {
          const [a, b, c, d] = output;
          if (
            a === 10 &&
            b === '10px' &&
            c === 'rgba(255, 255, 255, 1)' &&
            d === '10px 10vh inset rgba(255, 0, 0, 1)'
          ) {
            resolve();
          } else {
            reject(output);
          }
        }
      })
    })
  });

  it('should return a composite action', () => {
    return new Promise((resolve, reject) => {
      let output = {};
      tween({
        from: {
          x: 0,
          y: '10px',
          background: '#ff0'
        },
        to: {
          x: 100,
          y: '20px',
          background: 'rgba(0, 0, 0, 1)'
        },
        duration: 1
      }).start({
        update: v => (output = v),
        complete: () => {
          if (output.background === 'rgba(0, 0, 0, 1)' && output.x === 100 && output.y === '20px') {
            resolve();
          } else {
            reject(`${output.background}, ${output.x}, ${output.y}`);
          }
        }
      });
    });

    it('should support hsla', () => {
      return new Promise((resolve, reject) => {
        let col = '';
        tween({
          from: 'hsla(0, 90, 10, 1)',
          to: 'hsla(100, 90, 10, 0.5)',
          duration: 1
        }).start({
          update: v => (col = v),
          complete: () =>
            col === 'hsla(100, 90, 10, 0.5)' ? resolve() : reject()
        });
      });
    });

    it('might do nesting wtf', () => {
      return new Promise((resolve, reject) => {
        let output = {};

        tween({
          from: { a: { b: ['0vh 0px inset #f00'] } },
          to: { a: { b: ['10vh 20px inset #fff'] } },
          duration: 1
        }).start({
          update: v => (output = v),
          complete: () =>
            output.a.b[0] === '10vh 20px inset rgba(255, 255, 255, 1)' ? resolve() : reject(output)
        });
      })
    })
  });
});
