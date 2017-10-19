import action from '../action';
import { Observable } from '../action/types';
import { getValueFromProgress } from '../inc/calc';
import parallel from './parallel';

const crossfade = (a: Observable, b: Observable) => action((observer) => {
  let balance = 0;
  const fadable = parallel(a, b).start({
    ...observer,
    update: ([va, vb]: [number, number]) =>
      observer.update(getValueFromProgress(va, vb, balance))
  });

  return {
    setBalance: (v: number) => balance = v,
    stop: () => fadable.stop()
  };
});

export default crossfade;
