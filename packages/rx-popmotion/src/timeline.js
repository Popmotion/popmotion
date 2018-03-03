import './from-action';
import timeline from 'popmotion/animations/timeline';

export default (...args) => Rx.Observable.fromAction(timeline(...args));

