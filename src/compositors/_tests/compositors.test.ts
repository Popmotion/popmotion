import action from '../../action';
import everyFrame from '../../animations/every-frame';
import chain from '../chain';
import composite from '../composite';
import crossFade from '../crossfade';
import parallel from '../parallel';

const fireOne = action(({ complete, update }) => {
  update(1);
  complete();
});

const createCounter = (start) => action(({ complete, update }) => {
  let counter = start;
  everyFrame().start(() => {
    counter++;
    if (counter > start + 3) {
      complete();
    } else {
      update(counter);
    }
  });
});

describe('chain', () => {
  it('should chain multiple actions', () => {
    let i = 0;
    chain(fireOne, fireOne, fireOne).start((v) => i = i + v);
    expect(i).toEqual(3);
  });

  it('should stop actions', () => {
    let i = 0;
    const a = chain(fireOne, fireOne, fireOne, fireOne)
      .while((v) => i <= 1)
      .start((v) => i = i + v);

    expect(i).toEqual(2);
  });
});

describe('composite', () => {
  it('should create an output of named values from multiple sources', () => {
    let output = [];
    
    return new Promise((resolve) => {
      composite({ x: createCounter(0), y: createCounter(1) }).start({
        complete: resolve,
        update: ({ x, y }) => output.push({ x, y })
      });
    }).then(() => {
      expect(output).toEqual([
        { x: 1, y: 2 },
        { x: 2, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 3 },
        { x: 3, y: 4 }
      ]);
    });
  })
});

describe('crossfade', () => {
  it('should blend the left action by default', () => {
    return new Promise((resolve, reject) => {
      const i = 0;
      crossFade(createCounter(0), createCounter(1)).start({
        complete: () => i === 2 ? resolve() : reject(),
        update: (v) => i = v
      });
    });
  });
  it('should correctly blend both actions', () => {
    return new Promise((resolve, reject) => {
      const i = 0;
      crossFade(createCounter(0), createCounter(1)).start({
        complete: () => i === 4.5 ? resolve() : reject(),
        update: (v) => i = v
      }).setBalance(0.5);
    });
  });
});

describe('parallel', () => {
  it('should output two actions in parallel', () => {
    let output = [];
    return new Promise((resolve, reject) => {
      parallel(createCounter(0), createCounter(1)).start({
        complete: resolve,
        update: ([ x, y ]) => output.push([ x, y ])
      });
    }).then(() => {
      expect(output).toEqual([
        [0, 1],
        [1, 2],
        [2, 3],
        [3, 4]
      ]);
    });
  });
});
