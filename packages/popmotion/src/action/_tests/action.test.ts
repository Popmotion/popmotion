import action from '../';

describe('action', () => {
  const one = action(({ update }) => update(1));
  const oneTwo = action(({ update }) => {
    update(1);
    update(2);
  });

  it('should update', () => {
    one.start(v => expect(v).toBe(1));
  });

  it('should complete', () => {
    action(({ complete }) => complete()).start({
      complete: () => expect(true).toBe(true)
    });
  });

  it('should pipe values', () => {
    one.pipe(v => v * 2).start(v => expect(v).toBe(2));
  });

  it('should create new instance when chained', () => {
    one.start(v => expect(v).toBe(1));
    one.pipe(v => v * 2).start(v => expect(v).toBe(2));
  });
});
