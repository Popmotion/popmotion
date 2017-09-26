import tween from './tween';
import { easeOut, linear } from 'inc/easing';
import { interpolate } from 'inc/transformers';
import { Easing } from 'inc/easing';

type KeyframeProps = {
  values: number[],
  times?: number[],
  ease?: Easing[],
  duration?: 300
};

const defaultEasings = (values: number[]): Easing[] =>
  values.map((): Easing => easeOut).splice(0, values.length - 1);

const defaultTimings = (values: number[]): number[] => {
  const numValues = values.length;

  return values.map((value: number, i: number): number => (i !== 0) ? i / (numValues - 1) : 0);
};

const keyframes = ({ values, ...props }: KeyframeProps) => {
  const duration = props.duration || 300;
  const ease = props.ease || defaultEasings(values);
  const times = props.times || defaultTimings(values);

  return tween({ duration, ease: linear }).pipe(interpolate(times, values, ease));
};

export default keyframes;
