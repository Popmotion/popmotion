import './from-action';
import physics from 'popmotion/animations/physics';

export default (...args) => Rx.Observable.fromAction(physics(...args));

