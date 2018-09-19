import sync, { cancelSync } from '../';
import onNextFrame from '../on-next-frame';

describe('onNextFrame', () => {
  it('fires callback on following frame', () => {
    return new Promise((resolve: Function) => onNextFrame(resolve));
  });
});

describe('sync', () => {
  it('fires callbacks in the correct order', () => {
    return new Promise((resolve, reject) => {
      const order: number[] = [];

      sync({
        update: () => order.push(1),
        preRender: () => order.push(2),
        render: () => order.push(3),
        postRender: () => {
          order.push(4);
          if (
            order[0] === 1 &&
            order[1] === 2 &&
            order[2] === 3 &&
            order[3] === 4
          ) {
            resolve();
          } else {
            reject(order);
          }
        },
        keepAlive: false
      });
    });
  });

  it('cancels callbacks', () => {
    return new Promise((resolve, reject) => {
      let hasFired = false;

      const process = sync({
        render: () => (hasFired = true)
      });

      sync({
        update: () => cancelSync(process)
      });

      sync({
        postRender: () => (hasFired ? reject(hasFired) : resolve())
      });
    });
  });

  it('fires callback on current frame if scheduled with `true` within the same step', () => {
    return new Promise((resolve: Function, reject: Function) => {
      let v = 0;

      sync({
        update: ({ timestamp: prevTimestamp }) => {
          v++;
          sync({
            update: ({ timestamp }) => {
              v++;
              if (timestamp !== prevTimestamp) {
                reject(timestamp, prevTimestamp);
              }
            },
            immediate: true
          });
        },
        render: () => {
          v === 2 ? resolve() : reject(v);
        }
      });
    });
  });

  it('fires callback on next frame if scheduled with `true` outside the same step', () => {
    return new Promise((resolve: Function, reject: Function) => {
      let v = 0;

      sync({
        update: () => v++
      });

      sync({
        update: () => v++,
        immediate: true
      });

      sync({
        render: () => (v === 2 ? resolve() : reject())
      });
    });
  });

  it('uses default elapsed time if first fire', () => {
    return new Promise((resolve: Function, reject: Function) => {
      sync({
        update: ({ delta: defaultElapsed }) => {
          setTimeout(
            () =>
              sync({
                update: ({ delta }) =>
                  delta === defaultElapsed
                    ? resolve()
                    : reject(defaultElapsed, delta)
              }),
            50
          );
        }
      });
    });
  });

  it('correctly keeps alive', () => {
    return new Promise((resolve, reject) => {
      let v = 0;
      sync({
        update: () => v++,
        render: () => v === 2 && resolve(),
        keepAlive: true
      });
    });
  });
});
