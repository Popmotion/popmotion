import Action from './Action';
import tween from './tween';

export default function delay(duration) {
  return tween({ duration });
};

