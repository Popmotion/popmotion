import { camelToDash } from '../styler/utils';
import { isTransformProp } from '../css/transform-props';
import { Dimensions, SVGState, TransformState } from './types';

// Little hack to avoid division by zero
const ZERO_NOT_ZERO = 0.0000001;

const percentToPixels = (percent: number, length: number) =>
  (percent / 100) * length + 'px';

const build = (state: SVGState, dimensions: Dimensions, isPath: boolean, pathLength?: number) => {
  let hasTransform = false;
  let hasDashArray = false;

  const props: SVGState = {};
  const dashArrayStyles = isPath ? {
    pathLength: '0',
    pathSpacing: `${pathLength}`
  } : undefined;

  // Standardise transform to saner CSS model. Currently, we're applying actual
  // transforms to the SVG element - a massive performance win here would be
  // to do this "offline" and then apply only the minimal transform to the element
  const scale = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1;
  const scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale || 1;
  const transformOriginX = dimensions.width * ((state.originX || 50) / 100) + dimensions.x;
  const transformOriginY = dimensions.height * ((state.originY || 50) / 100) + dimensions.y;
  const scaleTransformX = - transformOriginX * (scale * 1);
  const scaleTransformY = - transformOriginY * (scaleY * 1);
  const scaleReplaceX = transformOriginX / scale;
  const scaleReplaceY = transformOriginY / scaleY;
  const transform: TransformState = {
    translate: `translate(${state.translateX}, ${state.translateY}) `,
    scale: `translate(${scaleTransformX}, ${scaleTransformY}) scale(${scale}, ${scaleY}) translate(${scaleReplaceX}, ${scaleReplaceY}) `,
    rotate: `rotate(${state.rotate}, ${transformOriginX}, ${transformOriginY}) `,
    skewX: `skewX(${state.skewX}) `,
    skewY: `skewY(${state.skewY}) `
  };

  for (let key in state) {
    if (state.hasOwnProperty(key)) {
      const value = state[key];

      if (isTransformProp(key)) {
        hasTransform = true;

      // If this is a dash-array
      } else if (isPath && (key === 'pathLength' || key === 'pathSpacing') && typeof value === 'number') {
        hasDashArray = true;
        dashArrayStyles[key] = percentToPixels(value, pathLength);

      } else if (isPath && key === 'pathOffset') {
        props['stroke-dashoffset'] = percentToPixels(-value, pathLength);

      } else {
        props[camelToDash(key)] = value;
      }
    }
  }

  if (hasDashArray) {
    props['stroke-dasharray'] = dashArrayStyles.pathLength + ' ' + dashArrayStyles.pathSpacing;
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
};

export default build;
