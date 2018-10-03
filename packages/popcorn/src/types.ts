export type Point2D = {
  x: number;
  y: number;
};

export type Point3D = Point2D & {
  z: number;
};

export type Point = Point2D | Point3D;
