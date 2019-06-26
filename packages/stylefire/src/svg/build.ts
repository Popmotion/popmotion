import { camelToDash } from '../styler/utils';
import { px } from 'style-value-types';
import { Dimensions, SVGState } from './types';
import { camelCaseAttributes } from './attr-formatting';
import { createStyleBuilder } from '../css/build-styles';
import { State, ResolvedState } from '../styler/types';

export type SVGAttrs = {
  [key: string]: any;
  style?: {
    transform?: string;
    transformOrigin?: string;
  };
};

const svgAttrsTemplate = (): SVGAttrs => ({
  style: {}
});

const progressToPixels = (progress: number, length: number) =>
  px.transform(progress * length);

export type Dimensions = {
  x: number;
  y: number;
  width: number;
  height: number;
};

function calcOrigin(origin: number | string, offset: number, size: number) {
  return typeof origin === 'string'
    ? origin
    : px.transform(offset + size * origin);
}

function calculateSVGTransformOrigin(
  dimensions: Dimensions,
  originX: number | string,
  originY: number | string
) {
  return `${calcOrigin(originX, dimensions.x, dimensions.width)} ${calcOrigin(
    originY,
    dimensions.y,
    dimensions.height
  )}`;
}

export function buildSVGAttrs(
  {
    x,
    y,
    z,
    originX = 0.5,
    originY = 0.5,
    pathLength,
    pathSpacing = 1,
    pathOffset = 0,
    ...state
  }: State & SVGState,
  dimensions: Dimensions,
  totalPathLength?: number | undefined,
  cssBuilder: (state: State) => ResolvedState = createStyleBuilder(
    false,
    false
  ),
  attrs: SVGAttrs = svgAttrsTemplate()
) {
  const style = cssBuilder(state);

  for (const key in style) {
    if (key === 'transform') {
      attrs.style.transform = style[key] as string;
    } else {
      let attrKey = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
      attrs[attrKey] = style[key];
    }
  }

  // Parse transformOrigin
  if (originX !== undefined || originY !== undefined) {
    attrs.style.transformOrigin = calculateSVGTransformOrigin(
      dimensions,
      originX as number,
      originY as number
    );
  }

  // Treat x/y not as shortcuts but as actual attributes
  if (x !== undefined) attrs.x = x;
  if (y !== undefined) attrs.y = y;

  // Handle special path length attributes
  if (totalPathLength !== undefined && pathLength !== undefined) {
    attrs['stroke-dashoffset'] = progressToPixels(-pathOffset, totalPathLength);
    attrs['stroke-dasharray'] = `${progressToPixels(
      pathLength,
      totalPathLength
    )} ${progressToPixels(pathSpacing, totalPathLength)}`;
  }

  return attrs;
}

export function createAttrBuilder(
  dimensions: Dimensions,
  totalPathLength?: number
) {
  const attrs: SVGAttrs = svgAttrsTemplate();
  const cssBuilder = createStyleBuilder(false, false);

  return (state: State & SVGState) =>
    buildSVGAttrs(state, dimensions, totalPathLength, cssBuilder, attrs);
}
