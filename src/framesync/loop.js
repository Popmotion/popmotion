import onNextFrame from './on-next-frame';

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
const toUpdate = [];
const toUpdateNextFrame = [];

/**
 * Queue of methods to fire at the `render` stage
 * @type {Array}
 */
const toRender = [];
const toRenderNextFrame = [];

/**
 * Internal Clock to get frame elapsed time
 * @type {Clock}
 */
const internalClock = new Clock();

/**
 * Generic counter for render loops
 * @type {Number}
 */
let i = 0;

function startLoop() {
  if (!isActive) {
    // start timeer here
    isActive = true;
    onNextFrame(frame);
  }
}

/**
 * Update all queued methods and clear queue for next frame
 * @param  {Array} thisFrame
 * @param  {Array} nextFrame
 * @param  {Number} elapsed
 * @return {void}
 */
function executeQueue(thisFrame, nextFrame, elapsed) {
  // Remove all items from next frame queue
  nextFrame.length = 0;

  const numThisFrame = thisFrame.length;
  for (i = 0; i < numThisFrame; i++) {
    thisFrame[i](elapsed);
  }
}

function updateAll(framestamp, elapsed) {
  // Swap this frame/next frame arrays to avoid GC
  [toUpdate, toUpdateNextFrame] = [toUpdateNextFrame, toUpdate];
  executeQueue(toUpdate, toUpdateNextFrame, elapsed);

  [toRender, toRenderNextFrame] = [toRenderNextFrame, toRender];
  executeQueue(toRender, toRenderNextFrame, elapsed);

  return toUpdateNextFrame.length;
}

/**
 * Function to fire every frame where there's active updaters
 * @param  {number} framestamp
 * @return {void}
 */
function frame(framestamp) {
  internalClock.update(framestamp);
  isActive = !!updateAll(framestamp, internalClock.getVelocity());

  if (isActive) {
    onNextFrame(frame);
  }
}

export function onNextUpdate(callback) {
  if (!isActive) {
    startLoop();
  }

  if (toUpdateNextFrame.indexOf(callback) === -1) {
    toUpdateNextFrame.push(callback);
  }
}

export function onNextRender(callback) {
  if (toRenderNextFrame.indexOf(callback) === -1) {
    toRenderNextFrame.push(callback);
  }
}
