import action, { Action } from '../action';

const delay = (timeToDelay: number): Action => action(({ complete }) => {
  const timeout = setTimeout(complete, timeToDelay);

  return {
    stop: () => clearTimeout(timeout)
  };
});

export default delay;
