import action from '../';

const log = (v) => {
  console.log(v);
  return v
};

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
  })

  it('should correctly fire complete', () => {
    return new Promise((resolve) => {
      const a = action(({ complete }) => complete()).start({ complete: resolve });
    });
  });
})
