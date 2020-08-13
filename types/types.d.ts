export declare type Point2D = {
  x: number;
  y: number;
};
export declare type Point3D = Point2D & {
  z: number;
};
export declare type Point = Point2D | Point3D;
