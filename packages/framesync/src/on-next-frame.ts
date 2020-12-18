/*
  Detect and load appropriate clock setting for the execution environment
 */
export const defaultTimestep = (1 / 60) * 1000

export const onNextFrame =
    typeof window !== "undefined"
        ? (callback: FrameRequestCallback) =>
              window.requestAnimationFrame(callback)
        : (callback: FrameRequestCallback) =>
              setTimeout(() => callback(performance.now()), defaultTimestep)
