import action, { Action } from '../action';
import { ColdSubscription } from '../action/types';

const chain = (...actions: Action[]): Action => action(({ update, complete }) => {
  let i = 0;
  let current: ColdSubscription;

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
