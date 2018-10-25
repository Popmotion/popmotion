import { stepProgress } from '../calc';

describe('stepProgress', () => {
  it('should return a progress 0 - 1 to the fixed number of steps provided', () => {
    expect(stepProgress(3, .5)).toBe(.5);
    expect(stepProgress(3, .4)).toBe(.5);
    expect(stepProgress(3, .9)).toBe(1);
    expect(stepProgress(3, .1)).toBe(0);
  });

  it('should return the correct progress 0 - 1 on border boundaries', () => {
    expect(stepProgress(3, 0)).toBe(0);
    expect(stepProgress(3, .24)).toBe(0);
    expect(stepProgress(3, .25)).toBe(.5);
    expect(stepProgress(3, .74)).toBe(.5);
    expect(stepProgress(3, .75)).toBe(1);
    expect(stepProgress(3, 1)).toBe(1);
  });
});
