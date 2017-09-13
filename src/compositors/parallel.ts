import { onFrameUpdate } from 'framesync';
import action from '../rx/action';

const parallel = (...actions) => {
  return action((observer) => {
    const output = new Array(actions.length);
    const updateOutput = () => observer.update(output);

    const subs = actions.map((a, i) => a.start({
      update: (v) => {
        output[i] = v;
        onFrameUpdate(updateOutput);
      },
      // todo: check here if all are complete
      complete: () => observer.complete()
    }));

    return {
      stop: () => subs.forEach((sub) => sub.stop())
    };
  });
};

export default parallel;

