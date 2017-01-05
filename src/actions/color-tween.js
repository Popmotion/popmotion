import tween from './tween';
import { blendColor, flow } from '../inc/transformers';
import { color } from '../inc/value-types';

const noop = () => {};

export default (props) => {
  return tween({
    ...props,
    from: 0,
    to: 1,
    onUpdate: flow(
      blendColor(props.from, props.to),
      color.transform,
      props.onUpdate || noop
    )
  });
};
