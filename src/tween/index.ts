import action from '../action';
import clock from '../actions/clock';
import { observer1D } from '../inc/observer-creators';
import { TweenInterface, TweenProps } from './types';

const initTween = ({
  from = 0,
  to = 1,
  duration = 300,
  elapsed = 0,
  ease = easeOut,
  playDirection = 1,
  flip = 0,
  flipCount = 0,
  loop = 0,
  loopCount = 0,
  yoyo = 0,
  yoyoCount = 0
}: TweenProps = {}) => ({ update, complete }) => {

};

const tween = (props: TweenProps) => action(observer1D(initTween, props));
