import { camelToDash } from '../../inc/utils';
import transformProps from '../css/transform-props';

const ZERO_NOT_ZERO = 0.0001;

export default function build(state, data) {
  let hasTransform = false;
  const props = {};
  const scale = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1;
  const scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale || 1;
  const transformOriginX = data.width * ((state.originX || 50) / 100) + data.x;
  const transformOriginY = data.height * ((state.originY || 50) / 100) + data.y;
  const scaleTransformX = - transformOriginX * (scale * 1);
  const scaleTransformY = - transformOriginY * (scaleY * 1);
  const scaleReplaceX = transformOriginX / scale;
  const scaleReplaceY = transformOriginY / scaleY;
  const transform = {
    translate: `translate(${state.translateX}, ${state.translateY}) `,
    scale: `translate(${scaleTransformX}, ${scaleTransformY}) scale(${scale}, ${scaleY}) translate(${scaleReplaceX}, ${scaleReplaceY}) `,
    rotate: `rotate(${state.rotate}, ${transformOriginX}, ${transformOriginY}) `,
    skewX: `skewX(${state.skewX}) `,
    skewY: `skewY(${state.skewY}) `
  };

  for (let key in state) {
    if (state.hasOwnProperty(key)) {
      if (transformProps[key]) {
        hasTransform = true;
      } else {
        props[camelToDash(key)] = state[key];
      }
    }
  }

  if (hasTransform) {
    props.transform = '';

    for (let key in transform) {
      if (transform.hasOwnProperty(key)) {
        const defaultValue = (key === 'scale') ? '1' : '0';
        props.transform += transform[key].replace(/undefined/g, defaultValue);
      }
    }
  }

  return props;
}
