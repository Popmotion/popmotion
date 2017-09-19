import action from 'actions/action';
import { Observable, Subscription } from 'actions/action/types';

const chain = (...actions: Observable[]) => action(({ update, complete }) => {
  let i = 0;
  let current: Subscription;

  const playCurrent = () => {
    current = actions[i].start({
      update,
      complete: () => {
        i++;
        (i >= actions.length) ? complete() : playCurrent();
      }
    });
  };

  return {
    stop: () => current && current.stop()
  };
});

export default chain;
