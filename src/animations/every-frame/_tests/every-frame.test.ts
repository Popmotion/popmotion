import everyFrame from '../';

describe('everyFrame', () => {
  it('should fire update every frame', () => {
    return new Promise((resolve) => {
      let i = 0;
      const a = everyFrame().start(() => {
        i++;
        if (i > 2) {
          a.stop();
          resolve();
        }
      });
    });
  });
});
