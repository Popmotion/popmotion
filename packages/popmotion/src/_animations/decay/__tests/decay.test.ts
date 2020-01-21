import decay from '../';

describe('decay', () => {
  it('should progress to calculated target', () => {
    return new Promise((resolve, reject) => {
      let i = 0;
      let target = 0;
      decay({
        velocity: 100,
        modifyTarget: v => (target = v)
      }).start({
        complete: () => (i === target ? resolve() : reject()),
        update: v => (i = v)
      });
    });
  });

  it('should progress to modified target', () => {
    return new Promise((resolve, reject) => {
      let i = 0;
      let target = 0;
      decay({
        velocity: 100,
        modifyTarget: v => (target = 100)
      }).start({
        complete: () => (i === 100 ? resolve() : reject()),
        update: v => (i = v)
      });
    });
  });
});
