import { calc, tween } from 'popmotion';
import { color } from 'style-value-types';

const { getValueFromProgress } = calc;

type RGBA = {
  red: number,
  green: number,
  blue: number,
  alpha?: number
};

type HSLA = {
  hue: number,
  saturation: number,
  lightness: number,
  alpha?: number
};

type Color = HSLA | RGBA;

type ColorProps = {
  from: string,
  to: string,
  [key: string]: any
};

const blend = (from: number, to: number, v: number) => {
  const fromExpo = from * from;
  const toExpo = to * to;
  return Math.sqrt(v * (toExpo - fromExpo) + fromExpo);
};

// http://codepen.io/osublake/pen/xGVVaN
export const blendColor = (from: Color | string, to: Color | string) => {
  const fromColor = (typeof from === 'string') ? color.parse(from) : from;
  const toColor = (typeof to === 'string') ? color.parse(to): to;

  const blended = { ...fromColor };

  return (v: number) => {
    for (let key in blended) {
      blended[key] = blend(fromColor[key], toColor[key], v);
    }
    blended.red = blend(fromColor.red, toColor.red, v);
    blended.green = blend(fromColor.green, toColor.green, v);
    blended.blue = blend(fromColor.blue, toColor.blue, v);
    blended.alpha = getValueFromProgress(fromColor.alpha, toColor.alpha, v);
    return blended;
  };
};

const colorTween = ({ from, to, ...props }: ColorProps) =>
  tween(props).pipe(blendColor(from, to), color.transform);

export default colorTween;