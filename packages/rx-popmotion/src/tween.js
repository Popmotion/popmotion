import './from-action';
import tween from 'popmotion/animations/tween';

export default (props) => Rx.Observable.fromAction(tween(props));

