import { Point, Point2D, Point3D } from './input/pointer/types';
export declare const isPoint: (point: any) => point is Point;
export declare const isPoint3D: (point: Point) => point is Point3D;
export declare const angle: (a: Point, b?: Point) => number;
export declare const degreesToRadians: (degrees: number) => number;
export declare const dilate: (a: number, b: number, dilation: number) => number;
export declare const distance: (a: number | Point2D | Point3D, b?: number | Point2D | Point3D) => number;
export declare const getProgressFromValue: (from: number, to: number, value: number) => number;
export declare const getValueFromProgress: (from: number, to: number, progress: number) => number;
export declare const pointFromAngleAndDistance: (origin: Point2D, angle: number, distance: number) => {
    x: number;
    y: number;
};
export declare const radiansToDegrees: (radians: number) => number;
export declare const smooth: (newValue: number, oldValue: number, duration: number, smoothing?: number) => number;
export declare const speedPerFrame: (xps: number, frameDuration: number) => number;
export declare const speedPerSecond: (velocity: number, frameDuration: number) => number;
export declare const stepProgress: (steps: number, progress: number) => number;
