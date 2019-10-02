import action, { Action } from '../action';

const delay = (timeToDelay: number): Action =>
  action(({ complete }) => {
    const start = Date.now();
    let remainingTime = timeToDelay;
    let timeout = setTimeout(complete, timeToDelay);

    return {
      stop() {
        clearTimeout(timeout);
        return this;
      },
      pause() {
        clearTimeout(timeout);
        remainingTime = timeToDelay - (Date.now() - start);
        return this;
      },
      resume() {
        if (remainingTime < 0) return;
        timeout = setTimeout(complete, remainingTime);
        return this;
      }
    };
  });

export default delay;
