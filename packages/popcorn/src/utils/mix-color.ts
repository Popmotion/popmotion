import mix from './mix';
import { hsla, rgba, hex, Color } from 'style-value-types';
import { invariant } from 'hey-listen';

// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN

export const mixLinearColor = (from: number, to: number, v: number) => {
  const fromExpo = from * from;
  const toExpo = to * to;
  return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};

const colorTypes = [hex, rgba, hsla];
const getColorType = (v: Color | string) =>
  colorTypes.find(type => type.test(v));

const notAnimatable = (color: Color | string) =>
  `'${color}' is not an animatable color. Use the equivalent color code instead.`;

export default (from: Color | string, to: Color | string) => {
  const fromColorType = getColorType(from);
  const toColorType = getColorType(to);

  invariant(!!fromColorType, notAnimatable(from));
  invariant(!!toColorType, notAnimatable(to));
  invariant(
    fromColorType.transform === toColorType.transform,
    `Both colors must be hex/RGBA, OR both must be HSLA.`
  );

  const fromColor = fromColorType.parse(from);
  const toColor = toColorType.parse(to);
  const blended = { ...fromColor };

  // Only use the linear blending function for rgba and hex
  const mixFunc = fromColorType === hsla ? mix : mixLinearColor;

  return (v: number) => {
    for (const key in blended) {
      if (key !== 'alpha') {
        blended[key] = mixFunc(fromColor[key], toColor[key], v);
      }
    }

    blended.alpha = mix(fromColor.alpha, toColor.alpha, v);

    return fromColorType.transform(blended);
  };
};
