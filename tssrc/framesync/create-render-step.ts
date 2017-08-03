interface CallbackScheduler {
  (callback: Function): void
}

interface RenderStep {
  readonly schedule: CallbackScheduler,
  readonly cancel: CallbackScheduler,
  readonly process: Function
}

export default function createRenderStep(startRenderLoop: Function): RenderStep {
  /**
   * We use two arrays, one for this frame and one to queue for the
   * next frame, reusing each to avoid GC.
   * @type {Array}
   */
  let functionsToRun: Function[] = [];
  let functionsToRunNextFrame: Function[] = [];

  return {
    schedule: (callback: Function) => {
      startRenderLoop();
      // If this callback isn't already scheduled to run next frame
      if (functionsToRunNextFrame.indexOf(callback) === -1) {
        functionsToRunNextFrame.push(callback);
      }
    },

    cancel: (callback: Function) => {
      const indexOfCallback = functionsToRunNextFrame.indexOf(callback);
      if (indexOfCallback !== -1) {
        functionsToRunNextFrame.splice(indexOfCallback, 1);
      }
    },

    process: () => {
      // Swap this frame and next frame arrays to avoid GC
      [functionsToRun, functionsToRunNextFrame] = [functionsToRunNextFrame, functionsToRun];

      // Clear next frame list
      functionsToRunNextFrame.length = 0;

      // Execute all of this frame's functions
      const numThisFrame = functionsToRun.length;
      for (let i = 0; i < numThisFrame; i++) {
        functionsToRun[i]();
      }
    }
  };
}
