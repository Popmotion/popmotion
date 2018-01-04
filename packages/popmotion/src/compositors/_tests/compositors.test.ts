import action from '../../action';
import onFrame from '../../animations/every-frame';
import chain from '../chain';
import composite from '../composite';
import crossFade from '../crossfade';
import delay from '../delay';
import merge from '../merge';
import parallel from '../parallel';

const fireOne = action(({ complete, update }) => {
  update(1);
  complete();
});

const createCounter = (start) => action(({ complete, update }) => {
  let counter = start;

  onFrame().start(() => {
    if (counter > start + 3) {
      complete();
    } else {
      update(counter);
      counter++;
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

describe('crossfade', () => {
  it('should blend the left action by default', () => {
    return new Promise((resolve, reject) => {
      const i = 0;
      crossFade(createCounter(0), createCounter(1)).start({
        complete: () => i === 3 ? resolve() : reject(i),
        update: (v) => i = v
      });
    });
  });
  it('should correctly blend both actions', () => {
    return new Promise((resolve, reject) => {
      const i = 0;
      crossFade(createCounter(0), createCounter(1)).start({
        complete: () => i === 3.5 ? resolve() : reject(i),
        update: (v) => i = v
      }).setBalance(0.5);
    });
  });
});

describe('delay', () => {
  it('should wait the requisite amount of time before firing', () => {
    return new Promise((resolve, reject) => {
      const time = Date.now();
      delay(100).start({
        complete: () => Date.now() - time < 98 ? reject(Date.now() - time) : resolve()
      });
    });
  });
});

describe('parallel', () => {
  it('should output two actions in parallel', () => {
    const output = [];
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

  it('should return a mapped version of the api', () => {
    const foo = action(({ update }) => {
      return {
        test: () => 1,
        testArgs: (arg) => arg
      };
    });
    const api = parallel(foo, foo, foo).start();
    expect(api.test()).toEqual([1, 1, 1]);
    
    expect(api.testArgs(1)).toEqual([1, 1, 1]);
    expect(api.testArgs([1, 2, 3])).toEqual([1, 2, 3]);
  });
});

describe('composite', () => {
  it('should create an output of named values from multiple sources', () => {
    const output = [];

    return new Promise((resolve) => {
      composite({ x: createCounter(0), y: createCounter(1) }).start({
        complete: resolve,
        update: ({ x, y }) => output.push({ x, y })
      });
    }).then(() => {
      expect(output).toEqual([
        { x: 0, y: 1 },
        { x: 1, y: 2 },
        { x: 2, y: 3 },
        { x: 3, y: 4 }
      ]);
    });
  });

  it('should return a mapped version of the api', () => {
    const foo = action(({ update }) => {
      return {
        test: () => 1,
        testArgs: (arg) => arg
      };
    });
    const api = composite({ x: foo, y: foo }).start();
    expect(api.test()).toEqual({ x: 1, y: 1 });

    expect(api.testArgs(1)).toEqual({ x: 1, y: 1 });
    expect(api.testArgs({ x: 0, y: 1 })).toEqual({ x: 0, y: 1 });
  });
});

describe('merge', () => {
  it('should create a single action that outputs values from both sources', () => {
    const output = [];

    return new Promise((resolve) => {
      merge(
        createCounter(0),
        createCounter(1)
      ).start({
        complete: resolve,
        update: (v) => output.push(v)
      });
    }).then(() => {
      expect(output).toEqual([0, 1, 1, 2, 2, 3, 3, 4]);
    });
  });
});
