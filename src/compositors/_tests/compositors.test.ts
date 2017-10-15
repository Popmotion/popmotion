import action from '../../action';
import chain from '../chain';

const fireOne = action(({ complete, update }) => {
  update(1);
  complete();
});

describe('chain', () => {
  it('should chain multiple actions', () => {
    let i = 0;
    chain(fireOne, fireOne, fireOne).start((v) => i = i + v);
    expect(i).toEqual(3);
  });

  it('should stop actions', () => {
    let i = 0;
    const a = chain(fireOne, fireOne, fireOne, fireOne)
      .while((v) => i <= 1)
      .start((v) => i = i + v);

    expect(i).toEqual(2);
  });
});