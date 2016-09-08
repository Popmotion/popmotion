import onNextFrame from './on-next-frame';
import createRenderStep from './create-render-step';
import { currentTime } from '../inc/utils';

let willRenderNextFrame = false;

/**
 * Maximum permitted ms since last frame
 * @type {Number}
 */
const MAX_ELAPSED = 20;

/**
 * Current framestamp
 * @type {Number}
 */
let currentFramestamp = currentTime();

let elapsed = 0;

/**
 * Factor to multiply `elapsed` by - 
 * 0.5 would be slow motion, 2 would be fast
 * @type {Number}
 */
let dilation = 1;

function startRenderLoop() {
  if (!willRenderNextFrame) {
    willRenderNextFrame = true;
    onNextFrame(processFrame);
  }
}

const frameStart = createRenderStep(startRenderLoop);
const frameUpdate = createRenderStep(startRenderLoop);
const frameRender = createRenderStep(startRenderLoop);
const frameEnd = createRenderStep(startRenderLoop);

function processFrame(framestamp) {
  willRenderNextFrame = false;
  elapsed = Math.max(Math.min(framestamp - currentFramestamp, MAX_ELAPSED), 1) * dilation;
  currentFramestamp = framestamp;

  frameStart.process(framestamp, elapsed);
  frameUpdate.process(framestamp, elapsed);
  frameRender.process(framestamp, elapsed);
  frameEnd.process(framestamp, elapsed);
}

export const onFrameStart = frameStart.schedule;
export const onFrameUpdate = frameUpdate.schedule;
export const onFrameRender = frameRender.schedule;
export const onFrameEnd = frameEnd.schedule;
export const cancelOnFrameStart = frameStart.cancel;
export const cancelOnFrameUpdate = frameUpdate.cancel;
export const cancelOnFrameRender = frameRender.cancel;
export const cancelOnFrameEnd = frameEnd.cancel;

export const timeSinceLastFrame = () => elapsed;
