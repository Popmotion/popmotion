export type Dimensions = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type SVGState = {
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
