import onNextFrame from './on-next-frame';
import coreTimer from './core-timer';

/**
 * `true` when loop is active
 * @type {Boolean}
 */
let isActive = false;

/**
 * Queue of methods to fire at the `update` stage.
 * We use two arrays, one for this frame and one to queue for the
 * next frame, reusing each to avoid GC.
 * @type {Array}
 */
let toUpdate = [];
let toUpdateNextFrame = [];

/**
 * Queue of methods to fire at the `render` stage
 * @type {Array}
 */
let toRender = [];
let toRenderNextFrame = [];

/**
 * Generic counter for render loops
 * @type {Number}
 */
let i = 0;

function startLoop() {
  if (!isActive) {
    coreTimer.start();
    isActive = true;
    onNextFrame(frame);
  }
}

/**
 * Update all queued methods and clear queue for next frame
 * @param  {Array} thisFrame
 * @param  {Array} nextFrame
 * @param  {Number} framestamp
 * @param  {Number} elapsed
 * @return {void}
 */
function executeQueue(thisFrame, nextFrame, framestamp, elapsed) {
  // Remove all items from next frame queue
  nextFrame.length = 0;

  const numThisFrame = thisFrame.length;
  for (i = 0; i < numThisFrame; i++) {
    if (thisFrame[i].isActive) {
      thisFrame[i](framestamp, elapsed);
    }
  }
}

function updateAll(framestamp, elapsed) {
  // Swap this frame/next frame arrays to avoid GC
  [toUpdate, toUpdateNextFrame] = [toUpdateNextFrame, toUpdate];
  executeQueue(toUpdate, toUpdateNextFrame, framestamp, elapsed);

  [toRender, toRenderNextFrame] = [toRenderNextFrame, toRender];
  executeQueue(toRender, toRenderNextFrame, framestamp, elapsed);

  return toUpdateNextFrame.length;
}

/**
 * Function to fire every frame where there's active updaters
 * @param  {number} framestamp
 * @return {void}
 */
function frame(framestamp) {
  coreTimer.update(framestamp);
  isActive = !!updateAll(coreTimer.elapsed);

  if (isActive) {
    onNextFrame(frame);
  }
}

export function onNextUpdate(callback) {
  if (!isActive) {
    startLoop();
  }

  if (toUpdateNextFrame.indexOf(callback) === -1) {
    callback.isActive = true;
    toUpdateNextFrame.push(callback);
  }
}

export function onNextRender(callback) {
  if (!isActive) {
    startLoop();
  }

  if (toRenderNextFrame.indexOf(callback) === -1) {
    callback.isActive = true;
    toRenderNextFrame.push(callback);
  }
}
