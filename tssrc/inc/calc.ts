/*
  Convert x per second to per frame velocity based on fps

  @param [number]: Unit per second
  @param [number]: Frame duration in ms
*/
export const speedPerFrame = (xps: number, frameDuration: number): number =>
  xps / (1000 / frameDuration);

/*
  Convert velocity into velicity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/
export const speedPerSecond = (velocity: number, frameDuration: number = 0): number =>
  frameDuration ? velocity * (1000 / frameDuration) : 0;


