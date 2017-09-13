import { onFrameUpdate } from 'framesync';
import action from '../rx/action';

const composite = (actionMap) => {
  return action((observer) => {
    const output = {};

    const updateOutput = () => observer.update(output);

    const subs = Object.keys(actionMap).map((key) => {
      const a = actionMap[key].start({
        update: (v) => {
          output[key] = v;
          onFrameUpdate(updateOutput);
        },
        complete: () => observer.complete()
      });
    });

    return {
      stop: () => subs.forEach((sub) => sub.stop())
    };
  });
};

export default composite;
