/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/
export default (velocity: number, frameDuration: number) =>
  frameDuration ? velocity * (1000 / frameDuration) : 0;
