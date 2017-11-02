import reaction from '../';
import action from '../../action';

describe('reaction', () => {
  const one = action(({ update }) => update(1));

  it('should accept subscribers', () => {
    const r = reaction();
    r.subscribe({
      update: (v) => expect(v).toBe(1),
      complete: () => expect(true).toBe(true)
    });
    r.update(1);
    r.complete();
  });

  it('should work with actions', () => {
    const r = reaction();
    r.subscribe((v) => expect(v).toBe(1));
    const a = one.start(r);
  });

  it('should accept multiple subscribers', () => {
    const r = reaction();
    r.subscribe((v) => expect(v).toBe(1));
    r.subscribe((v) => expect(v).toBe(1));
    const a = one.start(r);
  });

  it('should create a new instance when chained', () => {
    const r = reaction();
    const s = r.pipe((v) => v * 2);
    r.subscribe((v) => expect(v).toBe(1));
    s.subscribe((v) => expect(v).toBe(2));
    one.start(r);
    one.start(s);
  });
})
