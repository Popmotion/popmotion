import { mix } from '@popmotion/popcorn';
import action, { Action } from '../action';
import parallel from './parallel';

const crossfade = (a: Action, b: Action) =>
  action(observer => {
    let balance = 0;
    const fadable = parallel(a, b).start({
      ...observer,
      update: ([va, vb]: [number, number]) => {
        observer.update(mix(va, vb, balance));
      }
    });

    return {
      setBalance: (v: number) => (balance = v),
      stop: () => fadable.stop()
    };
  });

export default crossfade;
