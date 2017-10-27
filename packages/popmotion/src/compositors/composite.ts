import { Action } from '../chainable/types';
import parallel from './parallel';

type ActionMap = {
  [key: string]: Action
};

type ValueMap = {
  [key: string]: any
};

const composite = (actionMap: ActionMap) => {
  const actionKeys = Object.keys(actionMap);
  const numActions = actionKeys.length;
  const output: ValueMap = actionKeys.reduce((o: ValueMap, key) => {
    o[key] = 0;
    return o;
  }, {});
  const actions = actionKeys.map((key) => actionMap[key]);

  return parallel(...actions)
    .pipe((v: any[]) => {
      for (let i = 0; i < numActions; i++) {
        const key = actionKeys[i];
        output[key] = v[i];
      }
      return output;
    });
};

export default composite;
