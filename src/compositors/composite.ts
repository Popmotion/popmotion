import { onFrameUpdate } from 'framesync';
import action from 'actions/action';
import { Observable } from 'actions/action/types';

type ObservableMap = {
  [key: string]: Observable
};

type ValueMap = {
  [key: string]: any
};

const composite = (actionMap: ObservableMap) => {
  return action((observer) => {
    const output: ValueMap = {};
    const updateOutput = () => observer.update(output);
    const keys = Object.keys(actionMap);
    const numActions = keys.length;
    let numCompletedActions = 0;

    const subs = Object.keys(actionMap).map((key) => {
      return actionMap[key].start({
        update: (v: any) => {
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
