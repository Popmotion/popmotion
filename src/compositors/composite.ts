import { onFrameUpdate } from 'framesync';
import action from '../rx/action';

const composite = (actionMap) => {
  return action(({ update }) => {
    const output = {};

    const updateOutput = () => update(output);

    const subs = Object.keys(actionMap).map((key) => {
      const a = actionMap[key].start((v) => {
        output[key] = v;
        onFrameUpdate(updateOutput);
      });
    });

    return {
      stop: () => subs.forEach((sub) => sub.stop())
    };
  });
};

export default composite;
