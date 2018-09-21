import { Step, Process } from './types';
import { invariant } from 'hey-listen';

export default (setRunNextFrame: (fillRun: boolean) => void): Step => {
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
  const cancelled: WeakSet<Process> = new WeakSet();
  const toKeepAlive: WeakSet<Process> = new WeakSet();

  const renderStep: Step = {
    cancel: process => {
      const indexOfCallback = processToRunNextFrame.indexOf(process);
      cancelled.add(process);

      if (indexOfCallback !== -1) {
        processToRunNextFrame.splice(indexOfCallback, 1);
      }
    },

    process: frame => {
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
          process(frame);

          if (toKeepAlive.has(process) === true && !cancelled.has(process)) {
            renderStep.schedule(process);
            setRunNextFrame(true);
          }
        }
      }

      isProcessing = false;
    },

    schedule: (process, keepAlive, immediate) => {
      invariant(typeof process === 'function', 'Argument must be a function');
      const addToCurrentBuffer = immediate && isProcessing;
      const buffer = addToCurrentBuffer ? processToRun : processToRunNextFrame;

      if (keepAlive) toKeepAlive.add(process);

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
