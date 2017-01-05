import tween from './tween';
import { blendColor, flow } from '../inc/transformers';
import { color } from '../inc/value-types';
const logAndPass = (v) => { console.log(v); return v}
const noop = () => {};

export default (props) => {
  return tween({
    ...props,
    from: 0,
    to: 1,
    onUpdate: flow(
      blendColor(props.from, props.to),
      logAndPass,
      color.transform,
      logAndPass,
      props.onUpdate || noop
    )
  });
};
