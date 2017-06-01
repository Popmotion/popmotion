import tween from './tween';
import { blendColor, flow } from '../inc/transformers';
import { color } from '../inc/value-types';

const noop = () => {};

export default ({ from, to }) => {
  return tween({
    ...props,
    from: 0,
    to: 1,
    transform: flow(blendColor(from, to), color.transform)
  });
};
