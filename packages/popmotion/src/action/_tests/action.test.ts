import action from '../';

describe('action', () => {
  it('should update', () => {
    action(({ update }) => update(1)).start((v) => expect(v).toBe(1));
  });
});
