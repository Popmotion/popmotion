import './from-action';
import everyFrame from 'popmotion/animations/every-frame';

export default (...args) => Rx.Observable.fromAction(everyFrame(...args));

