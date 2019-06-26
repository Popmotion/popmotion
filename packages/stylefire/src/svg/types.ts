export type Dimensions = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type SVGState = {
  scale?: string | number;
  scaleX?: string | number;
  scaleY?: string | number;
  originX?: string | number;
  originY?: string | number;
  translateX?: string | number;
  translateY?: string | number;
  skewX?: string | number;
  skewY?: string | number;
  rotate?: string | number;
  pathLength?: string | number;
  pathOffset?: string | number;
  pathSpacing?: string | number;
  numOctaves?: string | number;
  [key: string]: string | number;
};

export type TransformState = {
  translate: string;
  scale: string;
  rotate: string;
  skewX: string;
  skewY: string;
  [key: string]: string;
};
