import action from '../';

describe('action()', () => {
  it('should create an observable', () => {
    const a = action(({ update }) => update(1));
    let x = 0;
    a.start((v) => x = v);
    expect(x).toBe(1);
  });

  it('should apply pipe functions in the correct order', () => {
    const a = action(({ update }) => update())
      .pipe(
        (v: number) => 10,
        (v: number) => v / 2,
        (v: number) => v * 5
      );

    let x = 0;
    a.start((v) => x = v);
    expect(x).toBe(25);
  });

  it ('should apply multiple pipe functions in the correct order', () => {
    const a = action(({ update }) => update())
      .pipe((v: number) => 10)
      .pipe((v: number) => v / 2)
      .pipe((v: number) => v * 5);

    let x = 0;
    a.start((v) => x = v);
    expect(x).toBe(25);
  });

  it('fires observer update as function', () => {
    return new Promise((resolve) => {
      action(({ update }) => update()).start(resolve);
    });
  });
  
  it('fires observer update as prop', () => {
    return new Promise((resolve) => {
      action(({ update }) => update()).start({ update: resolve });
    });
  });
  
  it('fires observer complete as prop', () => {
    return new Promise((resolve) => {
      action(({ complete }) => complete()).start({ complete: resolve });
    });
  });
})
  })

  it('should correctly fire complete', () => {
    return new Promise((resolve) => {
      const a = action(({ complete }) => complete()).start({ complete: resolve });
    });
  });

  it('runs while `while` returns true', () => {
    return new Promise((resolve, reject) => {
      let i = 0;
      const a = action(({ complete, update }) => {
        update(1);
        update(2);
        update(3);
      }).while((v) => v < 3)
        .start({
          update: (v) => i = v,
          complete: () => {
            if (i === 2) resolve();
            reject();
          }
        });
    });
  });
})
