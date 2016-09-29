export default function createRenderStep(startRenderLoop) {
  /**
   * We use two arrays, one for this frame and one to queue for the
   * next frame, reusing each to avoid GC.
   * @type {Array}
   */
  let functionsToRun = [];
  let functionsToRunNextFrame = [];

  return {
    schedule: (callback) => {
      startRenderLoop();
      // If this callback isn't already scheduled to run next frame
      if (functionsToRunNextFrame.indexOf(callback) === -1) {
        functionsToRunNextFrame.push(callback);
      }
    },

    cancel: (callback) => {
      const indexOfCallback = functionsToRunNextFrame.indexOf(callback);
      if (indexOfCallback !== -1) {
        functionsToRunNextFrame.splice(indexOfCallback, 1);
      }
    },

    process: (framestamp, elapsed) => {
      // Swap this frame and next frame arrays to avoid GC
      [functionsToRun, functionsToRunNextFrame] = [functionsToRunNextFrame, functionsToRun];

      // Clear next frame list
      functionsToRunNextFrame.length = 0;

      // Execute all of this frame's functions
      const numThisFrame = functionsToRun.length;
      for (let i = 0; i < numThisFrame; i++) {
        functionsToRun[i](framestamp, elapsed);
      }
    }
  };
}