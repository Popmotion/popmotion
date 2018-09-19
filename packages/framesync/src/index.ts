import onNextFrame from './on-next-frame';
import step from './create-render-step';
import { Process, StepId, StepMap } from './types';

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
  StepId.Update,
  StepId.PreRender,
  StepId.Render,
  StepId.PostRender
];

const setWillRunNextFrame = (willRun: boolean) => (willRunNextFrame = willRun);

const steps: StepMap = stepsOrder.reduce(
  (acc: StepMap, key: StepId) => {
    acc[key] = step(key, setWillRunNextFrame);
    return acc;
  },
  {} as StepMap
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

const sync = (process: Process) => {
  if (!willRunNextFrame) startLoop();

  for (const key in steps) {
    if (process[key as StepId]) steps[key as StepId].schedule(process);
  }

  return process;
};

const cancelSync = (process: Process) => {
  stepsOrder.forEach(stepId => steps[stepId].cancel(process));
};

export default sync;
export { cancelSync };
