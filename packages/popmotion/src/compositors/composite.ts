import multi from './multi';
import { Action } from '../action';
import { ColdSubscription } from '../action/types';

type ActionMap = {
  [key: string]: Action
};

type ValueMap = {
  [key: string]: any
};

type ColdSubscriptionMap = {
  [key: string]: ColdSubscription
};

const composite = multi<ActionMap, ColdSubscriptionMap, ValueMap, string>({
  getOutput: () => ({}),
  getCount: (subs) => Object.keys(subs).length,
  getFirst: (subs) => subs[Object.keys(subs)[0]],
  mapApi: (subs, methodName) => (...args) => Object.keys(subs)
    .reduce((output: ValueMap, propKey: string) => {
      if (subs[propKey][methodName]) {
        (args[0] && args[0][propKey] !== undefined)
          ? output[propKey] = subs[propKey][methodName](args[0][propKey])
          : output[propKey] = subs[propKey][methodName](...args);
      }
      return output;
    }, {}),
  setProp: (output, name, v) => output[name] = v,
  startActions: (actions, starter) => Object.keys(actions)
    .reduce((subs: ColdSubscriptionMap, key) => {
      subs[key] = starter(actions[key], key);
      return subs;
    }, {})
});

export default composite;
