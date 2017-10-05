import action from 'actions/action';
import parallel from './parallel';
import { Observable } from 'actions/action/types';
import { getValueFromProgress } from 'inc/calc';

const crossfade = (a: Observable, b: Observable) => action((observer) => {
  let balance = 0;
  const fadable = parallel(a, b).start({
    ...observer,
    update: ([va, vb]: [number, number]) =>
      observer.update(getValueFromProgress(va, vb, balance))
  });

  return {
    stop: () => fadable.stop(),
    setBalance: (v: number) => balance = v
  };
});

export default crossfade;
