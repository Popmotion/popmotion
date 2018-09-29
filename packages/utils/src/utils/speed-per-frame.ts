import { isNum } from '../inc';

/*
  Convert x per second to per frame velocity based on fps

  @param [number]: Unit per second
  @param [number]: Frame duration in ms
*/
export default (xps: number, frameDuration: number) =>
  isNum(xps) ? xps / (1000 / frameDuration) : 0;
