import { onFrameUpdate } from 'framesync';
import action from 'actions/action';
import { Observable } from 'actions/action/types';

const parallel = (...actions: Observable[]) => action((observer) => {
  const numActions = actions.length;
  const output = new Array(numActions);
  const updateOutput = () => observer.update(output);
  let numCompletedActions = 0;

  const subs = actions.map((a, i) => a.start({
    update: (v: any) => {
      output[i] = v;
      onFrameUpdate(updateOutput);
    },
    complete: () => {
      numCompletedActions++;
      if (numCompletedActions === numActions) observer.complete();
    }
  }));

  return {
    stop: () => subs.forEach((sub) => sub.stop())
  };
});

export default parallel;
