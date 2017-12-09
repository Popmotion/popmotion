import multi from './multi';
import { Action } from '../action';
import { ColdSubscription } from '../action/types';

const parallel = multi<Action[], ColdSubscription[], any[], number>({
  getOutput: () => ([]),
  getCount: (subs) => subs.length,
  getFirst: (subs) => subs[0],
  mapApi: (subs, methodName) => (...args) => subs.map((sub, i) => {
    if (sub[methodName]) {
      return Array.isArray(args[0])
        ? sub[methodName](args[0][i])
        : sub[methodName](...args);
    }
  }),
  setProp: (output, name, v) => output[name] = v,
  startActions: (actions, starter) => actions.map((action, i) => starter(action, i))
});

export default (...actions: Action[]) => parallel(actions);
