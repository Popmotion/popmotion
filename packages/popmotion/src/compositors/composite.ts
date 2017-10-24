import action from '../action';
import { Action } from '../observable/types';

type ObservableMap = {
  [key: string]: Action
};

type ValueMap = {
  [key: string]: any
};

const composite = (actionMap: ObservableMap) => {
  const actionKeys = Object.keys(actionMap);
  const numActions = actionKeys.length;

  return action((observer) => {
    const output: ValueMap = {};
    const updateOutput = () => observer.update(output);
    let numCompletedActions = 0;

    const subs = actionKeys.map((key) => actionMap[key].start({
      complete: () => {
        numCompletedActions++;
        if (numCompletedActions === numActions) observer.complete();
      },
      update: (v: any) => {
        output[key] = v;
        updateOutput();
      }
    }));

    return {
      stop: () => subs.forEach((sub) => sub.stop())
    };
  });
};

export default composite;
