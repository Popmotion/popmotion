import { timeSinceLastFrame } from 'framesync';
import { speedPerSecond } from '../inc/calc';
const calcVelocity = (current: number, prev: number, timeDelta: number): number =>
  speedPerSecond(current - prev, timeDelta);

export const observer1D = (init, props) => ({ update, complete }) => {
  let prev: number;
  let current: number;
  let timeDelta = 0;

  const observerApi = init(props)({
    update: (v: number) => {
      timeDelta = timeSinceLastFrame();
      prev = current;
      current = v;
      update(v);
    },
    complete
  });

  return {
    get: () => current,
    getVelocity: () => calcVelocity(current, prev, timeDelta),
    getProp: (key: string) => props[key],
    ...observerApi
  };
};
