/*
  Convert x per second to per frame velocity based on fps

  @param [number]: Unit per second
  @param [number]: Frame duration in ms
*/
export function velocityPerFrame(xps: number, frameDuration: number) {
    return xps / (1000 / frameDuration)
}
