import action from '../action';
import { Action, HotSubscription } from '../chainable/types';

const createMultiSubscription = (subs: HotSubscription[]) => Object.keys(subs[0])
  .filter((key) => key !== 'stop')
  .reduce((api: HotSubscription, methodName) => {
    api[methodName] = (...args: any[]) => subs.forEach((sub: HotSubscription) => {
      if (sub[methodName]) sub[methodName](...args);
    });
    return api;
  }, {
    stop: () => subs.forEach((sub) => sub.stop())
  });

const parallel = (...actions: Action[]) => action(({ update, complete, error }) => {
  const numActions = actions.length;
  const output = new Array(numActions);
  const updateOutput = () => update(output);
  let numCompletedActions = 0;
  const updatedActions: string[] = [];
  let allActionsHaveUpdated = false;

  const subs = actions.map((a, i) => a.start({
    complete: () => {
      numCompletedActions++;
      if (numCompletedActions === numActions) complete();
    },
    error,
    update: (v: any) => {
      output[i] = v;

      if (!allActionsHaveUpdated && updatedActions.indexOf(`${i}`) === -1) {
        updatedActions.push(`${i}`);
        if (updatedActions.length === numActions) allActionsHaveUpdated = true;
      }

      if (allActionsHaveUpdated) updateOutput();
    }
  }));

  return createMultiSubscription(subs);
});

export default parallel;
