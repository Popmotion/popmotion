import Action from './Action';
import actionGroup from './group';
import sequence from './sequence';
import delay from './delay';

const defaultIntervalCalc = (i, interval) => i * interval;

export default function stagger(actions, interval, ease) {
  return actionGroup(actions.map((action, i) => {
    sequence([
      delay(defaultIntervalCalc(i, interval)),
      action
    ]);
  }));
};
