import { Animatable, AnimationOptions, PlaybackControls } from './types';
export declare function animate<V extends Animatable>({
  from,
  to,
  autoplay,
  driver,
  elapsed,
  repeat: repeatMax,
  repeatType,
  repeatDelay,
  onPlay,
  onComplete,
  onRepeat,
  onUpdate,
  ...options
}: AnimationOptions<V>): PlaybackControls;
