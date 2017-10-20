import action from '../action';
import { Observable } from '../action/types';

const merge = (...actions: Observable[]) => action((observer) => {
  const subs = actions.map((thisAction) => thisAction.start({
    update: (v: any) => observer.update(v),
    complete: () => observer.complete()
  }));
  return {
    stop: () => subs.forEach((sub) => sub.stop())
  };
});

export default merge;