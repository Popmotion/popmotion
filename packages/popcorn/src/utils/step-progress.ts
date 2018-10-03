/*
  Create stepped version of 0-1 progress

  @param [int]: Number of steps
  @param [number]: Current value
  @return [number]: Stepped value
*/
export type Direction = 'start' | 'end';

export default (steps: number, direction: Direction = 'end') => (
  progress: number
) => {
  const segment = 1 / (steps - 1);
  const subsegment = 1 / (2 * (steps - 1));
  const percentProgressOfTarget = Math.min(progress, 1);
  const subsegmentProgressOfTarget = percentProgressOfTarget / subsegment;
  const segmentProgressOfTarget = Math.floor(
    (subsegmentProgressOfTarget + 1) / 2
  );

  return segmentProgressOfTarget * segment;
};
