import {
  angle,
  degreesToRadians,
  distance,
  isPoint3D,
  isPoint,
  mix,
  pointFromVector,
  progress,
  radiansToDegrees,
  smoothFrame,
  velocityPerFrame,
  velocityPerSecond
} from '@popmotion/popcorn';
export {
  angle,
  degreesToRadians,
  distance,
  isPoint3D,
  isPoint,
  mix as dilate,
  mix as getValueFromProgress,
  pointFromVector as pointFromAngleAndDistance,
  progress as getProgressFromValue,
  radiansToDegrees,
  smoothFrame as smooth,
  velocityPerFrame as speedPerFrame,
  velocityPerSecond as speedPerSecond
};

/*
  Create stepped version of 0-1 progress

  @param [int]: Number of steps
  @param [number]: Current value
  @return [number]: Stepped value
*/
export const stepProgress = (steps: number, progress: number) => {
  const segment = 1 / (steps - 1);
  const subsegment = 1 / (2 * (steps - 1));
  const percentProgressOfTarget = Math.min(progress, 1);
  const subsegmentProgressOfTarget = percentProgressOfTarget / subsegment;
  const segmentProgressOfTarget = Math.floor(
    (subsegmentProgressOfTarget + 1) / 2
  );

  return segmentProgressOfTarget * segment;
};
