import keyframes from '../';
import { linear } from '@popmotion/easing';

describe('keyframes', () => {
  it('should generate tweens through each value', () => {
    return new Promise((resolve, reject) => {
      let i = 0;
      keyframes({
        values: [0, 1, 2]
      }).start({
        complete: () => (i === 2 ? resolve() : reject()),
        update: v => {
          if (v === undefined) reject('undefined detected');
          i = v;
        }
      });
    });
  });

  it('should adjust timing based on provided array', () => {
    return new Promise((resolve, reject) => {
      let i = 0;
      keyframes({
        duration: 400,
        values: [0, 1, 2],
        times: [0, 0.25, 0.5]
      }).start(v => (i = v));
      setTimeout(() => (i > 1.98 && i < 2.22 ? resolve() : reject(i)), 217);
    });
  });

  it('should animate colors', () => {
    return new Promise((resolve, reject) => {
      let i = '';
      keyframes({
        values: ['rgba(0,0,0,0)', 'rgba(1, 1, 1, 1)']
      }).start({
        complete: () => (i === 'rgba(1, 1, 1, 1)' ? resolve() : reject(i)),
        update: v => (i = v)
      });
    });
  });

  it('should animate complex values', () => {
    return new Promise((resolve, reject) => {
      let i = '';
      keyframes({
        values: ['10px rgba(0, 0, 0, 0)', '20px rgba(1, 1, 1, 1)']
      }).start({
        complete: () => (i === '20px rgba(1, 1, 1, 1)' ? resolve() : reject(i)),
        update: v => (i = v)
      });
    });
  });

  it('should animate units', () => {
    return new Promise((resolve, reject) => {
      let i = '';
      keyframes({
        values: ['10px', '20px']
      }).start({
        complete: () => (i === '20px' ? resolve() : reject(i)),
        update: v => (i = v)
      });
    });
  });

  it('should animate objects', () => {
    return new Promise((resolve, reject) => {
      const i = {
        x: 100,
        background: '#fff'
      };
      keyframes({
        values: [
          {
            x: 100,
            background: '#fff'
          },
          {
            x: 0,
            background: '#000'
          }
        ]
      }).start({
        complete: () =>
          i.x === 0 && i.background === 'rgba(0, 0, 0, 1)'
            ? resolve()
            : reject(`${i.x}, ${i.background}`),
        update: v => {
          if (v === undefined) reject('undefined detected');
          i = v;
        }
      });
    });
  });

  it('should animate arrays', () => {
    return new Promise((resolve, reject) => {
      let i = [];
      keyframes({
        values: [[0, 1, 2], [1, 2, 3], [2, 3, 4]]
      }).start({
        complete: () =>
          i[0] === 2 && i[1] === 3 && i[2] === 4 ? resolve() : reject(i),
        update: v => (i = v)
      });
    });
  });
});
