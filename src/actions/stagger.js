import chain from './chain';
import group from './group';
import delay from './delay';

export default (actions, interval) => {
  return group(actions.map((action, i) => {
    const timeToDelay = defaultIntervalCalculation(i, interval);
    return chain([
      delay(timeToDelay),
      action
    ]);
  }));
};
