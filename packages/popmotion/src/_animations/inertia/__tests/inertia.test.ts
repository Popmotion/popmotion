import inertia from '../';

describe('inertia', () => {
  it('should progress to calculated target', () => {
    let i = 0;
    let target = 0;

    const promise = new Promise(resolve => {
      inertia({
        velocity: 100,
        modifyTarget: v => (target = v)
      }).start({
        update: v => (i = v),
        complete: () => resolve(i)
      });
    });

    expect(promise).resolves.toBe(target);
  });

  it('should progress to modified target', () => {
    let i = 0;
    let target = 100;

    const promise = new Promise(resolve => {
      inertia({
        velocity: 100,
        modifyTarget: v => target
      }).start({
        update: v => (i = v),
        complete: () => resolve(i)
      });
    });

    expect(promise).resolves.toBe(target);
  });

  it('should snap to nearest boundary if started with no velocity', () => {
    let i = 0;

    const promise = new Promise(resolve => {
      inertia({
        from: 200,
        max: 50,
        velocity: 0
      }).start({
        update: v => (i = v),
        complete: () => resolve(i)
      });
    });

    expect(promise).resolves.toBe(50);
  });

  it('should snap to nearest boundary if started outwards-facing velocity', () => {
    let i = 0;

    const promise = new Promise(resolve => {
      inertia({
        from: 200,
        max: 50,
        min: -50,
        velocity: 1000
      }).start({
        update: v => (i = v),
        complete: () => resolve(i)
      });
    });

    expect(promise).resolves.toBe(50);
  });

  it('should snap to furthest boundary if released with inwards-facing velocity', () => {
    let i = 0;

    const promise = new Promise(resolve => {
      inertia({
        from: 200,
        max: 50,
        min: -50,
        velocity: -1000
      }).start({
        update: v => (i = v),
        complete: () => resolve(i)
      });
    });

    expect(promise).resolves.toBe(-50);
  });
});
