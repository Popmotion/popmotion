import './from-action';
import spring from 'popmotion/animations/spring';

export default (...args) => Rx.Observable.fromAction(spring(...args));

