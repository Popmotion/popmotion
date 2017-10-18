import action from '../action';
import { ObservableFactory, Subscription } from '../action/types';

type ActionStarter = () => Subscription;
type Interval = (i: number) => number | number;

const stagger = (actionStarters: ActionStarter[], interval: Interval, onComplete?: Function): ObservableFactory => {
  delay(timeToDelay).start({
    complete: actionStarter
  });
  
  
  return parallel(actionStarters.map((actionStarter, i) => {
    const intervalIsFunction = typeof interval === 'number';
    const timeToDelay = intervalIsFunction ? interval : interval(i);
    return chain(
      delay(timeToDelay),
      actionStarter()
    );
  }));
};

export default stagger;



