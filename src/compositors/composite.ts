import { onFrameUpdate } from 'framesync';
import action from '../rx/action';

const composite = (actionMap) => {
  return action((observer) => {
    const output = {};
    const updateOutput = () => observer.update(output);
    const keys = Object.keys(actionMap);
    const numActions = keys.length;
    let numCompletedActions = 0;

    const subs = Object.keys(actionMap).map((key) => {
      const a = actionMap[key].start({
        update: (v) => {
          output[key] = v;
          onFrameUpdate(updateOutput);
        },
        complete: () => {
          numCompletedActions++;
          if (numCompletedActions === numActions) observer.complete();
        }
      });
    });

    return {
      stop: () => subs.forEach((sub) => sub.stop())
    };
  });
};

export default composite;
