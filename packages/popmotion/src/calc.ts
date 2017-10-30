import { Point, Point2D, Point3D } from './input/pointer/types';

const isNum = (v: any): v is number => typeof v === 'number';

export const isPoint = (point: any): point is Point => {
  return (point as Point).x !== undefined && (point as Point).y !== undefined;
};

export const isPoint3D = (point: Point): point is Point3D => {
  return (point as Point3D).z !== undefined;
};

/*
  Convert number to x decimal places

  @param [number]
  @param [number]
  @return [number]
*/
const toDecimal = (num: number, precision: number = 2) => {
  precision = 10 ** precision;
  return Math.round(num * precision) / precision;
};

const ZERO_POINT: Point = {
  x: 0,
  y: 0,
  z: 0
};

const distance1D = (a: number, b: number) => Math.abs(a - b);

/*
  Angle between points

  Translates the hypothetical line so that the 'from' coordinates
  are at 0,0

  @param [object]: X and Y coordinates of from point
  @param [object]: X and Y coordinates of to point
  @return [radian]: Angle between the two points in radians
*/
export const angle = (a: Point, b: Point = ZERO_POINT) => radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));

/*
  Convert degrees to radians

  @param [number]: Value in degrees
  @return [number]: Value in radians
*/
export const degreesToRadians = (degrees: number) => degrees * Math.PI / 180;

/*
  Dilate

  Change the progression between a and b according to dilation.

  So dilation = 0.5 would change

  a --------- b

  to

  a ---- b

  @param [number]: Previous value
  @param [number]: Current value
  @param [number]: Dilate progress by x
  @return [number]: Previous value plus the dilated difference
*/
export const dilate = (a: number, b: number, dilation: number) => a + ((b - a) * dilation);

/*
  Distance

  Returns the distance between two n dimensional points.

  @param [object/number]: x and y or just x of point A
  @param [object/number]: (optional): x and y or just x of point B
  @return [number]: The distance between the two points
*/
export const distance = (a: Point | number, b: Point | number = ZERO_POINT): number => {
  // 1D dimensions
  if (isNum(a) && isNum(b)) {
    return distance1D(a, b);

  // Multi-dimensional
  } else if (isPoint(a) && isPoint(b)) {
    const xDelta = distance1D(a.x, b.x);
    const yDelta = distance1D(a.y, b.y);
    const zDelta = (isPoint3D(a) && isPoint3D(b)) ? distance1D(a.z, b.z) : 0;

    return Math.sqrt((xDelta ** 2) + (yDelta ** 2) + (zDelta ** 2));
  }

  return 0;
};

/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/
export const getProgressFromValue = (from: number, to: number, value: number) =>
  (value - from) / (to - from);

/*
  Value in range from progress

  Given a lower limit and an upper limit, we return the value within
  that range as expressed by progress (a number from 0-1)

  @param [number]: Lower limit of range
  @param [number]: Upper limit of range
  @param [number]: The progress between lower and upper limits expressed 0-1
  @return [number]: Value as calculated from progress within range (not limited within range)
*/
export const getValueFromProgress = (from: number, to: number, progress: number) =>
  (- progress * from) + (progress * to) + from;

/*
  Point from angle and distance

  @param [object]: 2D point of origin
  @param [number]: Angle from origin
  @param [number]: Distance from origin
  @return [object]: Calculated 2D point
*/
export const pointFromAngleAndDistance = (origin: Point2D, angle: number, distance: number) => {
  angle = degreesToRadians(angle);

  return {
    x: distance * Math.cos(angle) + origin.x,
    y: distance * Math.sin(angle) + origin.y
  };
};

/*
  Convert radians to degrees

  @param [number]: Value in radians
  @return [number]: Value in degrees
*/
export const radiansToDegrees = (radians: number) => radians * 180 / Math.PI;

/*
  Framerate-independent smoothing

  @param [number]: New value
  @param [number]: Old value
  @param [number]: Frame duration
  @param [number] (optional): Smoothing (0 is none)
*/
export const smooth = (newValue: number, oldValue: number, duration: number, smoothing: number = 0) =>
  toDecimal(oldValue + (duration * (newValue - oldValue) / Math.max(smoothing, duration)));

/*
  Convert x per second to per frame velocity based on fps

  @param [number]: Unit per second
  @param [number]: Frame duration in ms
*/
export const speedPerFrame = (xps: number, frameDuration: number) =>
  (isNum(xps)) ? xps / (1000 / frameDuration) : 0;

/*
  Convert velocity into velicity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/
export const speedPerSecond = (velocity: number, frameDuration: number) =>
  frameDuration ? velocity * (1000 / frameDuration) : 0;

/*
  Create stepped version of 0-1 progress

  @param [int]: Number of steps
  @param [number]: Current value
  @return [number]: Stepped value
*/
export const stepProgress = (steps: number, progress: number) => {
  const segment = 1 / (steps - 1);
  const target = 1 - (1 / steps);
  const progressOfTarget = Math.min(progress / target, 1);

  return Math.floor(progressOfTarget / segment) * segment;
};
