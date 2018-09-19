import { FrameData, StepId, Step, Process } from './types';

export default (
  stepId: StepId,
  setRunNextFrame: (fillRun: boolean) => void
): Step => {
  /**
   * We use two arrays, one for this frame and one to queue for the
   * next frame, reusing each to avoid GC.
   * @type {Array}
   */
  let processToRun: Process[] = [];
  let processToRunNextFrame: Process[] = [];
  let numThisFrame = 0;
  let isProcessing = false;
  let i = 0;

  const renderStep: Step = {
    cancel: (process: Process) => {
      const indexOfCallback = processToRunNextFrame.indexOf(process);
      process.isCancelled = true;

      if (indexOfCallback !== -1) {
        processToRunNextFrame.splice(indexOfCallback, 1);
      }
    },

    process: (frame: FrameData) => {
      isProcessing = true;

      // Swap this frame and next frame arrays to avoid GC
      [processToRun, processToRunNextFrame] = [
        processToRunNextFrame,
        processToRun
      ];

      // Clear next frame list
      processToRunNextFrame.length = 0;

      // Execute all of this frame's functions
      numThisFrame = processToRun.length;

      if (numThisFrame) {
        let process: Process;
        for (i = 0; i < numThisFrame; i++) {
          process = processToRun[i];
          process[stepId](frame);

          if (process.keepAlive === true && process.isCancelled !== true) {
            renderStep.schedule(process);
            setRunNextFrame(true);
          }
        }
      }

      isProcessing = false;
    },

    schedule: (process: Process) => {
      const addToCurrentBuffer = process.immediate && isProcessing;
      const buffer = addToCurrentBuffer ? processToRun : processToRunNextFrame;

      // If this callback isn't already scheduled to run next frame
      if (buffer.indexOf(process) === -1) {
        buffer.push(process);

        // If we're adding to the current buffer, update its size
        if (addToCurrentBuffer) numThisFrame = processToRun.length;
      }
    }
  };

  return renderStep;
};
