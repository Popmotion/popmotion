import { easeOut, linear } from '../../inc/easing';
import { interpolate } from '../../inc/transformers';
import tween from '../tween';
import { KeyframeProps } from './types';

const defaultEasings = (values: number[]): Easing[] =>
  values.map((): Easing => easeOut).splice(0, values.length - 1);

const defaultTimings = (values: number[]): number[] => {
  const numValues = values.length;

  return values.map((value: number, i: number): number => (i !== 0) ? i / (numValues - 1) : 0);
};

const keyframes = ({ values, loop, yoyo, flip, ...props }: KeyframeProps) => {
  const duration = props.duration || 300;
  const ease = props.ease || defaultEasings(values);
  const times = props.times || defaultTimings(values);

  return tween({ duration, ease: linear, loop, yoyo, flip }).pipe(interpolate(times, values, ease));
};

export default keyframes;
