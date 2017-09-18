import tween from './tween';
import { blendColor } from '../inc/transformers';
import { color } from '../inc/value-types';

type ColorProps = {
  from: string,
  to: string,
  [key: string]: any
};

const colorTween = ({ from, to, ...props }: ColorProps) =>
  tween(props).pipe(blendColor(from, to), color.transform);

export default colorTween;