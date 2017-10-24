import action from '../../action';
import reaction from '../../reaction';

describe('reaction()', () => {
  it('should create a subscribable observer', () => {
    return new Promise((resolve, reject) => {
      const r = reaction();
      let i = 0;

      r.subscribe({
        complete: () => i === 1 ? resolve() : reject(),
        update: (v) => i = v
      });

      action(({ update, complete }) => {
        update(1);
        complete();
      }).start(r);
    });
  });
  it('should allow pipe etc', () => {
    return new Promise((resolve, reject) => {
      const r = reaction().pipe((v) => v * 2);
      let i = 0;

      r.subscribe({
        complete: () => i === 2 ? resolve() : reject(),
        update: (v) => i = v
      });

      action(({ update, complete }) => {
        update(1);
        complete();
      }).start(r);
    });
  });
});
