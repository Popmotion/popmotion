import action, { Action } from '../action';

const merge = (...actions: Action[]) => action((observer) => {
  const subs = actions.map((thisAction) => thisAction.start(observer));
  return {
    stop: () => subs.forEach((sub) => sub.stop())
  };
});

export default merge;
