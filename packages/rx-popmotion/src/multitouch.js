import './from-action';
import multitouch from 'popmotion/input/multitouch';

export default (...args) => Rx.Observable.fromAction(multitouch(...args));

