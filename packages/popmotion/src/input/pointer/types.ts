export type PointerPoint = {
  clientX: number,
  clientY: number,
  pageX: number,
  pageY: number,
  x: number,
  y: number
};

export type Point2D = {
  x: number,
  y: number
};

export type Point3D = Point2D & {
  z: number
};

export type Point = Point2D | Point3D;

export type PointerProps = {
  x?: number,
  y?: number,
  preventDefault?: boolean,
  scale?: number,
  rotate?: number
};
