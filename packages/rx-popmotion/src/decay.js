import './from-action';
import decay from 'popmotion/animations/decay';

export default (...args) => Rx.Observable.fromAction(decay(...args));

