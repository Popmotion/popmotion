import './from-action';
import keyframes from 'popmotion/animations/keyframes';

export default (...args) => Rx.Observable.fromAction(keyframes(...args));

