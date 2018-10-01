import mix from './mix';
import { color, hsla, Color } from 'style-value-types';

// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN

const mixLinearColor = (from: number, to: number, v: number) => {
  const fromExpo = from * from;
  const toExpo = to * to;
  return Math.sqrt(v * (toExpo - fromExpo) + fromExpo);
};

export default (from: Color | string, to: Color | string) => {
  const fromColor = typeof from === 'string' ? color.parse(from) : from;
  const toColor = typeof to === 'string' ? color.parse(to) : to;
  const blended = { ...fromColor };

  // Only use the sqrt blending function for rgba and hex
  const mixFunc =
    typeof from === 'string' && hsla.test(from as string)
      ? mix
      : mixLinearColor;

  return (v: number) => {
    for (const key in blended) {
      if (key !== 'alpha' && blended.hasOwnProperty(key)) {
        blended[key] = mixFunc(fromColor[key], toColor[key], v);
      }
    }

    blended.alpha = mix(fromColor.alpha, toColor.alpha, v);

    return blended;
  };
};
