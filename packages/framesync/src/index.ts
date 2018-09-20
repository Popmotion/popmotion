// TODO: Fixed update loop

import onNextFrame from './on-next-frame';
import createStep from './create-render-step';
import { Process, StepId, SyncApi } from './types';

const maxElapsed = 40;
let defaultElapsed = (1 / 60) * 1000;
let useDefaultElapsed = true;
let willRunNextFrame = false;
let isProcessing = false;

const frame = {
  delta: 0,
  timestamp: 0
};

const stepsOrder = [
  StepId.Read,
  StepId.Update,
  StepId.Render,
  StepId.PostRender
];

const setWillRunNextFrame = (willRun: boolean) => (willRunNextFrame = willRun);

const { steps, sync, cancelSync } = stepsOrder.reduce(
  (acc, key) => {
    const step = createStep(setWillRunNextFrame);

    acc.sync[key] = (
      process: Process,
      keepAlive = false,
      immediate = false
    ) => {
      if (!willRunNextFrame) startLoop();
      step.schedule(process, keepAlive, immediate);
      return process;
    };

    acc.cancelSync[key] = (process: Process) => step.cancel(process);

    acc.steps[key] = step;

    return acc;
  },
  {
    steps: {},
    sync: {},
    cancelSync: {}
  } as SyncApi
);

const processStep = (stepId: StepId) => steps[stepId].process(frame);

const processFrame = (timestamp: number) => {
  willRunNextFrame = false;

  frame.delta = useDefaultElapsed
    ? defaultElapsed
    : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);

  // Set this elapsed as default elapsed
  // Maybe move this to a moving average for a more precise value
  if (!useDefaultElapsed) defaultElapsed = frame.delta;

  frame.timestamp = timestamp;

  isProcessing = true;
  stepsOrder.forEach(processStep);
  isProcessing = false;

  if (willRunNextFrame) {
    useDefaultElapsed = false;
    onNextFrame(processFrame);
  }
};

const startLoop = () => {
  willRunNextFrame = true;
  useDefaultElapsed = true;

  if (!isProcessing) onNextFrame(processFrame);
};

export const getFrameData = () => frame;

export default sync;
export { cancelSync };
