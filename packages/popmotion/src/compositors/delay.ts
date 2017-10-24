import action from '../action';

const delay = (timeToDelay: number) => action(({ complete }) => {
  const timeout = setTimeout(complete);

  return {
    stop: () => clearTimeout(timeout)
  };
});

export default delay;
