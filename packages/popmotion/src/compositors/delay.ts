import action from '../action';
import { Action } from '../chainable/types';

const delay = (timeToDelay: number): Action => action(({ complete }) => {
  const timeout = setTimeout(complete);

  return {
    stop: () => clearTimeout(timeout)
  };
});

export default delay;
