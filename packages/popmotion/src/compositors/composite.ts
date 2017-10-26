import action from '../action';
import { Action, HotSubscription } from '../chainable/types';

type ActionMap = {
  [key: string]: Action
};

type ValueMap = {
  [key: string]: any
};

const composite = (actionMap: ActionMap) => {
  const actionKeys = Object.keys(actionMap);
  const numActions = actionKeys.length;

  return action(({ update, complete, error }): HotSubscription => {
    const output: ValueMap = {};
    const updateOutput = () => update(output);
    let numCompletedActions = 0;
    const updatedActions: string[] = [];
    let allActionsHaveUpdated = false;

    const subs = actionKeys.map((key) => actionMap[key].start({
      complete: () => {
        numCompletedActions++;
        if (numCompletedActions === numActions) complete();
      },
      error,
      update: (v: any) => {
        output[key] = v;

        if (!allActionsHaveUpdated && updatedActions.indexOf(key) === -1) {
          updatedActions.push(key);
          if (updatedActions.length === numActions) allActionsHaveUpdated = true;
        }

        if (allActionsHaveUpdated) updateOutput();
      }
    }));

    // Take first subscription API and return a new API that
    // fires all actions
    return Object.keys(subs[0])
      .filter((key) => key !== 'stop')
      .reduce((api: HotSubscription, methodName) => {
        api[methodName] = (...args: any[]) => subs.forEach((sub) => {
          if (sub[methodName]) sub[methodName](...args);
        });
        return api;
      }, {
        stop: () => subs.forEach((sub) => sub.stop())
      });
  });
};

export default composite;
