import action from '../action';
import { Action, Subscription } from '../observable/types';

const chain = (...actions: Action[]) => action(({ update, complete }) => {
  let i = 0;
  let current: Subscription;

  const playCurrent = () => {
    current = actions[i].start({
      complete: () => {
        i++;
        (i >= actions.length) ? complete() : playCurrent();
      },
      update
    });
  };

  playCurrent();

  return {
    stop: () => current && current.stop()
  };
});

export default chain;
