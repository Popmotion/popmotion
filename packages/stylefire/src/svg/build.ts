import { camelToDash } from '../styler/utils';
import { px } from 'style-value-types';
import { SVGState } from './types';
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

const defaultOrigin = 0.5;

const svgAttrsTemplate = (): SVGAttrs => ({
  style: {}
});

const progressToPixels = (progress: number, length: number) =>
  px.transform(progress * length);

const unmeasured = { x: 0, y: 0, width: 0, height: 0 };

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
    attrX,
    attrY,
    originX,
    originY,
    pathLength,
    pathSpacing = 1,
    pathOffset = 0,
    ...state
  }: State & SVGState,
  dimensions: Dimensions = unmeasured,
  totalPathLength?: number | undefined,
  cssBuilder: (state: State) => ResolvedState = createStyleBuilder(
    false,
    false
  ),
  attrs: SVGAttrs = svgAttrsTemplate(),
  isDashCase = true
) {
  const style = cssBuilder(state);

  for (const key in style) {
    if (key === 'transform') {
      attrs.style.transform = style[key] as string;
    } else {
      const attrKey =
        isDashCase && !camelCaseAttributes.has(key) ? camelToDash(key) : key;
      attrs[attrKey] = style[key];
    }
  }

  // Parse transformOrigin
  if (originX !== undefined || originY !== undefined || style.transform) {
    attrs.style.transformOrigin = calculateSVGTransformOrigin(
      dimensions,
      originX !== undefined ? originX : defaultOrigin,
      originY !== undefined ? originY : defaultOrigin
    );
  }

  // Treat x/y not as shortcuts but as actual attributes
  if (attrX !== undefined) attrs.x = attrX;
  if (attrY !== undefined) attrs.y = attrY;

  // Handle special path length attributes
  if (totalPathLength !== undefined && pathLength !== undefined) {
    attrs[
      isDashCase ? 'stroke-dashoffset' : 'strokeDashoffset'
    ] = progressToPixels(-pathOffset, totalPathLength);
    attrs[
      isDashCase ? 'stroke-dasharray' : 'strokeDasharray'
    ] = `${progressToPixels(
      pathLength as number,
      totalPathLength
    )} ${progressToPixels(pathSpacing as number, totalPathLength)}`;
  }

  return attrs;
}

export function createAttrBuilder(
  dimensions: Dimensions,
  totalPathLength?: number,
  isDashCase: boolean = true
) {
  const attrs: SVGAttrs = svgAttrsTemplate();
  const cssBuilder = createStyleBuilder(false, false);

  return (state: State & SVGState) =>
    buildSVGAttrs(
      state,
      dimensions,
      totalPathLength,
      cssBuilder,
      attrs,
      isDashCase
    );
}
