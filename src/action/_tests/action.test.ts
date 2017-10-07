import action from '../';

describe('action()', () => {
  it('should create an observable', () => {
    const a = action(({ update }) => update(1));
    let x = 0;
    a.start((v) => x = v);
    expect(x).toBe(1);
  });
})