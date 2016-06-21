import {
  hasProperty,
  isNum,
  findValueAndUnit,
  toDecimal
} from './utils';

const ZERO_POINT = {
  x: 0,
  y: 0,
  z: 0
};

const distance1D = (a, b) => Math.abs(a - b);

/*
  Angle between points
  
  Translates the hypothetical line so that the 'from' coordinates
  are at 0,0
  
  @param [object]: X and Y coordinates of from point
  @param [object]: X and Y cordinates of to point
  @return [radian]: Angle between the two points in radians
*/
export const angle = (a, b = ZERO_POINT) => radiansToDegrees(Math.atan2(a.x - b.x, a.y - b.y));

/*
  Convert degrees to radians
  
  @param [number]: Value in degrees
  @return [number]: Value in radians
*/
export const degreesToRadians = (degrees) => degrees * Math.PI / 180;

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
export const dilate = (a, b, dilation) => a + ((b - a) * dilation);

/*
  Distance
  
  Returns the distance between two n dimensional points.
  
  @param [object/number]: x and y or just x of point A
  @param [object/number]: (optional): x and y or just x of point B
  @return [number]: The distance between the two points
*/
export const distance = (a, b = ZERO_POINT) => {
  // 1D dimensions
  if (isNum(a)) {
    return distance1D(a, b);

  // Multi-dimensional
  } else {
    const xDelta = distance1D(a.x, b.x);
    const yDelta = distance1D(a.y, b.y);
    const zDelta = (isNum(a.z)) ? distance1D(a.z, b.z) : 0;

    return Math.sqrt((xDelta ** 2) + (yDelta ** 2) + (zDelta ** 2));
  }
};

/*
  Ease value within ranged parameters
  
  @param [number]: Progress between 0 and 1
  @param [number]: Value of 0 progress
  @param [number]: Value of 1 progress
  @param [string || function]: Name of preset easing
    to use or generated easing function
  @return [number]: Value of eased progress in range
*/ 
export const ease = (progress, from, to, ease) => {
  const progressLimited = restrict(progress, 0, 1);
  const easedProgress = ease(progressLimited);

  return getValueFromProgress(easedProgress, from, to);
};
 
/*
  Hypotenuse
  
  Returns the hypotenuse, side C, given the lengths of sides A and B.
  
  @param [number]: Length of A
  @param [number]: Length of B
  @return [number]: Length of C
*/
export const hypotenuse = (a, b) => Math.sqrt((a * a) + (b * b));

/*
  Value in range from progress
  
  Given a lower limit and an upper limit, we return the value within
  that range as expressed by progress (a number from 0-1)
  
  @param [number]: The progress between lower and upper limits expressed 0-1
  @param [number]: Lower limit of range
  @param [number]: Upper limit of range
  @return [number]: Value as calculated from progress within range (not limited within range)
*/
export const getValueFromProgress = (progress, from, to) => (- progress * from) + (progress * to) + from;

/*
  Progress within given range
  
  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.
  
  @param [number]: Value to find progress within given range
  @param [number]: Lower limit 
  @param [number]: Upper limit
  @return [number]: Progress of value within range as expressed 0-1
*/
export const getProgressFromValue = (value, from, to) => (value - from) / (to - from);

/*
  Offset between two objects of numbers

  If property is found in b not present in a, it will return `0` for that prop.
  
  @param [Point]: First object
  @param [Point]: Second object
  @return [Offset]: Distance metrics between two points
*/
export const offset = (a, b) => {
  const offset = {};

  for (let key in b) {
    if (b.hasOwnProperty(key)) {
      offset[key] = hasProperty(a, key) ? b[key] - a[key] : 0;
    }
  }

  return offset;
};

/*
  Point from angle and distance
  
  @param [object]: 2D point of origin
  @param [number]: Angle from origin
  @param [number]: Distance from origin
  @return [object]: Calculated 2D point
*/
export const pointFromAngleAndDistance = (origin, angle, distance) => {
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
export const radiansToDegrees = (radians) => radians * 180 / Math.PI;

/*
  Return random number between range
  
  @param [number] (optional): Output minimum
  @param [number] (optional): Output maximum
  @return [number]: Random number within range, or 0 and 1 if none provided
*/
export const random = (min = 0, max = 1) => Math.random() * (max - min) + min;

/*
  Calculate relative value
  
  Takes the operator and value from a string, ie "+=5", and applies
  to the current value to resolve a new target.
  
  @param [number]: Current value
  @param [string]: Relative value
  @return [number]: New value
*/
export const relativeValue = (current, relative) => {
  let newValue = current;
  const equation = relative.split('=');
  const operator = equation[0];
  let { unit, value } = findValueAndUnit(equation[1]);

  value = parseFloat(value);

  switch (operator) {
  case '+':
    newValue += value;
    break;
  case '-':
    newValue -= value;
    break;
  case '*':
    newValue *= value;
    break;
  case '/':
    newValue /= value;
    break;
  }
  
  if (unit) {
    newValue += unit;
  }

  return newValue;
};

/*
  Restrict value to range
  
  Return value within the range of lowerLimit and upperLimit
  
  @param [number]: Value to keep within range
  @param [number]: Lower limit of range
  @param [number]: Upper limit of range
  @return [number]: Value as limited within given range
*/
export const restrict = (value, min, max) => Math.max(Math.min(value, max), min);

/*
  Framerate-independent smoothing

  @param [number]: New value
  @param [number]: Old value
  @param [number]: Frame duration
  @param [number] (optional): Smoothing (0 is none)
*/
export const smooth = (newValue, oldValue, duration, smoothing = 0) => toDecimal(oldValue + (duration * (newValue - oldValue) / Math.max(smoothing, duration)));

/*
  Convert x per second to per frame velocity based on fps
  
  @param [number]: Unit per second
  @param [number]: Frame duration in ms
*/
export const speedPerFrame = (xps, frameDuration) => (isNum(xps)) ? xps / (1000 / frameDuration) : 0;

/*
  Convert velocity into velicity per second
  
  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/
export const speedPerSecond = (velocity, frameDuration) => velocity * (1000 / frameDuration);

/*
  Create stepped version of 0-1 progress
  
  @param [number]: Current value
  @param [int]: Number of steps
  @return [number]: Stepped value
*/
export const stepProgress = (progress, steps) => {
  const segment = 1 / (steps - 1);
  const target = 1 - (1 / steps);
  const progressOfTarget = Math.min(progress / target, 1);

  return Math.floor(progressOfTarget / segment) * segment;
};