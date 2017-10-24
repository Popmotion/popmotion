import { onFrameUpdate } from 'framesync';
import action from '../action';
import { Observable } from '../action/types';

const parallel = (...actions: Observable[]) => action((observer) => {
  const numActions = actions.length;
  const output = new Array(numActions);
  const updateOutput = () => observer.update(output);
  let numCompletedActions = 0;

  const subs = actions.map((a, i) => a.start({
    complete: () => {
      numCompletedActions++;
      if (numCompletedActions === numActions) observer.complete();
    },
    update: (v: any) => {
      output[i] = v;
      onFrameUpdate(updateOutput);
    }
  }));

  return {
    stop: () => subs.forEach((sub) => sub.stop())
  };
});

export default parallel;
