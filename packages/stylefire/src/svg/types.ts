export type Dimensions = {
  x: number,
  y: number,
  width: number,
  height: number
};

export type SVGState = {
  scale?: number,
  scaleX?: number,
  scaleY?: number,
  originX?: number,
  originY?: number,
  translateX?: number,
  translateY?: number,
  skewX?: number,
  skewY?: number,
  rotate?: number,
  pathLength?: number,
  pathOffset?: number,
  pathSpacing?: number,
  [key: string]: string | number
};

export type TransformState = {
  translate: string,
  scale: string,
  rotate: string,
  skewX: string,
  skewY: string,
  [key: string]: string
};
