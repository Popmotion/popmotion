import './from-action';
import pointer from 'popmotion/input/pointer';

export default (...args) => Rx.Observable.fromAction(pointer(...args));

