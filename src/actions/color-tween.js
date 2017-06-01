import tween from './tween';
import { blendColor, pipe } from '../inc/transformers';
import { color } from '../inc/value-types';

export default ({ from, to, ...props }) => {
  return tween({
    ...props,
    from: 0,
    to: 1,
    transform: flow(blendColor(from, to), color.transform)
  });
};
